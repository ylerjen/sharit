'use strict';

import React from 'react';
import NewsItemComponent from './NewsItemComponent';

require('styles/news/NewsList.sass');

class NewsListComponent extends React.Component {
    render() {
        var news = [{
            id: '1',
            url: '-url 1',
            title: '-title 1',
            author: '-author 1',
            tag: '-tag 1',
            active: true
        },{
            id: '2',
            url: '-url 2',
            title: '-title 2',
            author: '-author 2',
            tag: '-tag 2',
            active: true
        }];
        var newsItem = news.map( (oneNews) => {
            return <NewsItemComponent news={oneNews}>item</NewsItemComponent>;
        });
        return (
            <div>
                <button onClick={this.props.onShowNews}>Click here to see them.</button>
                <ul className="newslist-component">
                    {newsItem}
                </ul>
            </div>
        );
    }
}

NewsListComponent.displayName = 'NewsNewsListComponent';

// Uncomment properties you need
// NewsListComponent.propTypes = {};
// NewsListComponent.defaultProps = {};

export default NewsListComponent;
