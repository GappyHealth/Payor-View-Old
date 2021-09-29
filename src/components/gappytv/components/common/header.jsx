import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <React.Fragment>
        { /* START H1 Header */}
        <div className={` d-flex ${ props.className }` }>
            <h3 className="display-4 mr-3 mb-0 align-self-start">
                { props.title }
            </h3>
        </div>
        { /* END H1 Header */}
    </React.Fragment>
)
Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.node,
    className: PropTypes.string
};
Header.defaultProps = {
    title: "Waiting for Data...",
    subTitle: "Waiting for Data...",
    className: "my-4"
};

export { Header };