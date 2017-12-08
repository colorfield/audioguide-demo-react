import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ItineraryTeaser.css';
import Link from '../Link';

class ItineraryTeaser extends React.Component {
  static propTypes = {
    destination: PropTypes.string.isRequired,
    itinerary: PropTypes.shape({
      id: PropTypes.string.isRequired,
      iconImageUrl: PropTypes.string.isRequired,
      backgroundImageUrl: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      // relationships: PropTypes.shape({
      //   field_image: PropTypes.shape({
      //     data: PropTypes.shape({
      //       id: PropTypes.string.isRequired,
      //     }).isRequired,
      //   }).isRequired,
      // }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    itinerary: PropTypes.shape({
      iconImageUrl: null,
      backgroundImageUrl: null,
    }).isRequired,
  };

  render() {
    const itinerary = this.props.itinerary;
    const inlineStyle = {
      backgroundImage: `url(${itinerary.backgroundImageUrl})`,
    };
    return (
      <div className={s.wrapperLink} style={inlineStyle}>
        <Link to={this.props.destination}>
          <div className={s.pos}>
            {itinerary.iconImageUrl !== null
              ? <img
                  src={itinerary.iconImageUrl}
                  alt={itinerary.attributes.title}
                />
              : <span>Image empty state</span>}

            <span className={s.name}>
              {itinerary.attributes.name}
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(ItineraryTeaser);
