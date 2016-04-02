'use strict';

import React from 'react';

require('styles/news/NewsItem.sass');

class NewsItemComponent extends React.Component {
  render() {
    var author = this.props.author;
    return (
        <li className={"news" + (news.active ? ' active' : '')}>        
            <a href={"/author/" + news.author}>{news.author}</a> 
            <span className="screen-name">@{news.author}</span> 
            <span className="content">{news.url}</span>
        </li>
    );
  }
}

NewsComponent.displayName = 'NewsNewsItemComponent';

// Uncomment properties you need
// NewsComponent.propTypes = {};
// NewsComponent.defaultProps = {};

export default NewsItemComponent;