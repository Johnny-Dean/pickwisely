# See: https://stackoverflow.com/questions/73700879/interaction-between-pydantic-models-schemas-in-the-fastapi-tutorial

from datetime import datetime

from pydantic import BaseModel, ConfigDict


class Story(BaseModel):
    story_id: int
    title: str
    body: str
    initial_setting: int
    character_id: int 
    user_id: int
    status: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

class User(BaseModel):
    user_id: int
    username: str
    role: str
    created_at: datetime
    email: str
    model_config = ConfigDict(from_attributes=True)