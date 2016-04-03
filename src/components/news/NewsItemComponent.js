'use strict';

import React from 'react';

require('styles/news/NewsItem.sass');

class NewsItemComponent extends React.Component {
  render() {
    var news = this.props.news;
    return (
        <li className="news-item">
            <a className="title" href="/#/news/{news.id}">{news.title}</a>
            <div>by <a className="author" href="/#/author/{news.author}">{news.author}</a></div>
            <div className="tags">
                <a href="#/news?filter-type=tag&filter={news.tag}" className="tag">{news.tag}</a>
            </div>
        </li>
    );
  }
}

NewsItemComponent.displayName = 'NewsNewsItemComponent';

// Uncomment properties you need
// NewsItemComponent.propTypes = {};
// NewsItemComponent.defaultProps = {};

export default NewsItemComponent;