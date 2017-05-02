import React from 'react';

import TodosTopics from 'TodosTopics';
import TodosList from 'TodosList';
import TodosControls from 'TodosControls';

class TodosApp extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        topics: [
          'all topics',
          'spiritual',
          'physical',
          'emotional',
          'fun',
          'mental'
        ]
      }
  }

  render() {

    var {topics} = this.state;

    return (
      <div>
        <h1>Amazing schedule for today</h1>
        <TodosTopics topics={topics}/>
        <TodosList/>
        <TodosControls/>
      </div>
    );
  }
}


module.exports = TodosApp;