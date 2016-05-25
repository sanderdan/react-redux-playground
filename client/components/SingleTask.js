import React from 'react';
import Task from './task';

const SingleTask = React.createClass({

  isTaskCompleted(task){
    return task.isActive ? 'Yes it is!' : 'No it is not!';
  },

  render () {

    const { taskId } = this.props.params;
    const i = this.props.tasks.findIndex((task) => task.id === taskId);

    const task = this.props.tasks[i];

    return (
      <div className="container">
        <h1>{task.title}</h1>
        <img src={task.picture} />
        <p>Is the task done? {this.isTaskCompleted(task)}</p>
      </div>
    )
  }
});

export default SingleTask;
