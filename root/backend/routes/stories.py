
from database import get_db
from fastapi import APIRouter, Depends
from models.models import Settings, Stories
from schemas.schemas import Story
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
    return db.scalar(story_query)