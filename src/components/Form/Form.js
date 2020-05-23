import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withToast from 'util/withToast';
import fetchAPI from 'util/fetchAPI';

class Form extends Component {
    onSubmit = event => {
        event.preventDefault();

        const { id, successMessage, failureMessage } = this.props;

        this.props.onSubmit(() => {
            fetchAPI(this.props.action, {
                method: this.props.method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.props.body),
            })
                .then(data => {
                    if (successMessage)
                        this.props.toast.success(successMessage, {
                            id: id && `${id}SuccessMessage`,
                        });
                    this.props.onSuccess(data);
                })
                .catch(error => {
                    this.props.toast.error(error.message);

                    if (failureMessage)
                        this.props.toast.error(failureMessage, {
                            id: id && `${id}FailureMessage`,
                        });

                    this.props.onFailure(error);
                });
        });
    };

    render() {
        const {
            action,
            method,
            onSubmit,
            onFailure,
            onSuccess,
            failureMessage,
            successMessage,
            children,
            toast,
            body,
            ...props
        } = this.props;

        return (
            <form onSubmit={this.onSubmit} {...props}>
                {children}
            </form>
        );
    }
}

Form.defaultProps = {
    method: 'POST',
    body: {},
    onSubmit(callback) {
        callback();
    },
    onSuccess() {},
    onFailure() {},
};

Form.propTypes = {
    toast: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired,
    method: PropTypes.string,
    body: PropTypes.object,
    onSubmit: PropTypes.func,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    successMessage: PropTypes.any,
    failureMessage: PropTypes.any,
    children: PropTypes.any,
    id: PropTypes.string,
};

export default withToast(Form);
