# See: https://stackoverflow.com/questions/73700879/interaction-between-pydantic-models-schemas-in-the-fastapi-tutorial

from datetime import datetime

from pydantic import BaseModel, ConfigDict


class Setting(BaseModel):
    setting_id: int
    long_text: str
    short_text: str

class Character(BaseModel):
    character_id: int
    character_name: str

class Story(BaseModel):
    story_id: int
    title: str
    body: str
    character_id: int
    user_id: int
    status: str
    created_at: datetime
    initial_setting_id: int
    initial_setting: Setting

class User(BaseModel):
    user_id: int
    username: str
    role: str
    created_at: datetime
    email: str