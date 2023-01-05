# eCommerce-Sample


## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [License](#license)

## Introduction

A virtual ecommerce website using React js,  Node js, Express js, and MongoDb.

NOTE: Please read the RUN section before opening an issue.

## Demo

![screenshot](https://github.com/RAZIBK/eCommerce-machineTask/blob/main/Screenshot%202022-11-14%20194352.jpg)
![screenshot](https://github.com/RAZIBK/eCommerce-machineTask/blob/main/Screenshot%202022-11-14%20194457.jpg)


The website resembles that  you can add product, category and subcategory in your website.


## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGODB_URL:     This is the mongo db url (string).

- CLOUDINARY_CLOUD_NAME:  This is the cloudenary name (string).

- CLOUDINARY_SECURITY_KEY :  This is the cloudenary secrity key (string)

- CLOUDINARY_API_KEY : This is the cloudenary api key (String)

- PORT: Specify the port Number

After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `npm install`

Now you can run `npm start` in the terminal and the application should work.

## Technology

The application is built with:

- Node.js 
- MongoDB
- Express 
- React js 
- Tailwind css


## Features

- Products can be viewed from landing page with categories wise filter product
- Add new product
- Add category and sub categories

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2022 © [Muhammed Razi B K](https://github.com/RAZIBK/)
