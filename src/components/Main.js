require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <h1>News list</h1>
            <news-list-component></news-list-component>
        </div>
    );
  }
}

AppComponent.defaultProps = {
    
};

export default AppComponent;
