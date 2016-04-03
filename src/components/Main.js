require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import NewsListComponent from './news/NewsListComponent';

class AppComponent extends React.Component {
    render() {
        var newsListComponent = <NewsListComponent>hello</NewsListComponent>;
        return (
            <div>
            <h1>News list</h1>
            {newsListComponent}
            </div>
        );
    }
}

AppComponent.defaultProps = {
    
};

export default AppComponent;
