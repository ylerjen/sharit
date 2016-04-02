'use strict';

import React from 'react';

require('styles/news/NewsList.sass');

class NewsListComponent extends React.Component {
    render() {
        var content = this.props.tweets.map( function (tweet) {
            return (
                <NewsItemComponent key={news.twid} tweet={tweet} />
            )
        });
        return (
            <div>
                <button onClick={this.props.onShowNewTweets}>Click here to see them.</button>
                <ul className="newslist-component">
                    Please edit src/components/news//NewsListComponent.js to update this component!
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
