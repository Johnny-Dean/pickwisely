from fastapi import FastAPI
from models.models import Users

app = FastAPI()

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