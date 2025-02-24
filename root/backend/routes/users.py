from database import get_db
from fastapi import APIRouter, Depends
from models.models import Users
from schemas.schemas import User
from sqlalchemy import select
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/users", response_model=list[User])
def get_all_users(db: Session = Depends(get_db)):
    users_query = select(Users)
    return db.scalars(users_query).all()

@router.get("/users/{user_id}", response_model=User)
def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    user_query = select(Users).filter(Users.user_id == user_id)
    return db.scalar(user_query)