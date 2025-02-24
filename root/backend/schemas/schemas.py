# See: https://stackoverflow.com/questions/73700879/interaction-between-pydantic-models-schemas-in-the-fastapi-tutorial

from datetime import datetime
from typing import Annotated

from pydantic import BaseModel


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
    user_id: int
    status: str
    created_at: datetime
    initial_setting: Setting
    character: Character

class StoryChoiceOption(BaseModel):
    was_picked: bool
    choice_order: int
    sanity_weight: int
    long_text: str
    short_text: str

    class Config:
        from_attributes = True

class StoryLog(BaseModel):
    story_log_id: int
    story_level: int
    character_sanity: int
    in_progress: bool
    prompt_asked: str
    story_choice_options: dict[int, StoryChoiceOption]

class User(BaseModel):
    user_id: int
    username: str
    role: str
    created_at: datetime
    email: str