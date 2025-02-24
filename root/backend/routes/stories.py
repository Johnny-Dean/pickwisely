
from database import get_db
from fastapi import APIRouter, Depends
from models.models import Stories, StoryLogs
from schemas.schemas import Story, StoryChoiceOption, StoryLog
from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

router = APIRouter()

@router.get("/stories", response_model=list[Story])
def get_all_stories(user_id: int | None = None, db: Session = Depends(get_db)):
    query = db.query(Stories).options(joinedload(Stories.initial_setting))

    if user_id:
        query = query.filter(Stories.user_id == user_id)
    
    stories = query.all()
    return stories

@router.get("/stories/{story_id}", response_model=Story)
def get_story_by_story_id(story_id: int, db: Session = Depends(get_db)):
    story_query = select(Stories).filter(Stories.story_id == story_id)
    return db.scalar(story_query) # TODO Fix syntax to match get_all_stories

@router.get("/stories/{story_id}/logs", response_model=list[StoryLog])
def get_logs_by_story_id(story_id: int, db: Session = Depends(get_db)):
    logs_query = db.query(StoryLogs)\
        .options(joinedload(StoryLogs.story_choice_options))\
        .filter(StoryLogs.story_id == story_id)

    logs = logs_query.all()

    result = []
    for log in logs:
        # Order story_choice_options by choice_order
        choice_options = {}
        for option in log.story_choice_options:
            choice_options[option.choice_order] = StoryChoiceOption.model_validate(option)

        result.append(StoryLog(
            story_log_id=log.story_log_id,
            story_level=log.story_level,
            character_sanity=log.character_sanity,
            in_progress=log.in_progress,
            prompt_asked=log.prompt_asked,
            story_choice_options=choice_options
        ))

    return result 


