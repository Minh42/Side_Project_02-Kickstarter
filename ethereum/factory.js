import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// update new address when recompiling
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb6195Bf8Ac1b27F40e2Bad55aCd703FdA3969c32'
);

export default instance;