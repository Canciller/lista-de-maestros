import APIError from './APIError';
import httpStatus from 'http-status';

class NotFoundError extends APIError {
    constructor() {
        super(httpStatus['404_MESSAGE'], httpStatus.NOT_FOUND, true);
    }
}

export default NotFoundError;
