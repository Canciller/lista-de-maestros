import React from 'react';
import View from 'components/View';
import HomeSearch from 'components/HomeSearch';
import './Home.scss';

class Home extends React.Component {
    render() {
        return <View>{<HomeSearch />}</View>;
    }
}

export default Home;
