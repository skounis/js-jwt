const jwt = require('jsonwebtoken');
const fs = require('fs'); // Node.js File System module

// Load private and public keys
const privateKey = fs.readFileSync('./work/private_key.pem', 'utf8');
const publicKey = fs.readFileSync('./work/public_key.pem', 'utf8');
const publicKeyAlt = fs.readFileSync('./work/public_key_alt.pem', 'utf8');

// Example payload
const payload = {
  userId: 123,
  username: 'john.doe'
};

// Encode the JWT
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
console.log('Encoded Token:', token);

// Verify the token and get the decoded payload
jwt.verify(token, publicKey, { algorithms: ['RS256'], complete: true }, (err, decoded) => {
  if (err) {
    console.error('Token verification failed:', err.message);
  } else {
    console.log('Decoded Payload:', decoded);
  }
});

// Verify the token and get the decoded payload
jwt.verify(token, publicKeyAlt, { algorithms: ['RS256'], complete: true }, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err.message);
    } else {
      console.log('Decoded Payload:', decoded);
    }
  });
  
  
