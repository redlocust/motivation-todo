import React from 'react';
import _ from 'lodash';

class TodosTopics extends React.Component {
  render() {

    var {topics} = this.props;

    console.log(topics.map((elem) => {
      return <option value={elem}>{elem.toUpperCase()}</option>
    }));

    return (
      <div>
        <label>
          <select>
            {topics.map((elem) => {
              return <option value={elem}>{_.upperFirst(elem)}</option>
            })}
          </select>
        </label>
      </div>
    );
  }
}


module.exports = TodosTopics;