import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// update new address when recompiling
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xEe0Db672ca569e724A79693Dd969FefD9757c2b2'
);

export default instance;