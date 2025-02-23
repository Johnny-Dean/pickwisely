from fastapi import FastAPI
from models.models import Users
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL
from sqlalchemy.orm import Session

app = FastAPI()

db_url = URL.create(
     drivername="postgresql",
     username="postgres",
     password="123", 
     host="postgres_db",
     database="pickwisely_dev",
     port=5432
 )

engine = create_engine(db_url)
session = Session(engine)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/users")
def get_all_users():
    users_query = session.query(Users)
    return users_query.all()

@app.get("/users/{user_id}")
def get_user_by_id(user_id: int):
    user_query = session.query(Users).filter(Users.user_id == user_id)
    return user_query.first()