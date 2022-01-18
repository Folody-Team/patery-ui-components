# @patery-ui/components
### A component library for React
<br/>
Currently this package has only 1 component.

## Example
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PateryButton } from '../components/Button';
 
class App extends Component {
    render()
    {
        return (<PateryButton>Hello world</PateryButton>);
    }
}
 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```