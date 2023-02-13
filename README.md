# Getting Started with Create React App

This is a project made with Node.js and React both with Typescript, for the database I used MySQL.
this is the code in SQL I used for the database:

#

use node_ts;

CREATE TABLE `node_ts`.`usuarios` (
`id` INT NOT NULL auto_increment,
`name` VARCHAR(45) NOT NULL,
`email` VARCHAR(45) NOT NULL UNIQUE,
`password` VARCHAR(45) NOT NULL,
`state` tinyint not null default 1,
`rol` VARCHAR(10) NOT NULL,
`createdAt` timestamp default null,
`updatedAt` timestamp default null,
PRIMARY KEY (`id`));

select * from usuarios;

#

Then for use this repository you need to fill de file 'connection.ts' in 'db' folder,
open the terminal, for run the backend use the command 'nodemon dist/app.js',
open another terminal and in the backend folder use this command 'tsc --watch --jsx react'.
And for front end, go to the folder 'front-react' and use the command 'npm start'

# Project description

The backend make a CRUD that you can use with the React project. In this project you can see the public and private routes, the public routes have different levels, depend for the user rol that have the user you are making. The roles are 'user', 'Admin' and ' Web Master'. In this project I used the 'react router', the 'localStorage', I created a context with createContext() and all in Typescript. for the comunication with the backend in Node I used the library 'axios', in the navbar have buttons give some funcionality to the project, you can see all the list of users created, or you can look for them in the search bar with the code or email and clicking the button you can see it evidenced in red in the list page.

You can make users in the Register Page, just to try the functionalities, every user can choose own role and modify it, after logged you can access to the privates routes, in the navbar will appear a button for Admin or Web Master for visit more routes for more funcionalities for the Web Master like eliminate a user, activate or deactivate a user, but in this section is not possible to eliminate itself. Have another page where you can modify your data or eliminate your account, really in the 'Delete Page' is deactivated and then the Web Master can delete definitely the user. the Web Master and Admin can see all the list deactivate and active users in their privates routes, instead of in the list page accessible to all users with all rols is possible see only activate users.
