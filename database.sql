DROP DATABASE obm;
CREATE DATABASE obm;
USE obm;
CREATE TABLE obm_list (ID int NOT NULL AUTO_INCREMENT PRIMARY KEY, title text, gamesystem text, ownership int, status int, achievement int, achievement_max int, progress text, playing int, whishlist int, appid text);