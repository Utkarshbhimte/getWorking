import React from 'react';
import sampleData from '../sample-fishes';
import ProjectCard from './ProjectCard';
import Header from './Header';
import CreateProjectForm from './CreateProjectForm'

class App extends React.Component {
  constructor() {
    super();

      this.fetchProjects = this.fetchProjects.bind(this);
      this.toggleNewForm = this.toggleNewForm.bind(this);

      this.state = {
        userData: {},
        showNewForm: true,
        projects: []
      };
  }

  componentWillMount() {
    const userDataLocalStorage = localStorage.getItem('user');
    let userData = {};

    if(userDataLocalStorage){
      userData = JSON.parse(userDataLocalStorage);
      console.log('user data fecthed from local storage');
    }else{
      userData = sampleData.users['12343495834'];
    }

    this.fetchProjects();

    this.setState({userData});
  };

  toggleNewForm = () => {
    const showNewForm = !this.state.showNewForm;
    this.setState({showNewForm});
  };

  fetchProjects = () => {
    const projects = sampleData.projects;

      this.setState({projects});
  };

  render() {
    return (
      <div className="contain-all">
        <Header showNewForm={this.state.showNewForm} />
        <div className="card-container">
          <div className="create-btn-wrap">
            { !this.state.showNewForm &&
              <a onClick={() => this.toggleNewForm()}>
                 Dashboard
              </a>
            }

            { this.state.showNewForm &&
              <a className="back" onClick={() => this.toggleNewForm()}>
                Go back
              </a>
            }
          </div>
          { !this.state.showNewForm &&
            this.state.projects.map( (project, index) =>  <ProjectCard key={index} project={project} /> )
          }

          { this.state.showNewForm && <CreateProjectForm /> }
        </div>
      </div>
    )
  }
}


export default App;
