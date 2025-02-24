CREATE TABLE "privileges" (
  "role" varchar PRIMARY KEY,
  "permissions" varchar,
  "resource" varchar
);

CREATE TABLE "users" (
  "user_id" integer PRIMARY KEY,
  "username" varchar,
  "role" varchar REFERENCES "privileges" ("role"),
  "created_at" timestamp,
  "email" varchar
);

CREATE TABLE "settings" (
  "setting_id" integer PRIMARY KEY,
  "long_text" varchar,
  "short_text" varchar
);

CREATE TABLE "characters" (
  "character_id" integer PRIMARY KEY,
  "character_name" varchar
);

CREATE TABLE "stories" (
  "story_id" integer PRIMARY KEY,
  "title" varchar,
  "body" text,
  "initial_setting_id" integer REFERENCES "settings" ("setting_id"),
  "character_id" integer REFERENCES "characters" ("character_id"),
  "user_id" integer REFERENCES "users" ("user_id"),
  "status" varchar,
  "created_at" timestamp
);

CREATE TABLE "user_states" (
  "user_id" integer REFERENCES "users" ("user_id") PRIMARY KEY,
  "current_story_id" integer REFERENCES "stories" ("story_id"),
  "last_active_at" timestamp
);

CREATE TABLE "story_logs" (
  "story_id" integer REFERENCES "stories" ("story_id"),
  "story_log_id" integer PRIMARY KEY,
  "story_level" integer,
  "character_sanity" integer,
  "in_progress" boolean,
  "prompt_asked" varchar
);

CREATE TABLE "story_choice_options" (
  "story_log_id" integer REFERENCES "story_logs" ("story_log_id"),
  "choice_option_id" integer PRIMARY KEY,
  "was_picked" boolean,
  "choice_order" integer,
  "sanity_weight" integer,
  "long_text" varchar,
  "short_text" varchar
);

CREATE TABLE "traits" (
  "trait_id" integer PRIMARY KEY,
  "trait_label" varchar
);

CREATE TABLE "character_to_trait" (
  "character_id" integer REFERENCES "characters" ("character_id"),
  "trait_id" integer REFERENCES "traits" ("trait_id")
);