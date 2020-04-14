import React from 'react';

import '../stylesheets/App.scss';
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="wrapper">
        {/*Le paso a través de props el array de datos para pintarlo al componente que pinta mi listado de componentes Club.js*/}
        <Header />
      </div>
    );
  }
}

export default App;