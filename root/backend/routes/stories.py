
from database import get_db
from fastapi import APIRouter, Depends
from models.models import Stories, Users
from schemas.schemas import Story
from sqlalchemy import select
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/stories", response_model=list[Story])
def get_all_stories(user_id: int | None = None, db: Session = Depends(get_db)):
    stories_query = select(Stories, Users).join(Users, Stories.user_id == Users.user_id)
    if user_id:
        stories_query = stories_query.filter(Stories.user_id == user_id)

    return db.scalars(stories_query).all()


@router.get("/stories/{story_id}", response_model=Story)
def get_story_by_story_id(story_id: int, db: Session = Depends(get_db)):
    story_query = db.query(Stories).filter(Stories.story_id == story_id)

    return story_query.first()