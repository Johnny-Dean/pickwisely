# TODO: This needs to be split up forsurely...
# how to split it up though? by table? or relation?
from datetime import datetime

from sqlalchemy import ForeignKey
from sqlalchemy.orm import (
    DeclarativeBase,
    Mapped,
    mapped_column,
)


class Base(DeclarativeBase):
    pass

class Privleges(Base):
    __tablename__ = "privliges"
    role: Mapped[str] = mapped_column(primary_key=True)
    permissions: Mapped[str]
    resource: Mapped[str]

class Users(Base):
    __tablename__ = "users"
    user_id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str]
    role: Mapped[str] = mapped_column(ForeignKey(Privleges.role))
    created_at: Mapped[datetime]
    email: Mapped[str]

class Settings(Base):
    __tablename__ = "settings"
    setting_id: Mapped[int] = mapped_column(primary_key=True)
    long_text: Mapped[str]
    short_text: Mapped[str]

class Characters(Base):
    __tablename__ = "characters"
    character_id: Mapped[int] = mapped_column(primary_key=True)
    character_name: Mapped[str]

class Stories(Base):
    __tablename__ = "stories"
    story_id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]
    body: Mapped[str]
    initial_setting: Mapped[int] = mapped_column(ForeignKey(Settings.setting_id))
    assigned_character: Mapped[int] = mapped_column(ForeignKey(Characters.character_id))
    status: Mapped[str]
    created_at: Mapped[datetime]

class UserStates(Base):
    __tablename__ = "user_states"
    user_id: Mapped[int] = mapped_column(ForeignKey(Users.user_id), primary_key=True)
    current_story: Mapped[int] = mapped_column(ForeignKey(Stories.story_id), primary_key=True)
    last_active_at: Mapped[datetime]

class StoryLogs(Base):
    __tablename__ = "story_logs"
    story_id: Mapped[int] = mapped_column(ForeignKey(Stories.story_id))
    story_log_id: Mapped[int] = mapped_column(primary_key=True)
    story_level: Mapped[int]
    character_sanity: Mapped[int]
    in_progress: Mapped[bool]

class Choices(Base):
    __tablename__ = "choices"
    choice_id: Mapped[int] = mapped_column(primary_key=True)
    sanity_weight = Mapped[int]
    long_text: Mapped[str]
    short_summary: Mapped[str]

class StoryChoiceOptions(Base):
    __tablename__ = "story_choice_options"
    story_log_id: Mapped[int] = mapped_column(ForeignKey(StoryLogs.story_log_id), primary_key=True)
    choice_id: Mapped[int] = mapped_column(ForeignKey(Choices.choice_id), primary_key=True)
    prompt_asked: Mapped[str]
    was_picked: Mapped[bool]
    choice_order: Mapped[str]
    
class Traits(Base):
    __tablename__ = "traits"
    trait_id: Mapped[int] = mapped_column(primary_key=True)
    trait_label: Mapped[str]

class CharacterToTrait(Base):
    __tablename__ = "character_to_trait"
    character_id: Mapped[int] = mapped_column(ForeignKey(Characters.character_id), primary_key=True)
    trait_id: Mapped[int] = mapped_column(ForeignKey(Traits.trait_id), primary_key=True)
