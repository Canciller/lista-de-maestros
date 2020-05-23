/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { useToasts } from 'react-toast-notifications';
import sentenceCase from 'util/sentenceCase';
import { withToastManager } from 'react-toast-notifications';

const withToast = Component => {
    return withToastManager(
        class extends React.Component {
            add = (message, appearance, options, callback) => {
                options = {
                    ...options,
                    appearance,
                };

                const { toastManager } = this.props;

                if (message instanceof String || typeof message === 'string') {
                    toastManager.add(message, options, callback);
                } else if (message instanceof Array) {
                    message.forEach((message, id) =>
                        toastManager.add(
                            message,
                            {
                                ...options,
                                id: id + 1,
                            },
                            callback
                        )
                    );
                } else if (message instanceof Object) {
                    Object.keys(message).forEach(id => {
                        toastManager.add(
                            message[id],
                            {
                                ...options,
                                id,
                            },
                            callback
                        );
                    });
                }
            };

            info = (message, options, callback) =>
                this.add(message, 'info', options, callback);

            success = (message, options, callback) =>
                this.add(message, 'success', options, callback);

            warn = (message, options, callback) =>
                this.add(message, 'warn', options, callback);

            error = (message, options, callback) =>
                this.add(message, 'error', options, callback);

            render() {
                const { toastManager, ...props } = this.props;

                return (
                    <Component
                        {...props}
                        toast={{
                            removeAll: this.removeAll,
                            add: this.add,
                            info: this.info,
                            success: this.success,
                            warn: this.warn,
                            error: this.error,
                        }}
                    />
                );
            }
        }
    );
};

export default withToast;
