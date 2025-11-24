# SBA 6 TypeScript and Advanced JavaScript

## Overview

In this assessment, I created an E-commerce Product Management System using TypeScript.  The objective of this assessment was to develop an application using TypeScript and Advanced JavaScript. Multiple skills were needed for this project, including TypeScript features, object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction. 

## Features

Part 1: Project Setup
1. Set Up Your Project:

- Create a new directory for the project and initialize it with npm:

    mkdir e-commerce-system
    cd e-commerce-system
    npm init -y

- Install TypeScript and other necessary dependencies:

    npm install typescript @types/node --save-dev

- Create a tsconfig.json file to configure TypeScript:

    npx tsc --init

2. Organize Your Folder Structure:

- Your project should have the following structure:

e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json

Part 2: API Research

1. API Research:

    - Research and analyze the Dummy JSON Products API .
    - You will be implementing features that interact with this API.

2. Project Planning:

    - Based on your API research, plan the structure of your project. You will need to create API requests, handle errors, and display product information.
    - Before you begin coding, create a project plan and outline the steps you’ll take to implement the API interactions and display product data.
    - Ensure you have thoroughly read through the requirements for the project below before you begin planning it.

Part 3: Implementation

1. Develop Product Class:

- Product Base Class (Product.ts):
    - Define a Product class that includes the appropriate properties based on data provided in the API response.
    - Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.

2. Implement Utilities:

- Discount Calculator Module (discountCalculator.ts):

    - Create a calculateDiscount() function to handle discount calculations for products.
    - This function should return the dollar amount that a product is discounted by. For example, if a product costs $100 and has a 10% discount, the function should return $10.

- Tax Calculator Module (taxCalculator.ts):

    - Create a calculateTax() function to handle tax calculations for products.
    - This function should return the dollar amount that a product is taxed at. For example, if a product costs 
    $100 and is taxed at 10%, the function should return $10.
    - Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field. Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.

3. Handle Asynchronous Operations:

- API Service (apiService.ts):

    - Create API requests using async/await and Promises.
    - Implement functions to fetch product data and handle errors using try/catch.

4. Error Handling Utility:

- Error Handler Module (errorHandler.ts):
    - Implement a custom error class and functions to handle different types of errors gracefully.

5. Create the Main Application:

- Main Entry File (index.ts):

    - Import the product classes, tax calculator, and API service.
    - Create instances of Product by fetching product data from the API.
    - Use asynchronous functions to fetch product data and display it.
    - Demonstrate error handling and OOP principles in action.

Part 4: Testing and Finalizing

1. Compile Your Code:

- Use TypeScript to compile your code:

    npx tsc

2. Run Your Application:

- Use Node.js to run your compiled JavaScript code:

    node dist/index.js

3. Test and Debug:

    - Test all functionalities to ensure they work as expected.
    - Check for any TypeScript errors or runtime issues and resolve them.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript

## Reflection Questions

In this assessment, I used TypeScript and Object-Oriented-Programming to fetch data from an API and display that data.  I created modules to set up the product class, calculate the discount, calculate tax, fetch the API, handle errors, and execute the main code.  Using TypeScript added type safety to the application to prevent errors at run time.  By creating a product class, I was able to use object-oriented-programming to easily display the data and call methods in the class.  Setting up the project was difficult.  One of the problems I encountered was that the API sent the data as an array within an object.  I had to return the object and then extract the array from the object products property.  It was also a big challenge to use the method in the class.  I first needed to create an instance of the product before I could call the method.  Creating the instance was also challenging because TypeScript required and excalamtion point each time I referred to the array, otherwise I would get an error saying the element could be undefined.  I was finally able to log the display details after overcoming all these obstacles.  I handled the asynchronous operations by using a promise with async/await functions and using .then and .catch syntax in the main file.  I handled the errors by creating an error class extension to handle the network error which was then used in the API service file.  I also created a custom error message for a TypeError because a failure to return the API would also cause a type error when the product class returned as undefined.