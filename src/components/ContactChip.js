import React, {
    Component,
    PropTypes,
} from 'react';

const ContactChip  = (props) => {
    return (
        <div className="contact-chip">
            <div className="img-wrap">
                <img src={props.photoId}/>
            </div>
            <span>{props.name}</span>
        </div>
    );
};

ContactChip.propTypes = {};
ContactChip.defaultProps = {};

export default ContactChip;
