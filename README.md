

# Amazon Clone

This is an Amazon clone web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It features user authentication, a shopping cart, and payment gateway integration for testing purposes.

## Project Overview

The Amazon Clone project is designed to mimic the functionality of the Amazon e-commerce platform. Users can browse products, add items to their cart, and proceed to checkout. The project includes the following key features:

- **User Authentication**: Users can create accounts, sign in, and sign out securely. Authentication is managed using Firebase Authentication.

- **Product Listing**: Users can browse a list of products, view product details, and add items to their cart.

- **Shopping Cart**: Users can add products to their cart, view the cart contents, and adjust quantities or remove items.

- **Payment Gateway Integration**: The project uses the Stripe API for payment processing. You can test payments using the provided dummy card details (4242 4242 4242 4242).

- **Order History**: Users can view their order history, including previous orders and their status.

## Project Initialization

To get started with the project, follow these steps:

1. **Clone the Repository**: Begin by cloning this repository to your local machine.

   ```bash
   git clone https://github.com/2001sahil/Mern_Chat_App.git
   cd amazon-clone
   ```

2. **Install Dependencies**: You will need Node.js and npm (Node Package Manager) installed on your machine. Install the required server and client dependencies.

   ```bash
   # Install server dependencies
   cd Backend
   npm install

   # Install client dependencies
   cd amazon-clone
   npm install
   ```

3. **Configure Environment Variables**:

   - Create a `.env` file in the `server` directory with the following variables:

     ```env
     MONGODB_URI=your_mongodb_uri
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

   - Replace `your_mongodb_uri` and `your_stripe_secret_key` with your MongoDB URI and Stripe secret key.

4. **Start the Server and Client**:

   - In the `server` directory, start the Node.js server:

     ```bash
     npm start
     ```

   - In the `client` directory, start the React client:

     ```bash
     npm start
     ```

5. **Open the Application**:

   The application should now be running locally. Open your web browser and navigate to `http://localhost:3000` to access the Amazon Clone.

## Dummy Payment Details

To test the payment gateway integration, use the following dummy card details:

- **Card Number**: 4242 4242 4242 4242 4242 42424 

Please note that this is a sandbox environment, and no real transactions will occur.

