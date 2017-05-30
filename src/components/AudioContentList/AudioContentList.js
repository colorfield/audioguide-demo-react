import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Page from '../Page';
import Link from '../Link';
import s from './AudioContentList.css';

class AudioContentList extends Page {

  static propTypes = {
      // @todo
  };

  render() {
    const { staticContent, audioList } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{staticContent.title}</h1>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: staticContent.html }}
          />
          <ul>
            {audioList.data.map(
                                audioItem =>
                                    (<li key={audioItem.attributes.uuid}>
                                      <Link className={s.link} to={`/audio/${audioItem.attributes.uuid}`}>
                                        {audioItem.attributes.title}
                                      </Link>
                                    </li>),
                            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AudioContentList);