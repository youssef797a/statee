import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "Jennifer Wegerer",
      bio: "Software, like a novel or film, can leave some people remarkably pleased and others utterly disappointed—if not at the application itself, then at the software engineer behind it.",
      imgSrc: "https://www.allengineeringschools.com/wp-content/uploads/2019/07/famous-software-engineer.jpg_344069656.jpg",
      profession: "Software Engineer"
    },
    show: false,
    timeSinceMount: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
