import React, {
    Component,
    PropTypes,
} from 'react';
import FontAwesome from 'react-fontawesome';
import ContactChip from './ContactChip';
import SampleData from '../sample-fishes'

class ProjectCard extends Component {

    constructor(){
        super();

        this.getTeamInfo = this.getTeamInfo.bind(this);
        this.toggleCardState = this.toggleCardState.bind(this);

        this.state = {
            team: [],
            opened: false
        };
    }

    componentDidMount() {
        this.getTeamInfo();
    }

    toggleCardState(){
        const opened = !this.state.opened;
        this.setState({opened});
    }

    getTeamInfo = () => {
        let team = Object.keys(this.props.project.participants).map(
            (memberID) => SampleData.users[memberID]
        );

        this.setState({team: team});

        console.log({team, stateTeam: this.state.team});
    };

    render(){
        return (
            <div className="card">
                <h4 onClick={() => this.toggleCardState()}>
                    { this.props.project.name }

                    { !this.props.project.name &&
                            <span className="gray">Name Undecided</span>
                    }
                    { !this.state.opened &&
                        <FontAwesome name="chevron-down"/>
                    }
                    { this.state.opened &&
                        <FontAwesome name="chevron-up"/>
                    }
                </h4>
                <p>
                    { !this.state.opened &&
                        this.props.project.summary}
                    { this.state.opened &&
                        this.props.project.desc}
                </p>
                <div className="req-wrap">
                    <strong>Current Requirements:</strong>
                    <div className="tags-wrap">
                        { this.props.project.skillsReq.map(
                            (skill, index) => <a key={index}>{skill}</a>
                        )}
                    </div>
                    <div className="overlay">
                        <a>You need to login to interact</a>
                    </div>
                </div>
                <strong>Initiator:</strong>
                <ContactChip photoId={this.props.project.initiator.photoId}
                                name={this.props.project.initiator.name}/>

                { this.state.opened &&
                <div>
                    <strong>Team:</strong>
                    {
                        this.state.team.map( (person, index) =>
                            <ContactChip key={index} photoId={person.image}
                                name={person.name}/>)
                    }
                </div>
                }

                {/*<div className="contact-chip">*/}
                    {/*<img src={this.props.project.initiator.photoId} alt={this.props.project.initiator.name}/>*/}
                    {/*<span>{this.props.project.initiator.name}</span>*/}
                {/*</div>*/}
            </div>
        );
    }
}

ProjectCard.propTypes = {};
ProjectCard.defaultProps = {};

export default ProjectCard;
