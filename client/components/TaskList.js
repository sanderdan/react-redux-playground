import React from 'react';
import Task from './Task';
import CreateTask from './CreateTask';

const TaskList = React.createClass({

  render() {
    return (
      <div>
      	<CreateTask />
        {this.props.tasks.map((task, i) => <Task {...this.props} key={i} i={i} task={task}/>)}
      </div>
    )
  }
});

export default TaskList;
