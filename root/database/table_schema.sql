CREATE TABLE "users" (
  "user_id" integer PRIMARY KEY,
  "username" varchar,
  "role" varchar,
  "created_at" timestamp,
  "email" varchar
);

CREATE TABLE "user_states" (
  "user_id" integer PRIMARY KEY,
  "current_story_id" integer,
  "last_active_at" timestamp
);

CREATE TABLE "stories" (
  "story_id" integer PRIMARY KEY,
  "title" varchar,
  "body" text,
  "initial_setting" integer,
  "assigned_character" integer,
  "status" varchar,
  "created_at" timestamp
);

CREATE TABLE "story_logs" (
  "story_id" integer,
  "story_log_id" integer PRIMARY KEY,
  "story_level" integer,
  "character_sanity" integer,
  "in_progress" boolean
);

CREATE TABLE "story_choice_options" (
  "story_log_id" integer,
  "choice_id" integer,
  "prompt_asked" varchar,
  "was_picked" boolean,
  "choice_order" varchar,
  PRIMARY KEY(story_log_id,choice_id)
);

CREATE TABLE "choices" (
  "choice_id" integer PRIMARY KEY,
  "sanity_weight" integer,
  "long_text" varchar,
  "short_summary" varchar
);

CREATE TABLE "settings" (
  "setting_id" integer PRIMARY KEY,
  "long_text" varchar,
  "short_summary" varchar
);

CREATE TABLE "characters" (
  "character_id" integer PRIMARY KEY,
  "character_name" varchar
);

CREATE TABLE "traits" (
  "trait_id" integer PRIMARY KEY,
  "trait_label" varchar
);

CREATE TABLE "character_to_trait" (
  "character_id" integer,
  "trait_id" integer
);

ALTER TABLE "user_states" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "user_states" ADD FOREIGN KEY ("current_story_id") REFERENCES "stories" ("story_id");

ALTER TABLE "stories" ADD FOREIGN KEY ("initial_setting") REFERENCES "settings" ("setting_id");

ALTER TABLE "stories" ADD FOREIGN KEY ("assigned_character") REFERENCES "characters" ("character_id");

ALTER TABLE "story_logs" ADD FOREIGN KEY ("story_id") REFERENCES "stories" ("story_id");

ALTER TABLE "story_choice_options" ADD FOREIGN KEY ("story_log_id") REFERENCES "story_logs" ("story_log_id");

ALTER TABLE "story_choice_options" ADD FOREIGN KEY ("choice_id") REFERENCES "choices" ("choice_id");

ALTER TABLE "character_to_trait" ADD FOREIGN KEY ("character_id") REFERENCES "characters" ("character_id");

ALTER TABLE "character_to_trait" ADD FOREIGN KEY ("trait_id") REFERENCES "traits" ("trait_id");