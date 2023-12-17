# User Management System (Node.js, Express, MySQL)
**Introduction**:
This repository contains a user management system developed using Node.js, Express, and MySQL. The system offers CRUD functionalities for managing users via a web interface.
<br><br>
**Installation Guide:**<br>
**1. Install Node.js**:<br>
   Download and install Node.js from <a href="https://nodejs.org/">here</a>.<br><br>
**2. Clone repository**:<br>
```git clone <repository_URL>```<br>
```cd <repository_directory>```<br><br>
**3. Install Dependencies**:<br>
```
npm install
npm install express, express-handlebars, body-parsers, mysql, routes
npm install --save-dev dotenv
```
Dependencies include Express, Express Handlebars, Body-parser, dotenv, and other necessary packages.<br><br>
**Server Setup**<br>
Create a **.env** file with the following environment variables:<br>
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database_name
PORT=5000
```
**MySQL Setup (Choose one)** :<br>
- Install MySQL locally or use XAMPP to set up a local server.<br>
- Ensure MySQL is running on the same device as the application for the 1-tier architecture.<br><br>

**Create Database Schema**:<br>

1. If you haven't created the database yet, create it using<br>
```CREATE DATABASE usermanagementsystem;```<br>
2. Switch to the database:<br>
```USE usermanagementsystem;```<br>
3. Copy and Paste SQL Query.
<br>
4. Locate the 'user-schema.sql' file in your repository.
<br>
5. Open the file and copy the SQL query.
<br>
6. Run the SQL Query.
<br><br>
Paste the copied query into your MySQL command prompt or tool and execute it.<br>
This will create the user table with the specified schema in your usermanagementsystem database.<br><br>

**Starting the Application** :<br>
Run the following command to start the server:<br>
```
npm start
```
Access the application in your browser via **'http://localhost:5000'**.
<br><br>
**Project Overview**:<br>
The system provides user-friendly CRUD functionalities (Add, View, Edit, Delete) for managing users. Technologies used include Node.js, Express for server-side logic, MySQL for database management, and Express Handlebars for templating.<br><br>
**Future Scope**:<br>
**2-Tier and 3-Tier Architecture**:<br>
Future enhancements might involve transitioning from the current 1-tier architecture to 2 or 3-tier architectures for scalability and better separation of concerns.<br>
Introduction of separate layers for the database, server, and client-side components to improve modularity and maintainability.<br><br>
This repository serves as a foundational project demonstrating backend/frontend integration for user management. Contributions, feedback, and enhancements are welcome!

