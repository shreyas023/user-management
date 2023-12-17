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
**3. Install Dependencie**s:<br>
```npm install```<br>
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
<br>
**MySQL Setup (Choose one)** :<br>
- Install MySQL locally or use XAMPP to set up a local server.<br>
- Ensure MySQL is running on the same device as the application for the 1-tier architecture.<br>
<br>
**Starting the Application** :<br>
-Run the following command to start the server:<br>
```npm start```<br>
-Access the application in your browser via **'http://localhost:5000'**.
<br><br>
**Project Overview**:<br>
The system provides user-friendly CRUD functionalities (Add, View, Edit, Delete) for managing users. Technologies used include Node.js, Express for server-side logic, MySQL for database management, and Express Handlebars for templating.<br><br>
**Future Scope**:<br>
**2-Tier and 3-Tier Architecture**:<br>
-Future enhancements might involve transitioning from the current 1-tier architecture to 2 or 3-tier architectures for scalability and better separation of concerns.
-Introduction of separate layers for the database, server, and client-side components to improve modularity and maintainability.<br><br>
This repository serves as a foundational project demonstrating backend/frontend integration for user management. Contributions, feedback, and enhancements are welcome!

