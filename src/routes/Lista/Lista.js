import React from 'react';
import Typography from 'components/Typography';
import View from 'components/View';

import MaestrosTable from 'components/MaestrosTable';
import fetchAPI from 'util/fetchAPI';
import Loading from 'components/View/Loading';

class Lista extends React.Component {
    state = {};

    constructor() {
        super();

        this.container = React.createRef();
    }

    resize = () => {
        const node = this.container.current;

        if (node) {
            this.setState({
                width: node.clientWidth,
                height: node.clientHeight,
            });
        }
    };

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.resize();
        });

        this.resize();

        fetchAPI('/maestros')
            .then(maestros => this.setState({ maestros }, () => this.resize()))
            .catch(error => console.log(error));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => {
            this.resize();
        });
    }

    render() {
        if (!this.state.maestros) return <Loading />;

        return (
            <View flex direction="column" fluid>
                <Typography
                    component="h1"
                    style={{
                        marginBottom: 18,
                    }}
                >
                    Lista
                </Typography>
                <div
                    ref={this.container}
                    style={{
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            width: this.state.width,
                            height: this.state.height,
                            overflow: 'auto',
                            position: 'absolute',
                            zIndex: 1,
                        }}
                    >
                        <MaestrosTable maestros={this.state.maestros} />
                    </div>
                </div>
            </View>
        );
    }
}

export default Lista;
