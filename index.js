
const { Web3, utils } = require('web3'); // Import Web3


const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.SECRET_KEY}`);


async function main(){
   console.log(utils.randomBytes())
}

main()