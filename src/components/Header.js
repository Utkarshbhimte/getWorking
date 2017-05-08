import React, {
    Component,
    PropTypes,
} from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            newFormOpened: this.props.showNewForm
        }
    }
    render() {
        return (
            <header>
                <h1>GetWorking</h1>
                <h2 className="add-trigger">
                    <FontAwesome name="sign-out"/>
                </h2>
            </header>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
