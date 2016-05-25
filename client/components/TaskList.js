import React from 'react';
import Task from './Task';

const TaskList = React.createClass({

  render() {
    return (
      <div>
        {this.props.tasks.map((task, i) => <Task {...this.props} key={i} i={i} task={task}/>)}
      </div>
    )
  }
});

export default TaskList;
