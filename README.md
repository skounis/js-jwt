# JSON Web Token (JWT) Examples

This repository contains two JavaScript examples demonstrating the usage of JSON Web Tokens (JWT) using the `jsonwebtoken` library. The examples cover encoding, signing, verifying, and decoding JWTs. JWTs are a popular way to securely transmit information between parties as a JSON object.

## Purpose

The purpose of this repository is to provide simple and practical examples of how to work with JWTs using the `jsonwebtoken` library in JavaScript. The examples showcase how to create and verify JWTs, both using a secret key and using a public-private key pair.

## Instructions

### Prerequisites

Before running the examples, make sure you have Node.js installed on your system.

### Using Makefile (Quick)

1. Open the terminal and navigate to the repository's directory.
2. **JWT with Secret Key**: To run the first example use the following command:

   ```sh
   make demo1
   ```

3. **JWT with Public-Private Key Pair**: To run the second example, use the following command:

   ```sh
   make demo2
   ```

### Demo 1: JWT with Secret Key

1. Open the terminal and navigate to the repository's directory.
2. Run the following command to install the required dependencies:

   ```sh
   npm install
   ```

3. Edit the `demo1.js` file to set your desired payload and secret key.
4. Run the `demo1.js` file using the following command:

   ```sh
   node demo1.js
   ```

   This will encode and sign the JWT using the secret key and then verify and decode it.

### Demo 2: JWT with Public-Private Key Pair

1. Open the terminal and navigate to the repository's directory.
2. Run the `setup.sh` script to generate the private and public key files:

   ```sh
   chmod +x setup.sh
   ./setup.sh
   ```

   This will generate `private_key.pem` and `public_key.pem` files in the `./work` subfolder.

3. Edit the `demo2.js` file to set your desired payload.
4. Run the `demo2.js` file using the following command:

   ```sh
   node demo2.js
   ```

   This will encode and sign the JWT using the private key and then verify and decode it using the public key.

## References

1. [jsonwebtoken library](https://www.npmjs.com/package/jsonwebtoken)
2. [JWT Official Website](https://jwt.io/)
3. [Understanding JSON Web Tokens](https://jwt.io/introduction/)
