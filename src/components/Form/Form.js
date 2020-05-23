import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withToast from 'util/withToast';
import fetchAPI from 'util/fetchAPI';

class Form extends Component {
    onSubmit = event => {
        event.preventDefault();

        fetchAPI(this.props.action, {
            method: this.props.method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.props.body),
        })
            .then(data => {
                if (this.props.successMessage)
                    this.props.toast.success(this.props.successMessage);
                this.props.onSuccess(data);
            })
            .catch(error => {
                if (this.props.failureMessage)
                    this.props.toast.error(this.props.failureMessage);
                this.props.toast.error(error.message);

                this.props.onFailure(error);
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
    onSubmit() {},
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
};

export default withToast(Form);
