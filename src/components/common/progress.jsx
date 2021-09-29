import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    Progress as BsProgress
} from 'reactstrap';


const Progress = (props) => {
    const { children, slim, className, ...otherProps } = props;
    const progressClass = classNames(className, {
        'height: 0.3rem;': slim
    });

    return (
        <BsProgress className={ progressClass } { ...otherProps }>
            { !slim && children }
        </BsProgress>
    );
};

Progress.propTypes = {
    slim: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export { Progress };