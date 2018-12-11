import React, {Component} from 'react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';


class CampaignShow extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
        return {};
    }

    render() {
        return (
            <Layout>
                <h3>hello</h3>
            </Layout>
        )
    }
}

export default CampaignShow;