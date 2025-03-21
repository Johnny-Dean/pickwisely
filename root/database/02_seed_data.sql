-- Privileges
INSERT INTO privileges (role, permissions, resource) VALUES
('admin', 'read,write,delete', 'all'),
('user', 'read,write', 'stories'),
('guest', 'read', 'stories');

-- Users
INSERT INTO users (user_id, username, role, created_at, email) VALUES
(1, 'admin_user', 'admin', NOW(), 'admin@example.com'),
(2, 'regular_user', 'user', NOW(), 'user@example.com'),
(3, 'guest_user', 'guest', NOW(), 'guest@example.com');

-- Settings
INSERT INTO settings (setting_id, long_text, short_text) VALUES
(1, 'A dark and stormy night in a Victorian mansion...', 'Victorian mansion'),
(2, 'Deep in the catacombs beneath an ancient city...', 'Ancient catacombs'),
(3, 'Aboard a derelict spaceship drifting through the void...', 'Abandoned spaceship');

-- Characters
INSERT INTO characters (character_id, character_name) VALUES
(1, 'Detective Smith'),
(2, 'Professor Williams'),
(3, 'Doctor Hyde');

-- Traits
INSERT INTO traits (trait_id, trait_label) VALUES
(1, 'Curious'),
(2, 'Skeptical'),
(3, 'Brave'),
(4, 'Cautious');

-- Character Traits
INSERT INTO character_to_trait (character_id, trait_id) VALUES
(1, 1), -- Detective Smith is Curious
(1, 3), -- Detective Smith is Brave
(2, 2), -- Professor Williams is Skeptical
(2, 4), -- Professor Williams is Cautious
(3, 1), -- Doctor Hyde is Curious
(3, 2); -- Doctor Hyde is Skeptical

-- Stories
INSERT INTO stories (story_id, title, body, initial_setting_id, character_id, user_id, status, created_at) VALUES
(1, 'The Mansion Mystery', 'The investigation begins...', 1, 1, 1, 'active', NOW()),
(2, 'Ancient Secrets', 'Deep beneath the city...', 2, 2, 2, 'pending', NOW()),
(3, 'Space Horror', 'In the cold void of space...', 3, 3, 3, 'completed', NOW());

-- User States
INSERT INTO user_states (user_id, current_story_id, last_active_at) VALUES
(1, 1, NOW()),
(2, 2, NOW()),
(3, 3, NOW());

-- Story Logs
INSERT INTO story_logs (story_id, story_log_id, story_level, character_sanity, in_progress, prompt_asked) VALUES
(1, 1, 1, 100, true, 'You hear a strange noise. What do you do?'),
(2, 2, 1, 95, true, 'You find an ancient book. What do you do?'),
(3, 3, 2, 85, false, 'A dark doorway beckons. What do you do?');

-- Story Choice Options
INSERT INTO story_choice_options (story_log_id, choice_option_id, was_picked, choice_order, sanity_weight, long_text, short_text) VALUES
(1, 1, true, 1, -5, 'Investigate the strange noise coming from the basement', 'Check basement'),
(1, 3, false, 2, -10, 'Read the mysterious ancient tome', 'Read tome'),
(2, 2, true, 1, 0, 'Call for backup', 'Get help'),
(3, 4, true, 1, -15, 'Enter the dark chamber alone', 'Enter chamber');