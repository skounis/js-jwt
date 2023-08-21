# Setup
npm install
mkdir -p work
# Generate a private-public key pair
echo "1. Create a self signet certificate"
openssl genrsa -out work/private_key.pem 2048
openssl genrsa -out work/private_key_alt.pem 2048

# Extract the public part
echo "2. Extract the public part"
openssl rsa -in work/private_key.pem -pubout -out work/public_key.pem
openssl rsa -in work/private_key_alt.pem -pubout -out work/public_key_alt.pem
