import React from 'react';
import Task from './task';

const SingleTask = React.createClass({
  render () {

    const { taskId } = this.props.params;
    const i = this.props.tasks.findIndex((task) => task.id === taskId);

    const task = this.props.tasks[i];

    return (
      <div className="single-task">
        <Task i={i} task={task} {...this.props} />
      </div>
    )
  }
})

export default SingleTask;
