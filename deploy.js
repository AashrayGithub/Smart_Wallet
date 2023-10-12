require('dotenv').config(); // environment variables

const ethers = require('ethers');


const contractAddress = 'CONTRACT_ADDRESS';
const contractABI = [
    
];
const infuraUrl = 'INFURA_PROJECT_URL';
const privateKey = process.env.PRIVATE_KEY;
const provider = new ethers.JsonRpcProvider(infuraUrl);
// Initialize a wallet
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Propose a new owner
async function proposeNewOwnerExample(newOwner) {
    try {
        const tx = await contract.proposeNewOwner(newOwner);
        await tx.wait();
        console.log(`Proposed new owner: ${newOwner}`);
    } catch (error) {
        console.error('Error proposing a new owner:', error);
    }
}

// Set allowance
async function setAllowanceExample(from, amount) {
    try {
        const tx = await contract.setAllowance(from, amount);
        await tx.wait();
        console.log(`Allowed ${from} to send ${amount} ETH.`);
    } catch (error) {
        console.error('Error setting allowance:', error);
    }
}

// Deny sending
async function denySendingExample(from) {
    try {
        const tx = await contract.denySending(from);
        await tx.wait();
        console.log(`Denied sending for ${from}.`);
    } catch (error) {
        console.error('Error denying sending:', error);
    }
}

// Transfer funds
async function transferFundsExample(to, amount, payload) {
    try {
        const tx = await contract.transfer(to, amount, payload);
        await tx.wait();
        console.log(`Transferred ${amount} ETH to ${to}.`);
    } catch (error) {
        console.error('Error transferring funds:', error);
    }
}

// Examples/tests
// proposeNewOwnerExample('NEW_OWNER_ADDRESS');
// setAllowanceExample('ALLOWED_ADDRESS', 1); // Set allowance of 1 ETH
// denySendingExample('DENIED_ADDRESS');
// transferFundsExample('RECIPIENT_ADDRESS', 1, '0x'); // Transfer 1 ETH

