import React from 'react';
import Typography from 'components/Typography';
import View from 'components/View';
import './Testing.scss';

import TableTest from 'components/TableTest';

class Testing extends React.Component {
    render() {
        return (
            <View>
                <Typography component="h1">Testing</Typography>
                <br />
                <TableTest />
            </View>
        );
    }
}

export default Testing;
