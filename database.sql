DROP DATABASE obm;
CREATE DATABASE obm;
USE obm;
CREATE TABLE obm_list (ID int NOT NULL AUTO_INCREMENT PRIMARY KEY, title text, gamesystem text, ownership int, state int, achievement int, achievement_max int, onlineinfo text, progress text, rating int, playing int, whishlist int, appid text);