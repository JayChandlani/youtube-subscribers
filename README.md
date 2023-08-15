# Youtube Subscribers Server 

![image](https://github.com/JayChandlani/youtube-subscribers/assets/107925230/06aca013-c224-439a-ae34-06aa00f10429)


This repository contains a Node.js server app that utilizes the Express framework. The app handles various endpoints related to subscribers and serves an HTML page.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Introduction

This is a backend capstone project assignment from almabetter. This Node.js server app is built using the [Express](https://expressjs.com/) framework and interacts with a database of subscribers. It provides endpoints to fetch subscribers' data and serves a basic HTML page.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JayChandlani/youtube-subscribers.git
2. **Navigate to the project directory:**

   ```bash
   cd youtube-subscribers
3. **Install the required dependencies:**

   ```bash
   npm install
   
## Usage

1. **Start the server:**

   ```bash
   npm start
 The server will start running on the specified port (default is 3000). You can access it at http://localhost:3000.
2. **Start the server:**

Open your web browser and navigate to http://localhost:3000 to view the default HTML page.
## Endpoints

- ### GET /subscribers : Fetches a list of all subscribers.

- ### GET /subscribers/names : Fetches a list of subscribers' names and subscribed channels.

- ### GET /subscribers/:id : Fetches details of a subscriber by their ID.
