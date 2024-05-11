# URL Shortener App

## Introduction

This project is a URL Shortener application that allows users to enter a long URL, which is then shortened to a much shorter URL that can be easily shared. The shortened URL is redirected to the original long URL.

## Table of Contents

- [**Features**](#features)
- [**Technologies**](#technologies)
- [**Application Setup**](#application-setup)
- [**Code Style**](#code-style)
- [**Usage**](#usage)

## Features

1. URL shortening: Users can enter a long URL and get a shortened URL that can be easily shared.
2. Redirects: The shortened URL redirects to the original long URL.

## Technologies

The project utilizes the following technologies:

- Backend:

  - NodeJS: A JavaScript runtime for building server-side applications.
  - ExpressJS: A lightweight framework for building web applications.
  - MongoDB: A document-oriented NoSQL database.

- Frontend:
  - Bootstrap: Open source framework for creating responsive website.

## Application Setup

To setup the application locally, follow these steps:

1. Star and Fork this repo to create your own copy to work from.
2. Clone the repository you forked to your local machine using:

   ```bash
      git clone <your_forked_repo_url>
   ```

3. Navigate to the Server directory using command "cd server" and create a .env file and copy contents of .env.example file to .env file and add all secret keys to setup MongoDB database.
4. Install dependencies in server directory of project:

   ```bash
      npm install
   ```

5. Start the server using command:

   ```bash
      npm start
   ```

6. Now navigate to client directory of project using commands:

   ```bash
      cd ../client
   ```

7. Install dependencies in client directory of project:

   ```bash
      npm install
   ```

8. Start the application using command:

   ```bash
      npm start
   ```

9. Open http://localhost:3000 in your browser to see the application.

## Code Style

- Please make sure to follow the existing code style and formatting conventions when making contributions to the project.

## Usage

To use the app, follow these steps:

1. Enter a long URL in the input field and click the "Shorten" button.
2. Copy the shortened URL and share it with others.
