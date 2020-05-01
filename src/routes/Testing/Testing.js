import React from 'react';
import Typography from 'components/Typography';
import View from 'components/View';
import ReviewForm from 'components/ReviewForm';

class Testing extends React.Component {
    onSubmit = fields => {
        console.log('EJEMPLO: ', fields);
    };

    render() {
        return (
            <View>
                <Typography component="h1">Testing</Typography>
                <ReviewForm onSubmit={fields => this.onSubmit(fields)} />
            </View>
        );
    }
}

export default Testing;
