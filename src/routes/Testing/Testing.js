import React from 'react';
import Typography from 'components/Typography';
import View from 'components/View';

import Review from 'components/Review';

class Testing extends React.Component {
    render() {
        return (
            <View>
                <Typography component="h1">Testing</Typography>
                <Review />
            </View>
        );
    }
}

export default Testing;
