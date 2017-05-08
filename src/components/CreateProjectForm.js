import React, {
    Component,
    PropTypes,
} from 'react';
import FontAwesome from 'react-fontawesome'

class CreateProjectForm extends Component {
    constructor(){
        super();
        this.state = {
            opened: false
        }

        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard(){
        const opened = !this.state.opened;

        this.setState({opened});
    }

    render() {
        return (
            <div className="card project-form">
                <h4 onClick={() => this.toggleCard()}>
                    Create a New Project
                    { !this.state.opened &&
                        <FontAwesome name='chevron-down'/>
                    }
                    { this.state.opened &&
                        <FontAwesome name='chevron-up'/>
                    }
                </h4>
                { this.state.opened &&
                    <div className="input-wrap">
                        <input type="text" placeholder="Project Title"/>
                        <input type="text" placeholder="Project Summary"/>
                        <textarea cols="30" rows="3" placeholder="Project Description"></textarea>
                        <input type="text" placeholder="Skills Required"/>
                        <input type="submit"/>
                    </div>
                }
            </div>
        );
    }
}

CreateProjectForm.propTypes = {};
CreateProjectForm.defaultProps = {};

export default CreateProjectForm;
