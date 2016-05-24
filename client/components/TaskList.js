import React from 'react';
import Task from './Task';

const TaskList = React.createClass({
  render() {
    return (
      <div>
        {this.props.tasks.map((task, i) => <Task />)}
      </div>
    )
  }
});

export default TaskList;
