insert into role (name) values ('ROLE_USER');

insert into user (username, password, registration_date, phone_number) values ('user1', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user2', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user3', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user4', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user5', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user6', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user7', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user8', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user9', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');
insert into user (username, password, registration_date, phone_number) values ('user10', '$2a$10$CHpTUkoViMwvmW6oql/l..lww6pBbzRcJvOJXM3/YRWeaHIrS7lba', '2021-07-20', '0611111111');

insert into user_role(user_id, role_id) values (1,1);
insert into user_role(user_id, role_id) values (2,1);
insert into user_role(user_id, role_id) values (3,1);
insert into user_role(user_id, role_id) values (4,1);
insert into user_role(user_id, role_id) values (5,1);
insert into user_role(user_id, role_id) values (6,1);
insert into user_role(user_id, role_id) values (7,1);
insert into user_role(user_id, role_id) values (8,1);
insert into user_role(user_id, role_id) values (9,1);
insert into user_role(user_id, role_id) values (10,1);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 1', 'description', 'clothing.jpg', 10 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 2', 'description', 'clothing.jpg', 11 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 3', 'description', 'clothing.jpg', 12 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 4', 'description', 'clothing.jpg', 13 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 5', 'description', 'clothing.jpg', 1 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 6', 'description', 'clothing.jpg', 2 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 7', 'description', 'clothing.jpg', 100 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 8', 'description', 'clothing.jpg', 110 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 9', 'description', 'clothing.jpg', 15 ,'2021-07-20', 'CLOTHING', 1);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Clothing 10', 'description', 'clothing.jpg', 19 ,'2021-07-20', 'CLOTHING', 1);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 1', 'description', 'tools.jpg', 100 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 2', 'description', 'tools.jpg', 10 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 3', 'description', 'tools.jpg', 15 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 4', 'description', 'tools.jpg', 23 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 5', 'description', 'tools.jpg', 24 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 6', 'description', 'tools.jpg', 86 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 7', 'description', 'tools.jpg', 1001 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 8', 'description', 'tools.jpg', 17 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 9', 'description', 'tools.jpg', 53 ,'2021-07-21', 'TOOLS', 2);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Tool 10', 'description', 'tools.jpg', 30 ,'2021-07-21', 'TOOLS', 2);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 1', 'description', 'sports.jpg', 10 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 2', 'description', 'sports.jpg', 100 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 3', 'description', 'sports.jpg', 11 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 4', 'description', 'sports.jpg', 25 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 5', 'description', 'sports.jpg', 13 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 6', 'description', 'sports.jpg', 47 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 7', 'description', 'sports.jpg', 59 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 8', 'description', 'sports.jpg', 89 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 9', 'description', 'sports.jpg', 63 ,'2021-07-22', 'SPORTS', 3);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Sport 10', 'description', 'sports.jpg', 101 ,'2021-07-22', 'SPORTS', 3);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 1', 'description', 'accessories.jpg', 10 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 2', 'description', 'accessories.jpg', 100 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 3', 'description', 'accessories.jpg', 101 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 4', 'description', 'accessories.jpg', 102 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 5', 'description', 'accessories.jpg', 103 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 6', 'description', 'accessories.jpg', 107 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 7', 'description', 'accessories.jpg', 104 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 8', 'description', 'accessories.jpg', 108 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 9', 'description', 'accessories.jpg', 17 ,'2021-07-23', 'ACCESSORIES', 4);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Accessory 10', 'description', 'accessories.jpg', 12 ,'2021-07-23', 'ACCESSORIES', 4);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 1', 'description', 'furniture.jpg', 17 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 2', 'description', 'furniture.jpg', 18 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 3', 'description', 'furniture.jpg', 45 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 4', 'description', 'furniture.jpg', 132 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 5', 'description', 'furniture.jpg', 1000 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 6', 'description', 'furniture.jpg', 100000 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 7', 'description', 'furniture.jpg', 10000 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 8', 'description', 'furniture.jpg', 107 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 9', 'description', 'furniture.jpg', 140 ,'2021-07-24', 'FURNITURE', 5);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Furniture 10', 'description', 'furniture.jpg', 1089 ,'2021-07-24', 'FURNITURE', 5);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 1', 'description', 'pets.jpg', 100 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 2', 'description', 'pets.jpg', 14 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 3', 'description', 'pets.jpg', 50 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 4', 'description', 'pets.jpg', 20 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 5', 'description', 'pets.jpg', 90 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 6', 'description', 'pets.jpg', 1000 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 7', 'description', 'pets.jpg', 110 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 8', 'description', 'pets.jpg', 1000 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 9', 'description', 'pets.jpg', 1099 ,'2021-07-30', 'PETS', 6);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Pet 10', 'description', 'pets.jpg', 1500 ,'2021-07-30', 'PETS', 6);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 1', 'description', 'games.jpg', 10 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 2', 'description', 'games.jpg', 20 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 3', 'description', 'games.jpg', 40 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 4', 'description', 'games.jpg', 50 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 5', 'description', 'games.jpg', 30 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 6', 'description', 'games.jpg', 60 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 7', 'description', 'games.jpg', 70 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 8', 'description', 'games.jpg', 80 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 9', 'description', 'games.jpg', 90 ,'2021-07-25', 'GAMES', 7);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Game 10', 'description', 'games.jpg', 100 ,'2021-07-25', 'GAMES', 7);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 1', 'description', 'books.jpg', 10 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 2', 'description', 'books.jpg', 5 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 3', 'description', 'books.jpg', 11 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 4', 'description', 'books.jpg', 13 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 5', 'description', 'books.jpg', 7 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 6', 'description', 'books.jpg', 8 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 7', 'description', 'books.jpg', 12 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 8', 'description', 'books.jpg', 9 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 9', 'description', 'books.jpg', 19 ,'2021-07-26', 'BOOKS', 8);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Book 10', 'description', 'books.jpg', 3 ,'2021-07-26', 'BOOKS', 8);

insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 1', 'description', 'technology.jpg', 100 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 2', 'description', 'technology.jpg', 1000 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 3', 'description', 'technology.jpg', 10000 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 4', 'description', 'technology.jpg', 50 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 5', 'description', 'technology.jpg', 500 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 6', 'description', 'technology.jpg', 59 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 7', 'description', 'technology.jpg', 79 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 8', 'description', 'technology.jpg', 99 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 9', 'description', 'technology.jpg', 199 ,'2021-07-27', 'TECHNOLOGY', 9);
insert into ad (name, description, image_url, price, creation_date, category, user_id)
values ('Technology 10', 'description', 'technology.jpg', 19 ,'2021-07-27', 'TECHNOLOGY', 9);