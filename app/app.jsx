import React from 'react';
import ReactDOM from 'react-dom';
import TodosApp from 'TodosApp';

import 'style-loader!css-loader!foundation-sites/dist/css/foundation.css'

$(document).ready(function(){
  $(document).foundation();
});
import 'style-loader!css-loader!sass-loader!app.scss'

ReactDOM.render(<TodosApp/>, document.getElementById('app'));