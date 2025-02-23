from database import get_db
from fastapi import APIRouter, Depends
from models.models import Stories, Users
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/users")
def get_all_users(db: Session = Depends(get_db)):
    users_query = db.query(Users)
    return users_query.all()

@router.get("/users/{user_id}")
def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    user_query = db.query(Users).filter(Users.user_id == user_id)
    return user_query.first()

@router.get("/users/{user_id}/stories")
def get_user_stories(user_id: int, db: Session = Depends(get_db)):
    user_stories_query = db.query(Stories).filter(Stories.assigned_user == user_id)
    return user_stories_query.all()