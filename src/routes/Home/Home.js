import React from 'react';
import View from 'components/View';
import { withTheme } from 'components/Theme';
import HomeSearch from 'components/HomeSearch';

import './Home.scss';
import Logo from 'components/Logo';

class Home extends React.Component {
    render() {
        const {
            props: { theme },
        } = this;

        return (
            <View flex>
                <div
                    style={{
                        paddingBottom: theme.layout.header.height,
                        margin: 'auto',
                        width: '100%',
                        maxWidth: '500px',
                        textAlign: 'center',
                    }}
                >
                    <Logo
                        style={{
                            color: theme.foreground.normal,
                            fontSize: '5em',
                            marginBottom: 20,
                            display: 'block',
                        }}
                    />
                    <HomeSearch />
                </div>
            </View>
        );
    }
}

export default withTheme(Home);
