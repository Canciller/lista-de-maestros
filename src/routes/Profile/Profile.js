/* eslint-disable no-constant-condition */
import React from 'react';
import PropTypes from 'prop-types';
import Fetch from 'components/View/Fetch';
import { withUser } from 'components/User';
import { withTheme } from 'components/Theme';

import Review from 'components/Review';
import Fab from 'components/Fab';
import Typography from 'components/Typography';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import './Profile.scss';

class Profile extends React.Component {
    state = {
        found: false,
        user: {},
    };

    render() {
        const { found, user } = this.state;

        const { theme } = this.props;

        const { username } = this.props.match.params;

        return (
            <Fetch
                found={found}
                endpoint={`/users/${username}`}
                then={user => this.setState({ user, found: true })}
                className="Profile-root"
            >
                <Fab
                    icon={faPen}
                    variant="green"
                    size="4em"
                    className="Profile-write-review-button"
                />
                <div className="Profile-user-container">
                    <div
                        className="Profile-avatar"
                        style={{
                            background: theme.background.normal,
                        }}
                    ></div>
                    <div className="Profile-user">
                        <Typography component="h2">{user.username}</Typography>
                        <Typography className="Profile-user-role">
                            {user.role}
                        </Typography>
                    </div>
                </div>
                <div className="Profile-tabs-container">
                    <span>
                        <Typography color="green" component="b">
                            Reseñas
                        </Typography>
                    </span>
                    <span>
                        <Typography color="green" component="b">
                            Acerca de
                        </Typography>
                    </span>
                </div>
                <div className="Profile-about-container">
                    <Typography>Acerca de</Typography>
                </div>
                <div className="Profile-reviews-container">
                    <div
                        className="Profile-reviews-options"
                        style={{
                            background: theme.background.normal,
                        }}
                    >
                        <Typography>Options</Typography>
                    </div>
                    <div>
                        <Review
                            data={{
                                user,
                                materia: 'Test',
                                maestro: {
                                    name: 'Test',
                                },
                                recommended: true,
                                text:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui ac ipsum sollicitudin posuere id quis dolor. Aenean vel est eu ipsum vehicula vehicula et eu leo. Mauris leo lorem, efficitur quis neque ac, faucibus maximus dolor. Fusce pretium ut nisl porttitor luctus. Donec lacus eros, suscipit non arcu sit amet, gravida mollis dui. Etiam eu ante eget sapien volutpat hendrerit. Ut tincidunt libero ut velit rhoncus, at cursus libero vehicula.',
                                date: 'Date',
                                hour: 'Hour',
                            }}
                        />
                        <Review
                            data={{
                                user,
                                materia: 'Test',
                                maestro: {
                                    name: 'Test',
                                },
                                recommended: false,
                                text:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui ac ipsum sollicitudin posuere id quis dolor. Aenean vel est eu ipsum vehicula vehicula et eu leo. Mauris leo lorem, efficitur quis neque ac, faucibus maximus dolor. Fusce pretium ut nisl porttitor luctus. Donec lacus eros, suscipit non arcu sit amet, gravida mollis dui. Etiam eu ante eget sapien volutpat hendrerit. Ut tincidunt libero ut velit rhoncus, at cursus libero vehicula.',
                                date: 'Date',
                                hour: 'Hour',
                            }}
                        />
                        <Review
                            data={{
                                user,
                                materia: 'Test',
                                maestro: {
                                    name: 'Test',
                                },
                                recommended: true,
                                text:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui ac ipsum sollicitudin posuere id quis dolor. Aenean vel est eu ipsum vehicula vehicula et eu leo. Mauris leo lorem, efficitur quis neque ac, faucibus maximus dolor. Fusce pretium ut nisl porttitor luctus. Donec lacus eros, suscipit non arcu sit amet, gravida mollis dui. Etiam eu ante eget sapien volutpat hendrerit. Ut tincidunt libero ut velit rhoncus, at cursus libero vehicula.',
                                date: 'Date',
                                hour: 'Hour',
                            }}
                        />
                        <Review
                            data={{
                                user,
                                materia: 'Test',
                                maestro: {
                                    name: 'Test',
                                },
                                recommended: true,
                                text:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui ac ipsum sollicitudin posuere id quis dolor. Aenean vel est eu ipsum vehicula vehicula et eu leo. Mauris leo lorem, efficitur quis neque ac, faucibus maximus dolor. Fusce pretium ut nisl porttitor luctus. Donec lacus eros, suscipit non arcu sit amet, gravida mollis dui. Etiam eu ante eget sapien volutpat hendrerit. Ut tincidunt libero ut velit rhoncus, at cursus libero vehicula.',
                                date: 'Date',
                                hour: 'Hour',
                            }}
                        />
                    </div>
                </div>
            </Fetch>
        );
    }
}

Profile.propTypes = {
    theme: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    match: PropTypes.any,
};

export default withTheme(withUser(Profile));
