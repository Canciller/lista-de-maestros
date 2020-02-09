import React from 'react';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
    render() {
        return (
            <div
                style={{
                    minHeight: '100%'
                }}
            >
                <TextField
                    placeholder="Buscar maestro"
                    icon={faSearch}
                />
            </div>
        );
    }
}

export default Home;
