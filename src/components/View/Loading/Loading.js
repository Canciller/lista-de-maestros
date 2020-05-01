import React from 'react';
import View from 'components/View';
import Spinner from 'components/Spinner';

const Loading = props => {
    return (
        <View flex>
            <Spinner
                style={{
                    margin: 'auto',
                }}
            />
        </View>
    );
};

export default Loading;
