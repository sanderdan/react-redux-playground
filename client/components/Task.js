import React from 'react';
import { Link } from 'react-router';

const Task = React.createClass({

  renderLink(task){

    const taskStyle = {
      color: task.isActive ? '#388e3c' : '#b71c1c'
    };

    return (
      <Link to={`/task/${task.id}`} >
        <h3 style={taskStyle}>{task.title}</h3>
      </Link>
    );
  },

  render() {
    const {task, i }= this.props;
    console.log();
    return (
      <div className="col s1">
        {this.renderLink(task)}
        <img src={task.picture} alt={task.title}/>
        <br/>
        {task.isActive.toString()}
        <hr/>
      </div>
    )
  }
});

export default Task;
