import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StopTeaser.css';
import Link from '../Link';

class StopTeaser extends React.Component {
  static propTypes = {
    destination: PropTypes.string.isRequired,
    stop: PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        field_id: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  static defaultProps = {
    stop: PropTypes.shape({
      imageUrl: null,
    }).isRequired,
  };

  render() {
    const stop = this.props.stop;
    const inlineStyle = {
      backgroundImage: `url(${stop.imageUrl})`,
    };

    return (
      <Link to={this.props.destination} className={s.listItem}>
        <div className={s.container}>
          <figure style={inlineStyle}>
            {stop.imageUrl !== null
              ? <img src={stop.imageUrl} alt={stop.attributes.title} />
              : <span />}
            <span className={s.itemId}>
              {stop.attributes.field_id}
            </span>
          </figure>
          <div className={s.infos}>
            <h2>
              {stop.attributes.title}
            </h2>
          </div>
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(StopTeaser);
