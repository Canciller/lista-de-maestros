import React from 'react';
import Typography from 'components/Typography';
import View from 'components/View';
import ReviewForm from 'components/ReviewForm';
import './Testing.scss';

class Testing extends React.Component {
    state = {
        theme: 'ThemeBgDark ThemeFgDark',
    };

    render() {
        return (
            <View>
                <Typography component="h1">Testing</Typography>
                <button
                    onClick={() =>
                        this.setState({ theme: 'ThemeBgLight ThemeFgLight' })
                    }
                >
                    LIGHT
                </button>
                <div className={this.state.theme}>{this.state.theme}</div>
            </View>
        );
    }
}

export default Testing;
