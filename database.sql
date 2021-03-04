DROP DATABASE obm;
CREATE DATABASE obm;
USE obm;
CREATE TABLE obm_list (ID int NOT NULL AUTO_INCREMENT PRIMARY KEY, title text, gamesystem text, ownership text, status text, achievement text, achievement_max text, progress text, playing text, wishlist text, appid text);