import React from 'react';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';

import Review from 'components/Review';
import MainSearch from 'components/MainSearch';

class Home extends React.Component {
    render() {
        return (
            <div
                style={{
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <MainSearch />
            </div>
        );
    }
}

export default Home;
