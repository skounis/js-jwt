const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();
const secretKeyAlt = generateSecretKey();
console.log('Secret Key:', secretKey);
console.log('Secret Key alt:', secretKeyAlt);

const jwt = require('jsonwebtoken');

// Example payload
const payload = {
  userId: 123,
  username: 'john.doe'
};

// Encode the JWT
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log('Encoded Token:', token);

console.log('\nVerify with the correct key ', secretKey);
// Verify the token and get the decoded payload
jwt.verify(token, secretKey, { complete: true }, (err, decoded) => {
  if (err) {
    console.error('Token verification failed:', err.message);
  } else {
    console.log('Decoded Payload:', decoded);
  }
});

console.log('\nVerify with the wrong key ', secretKeyAlt);
// Verify the token and get the decoded payload
jwt.verify(token, secretKeyAlt, { complete: true }, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err.message);
    } else {
      console.log('Decoded Payload:', decoded);
    }
  });