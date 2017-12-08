import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Ionicon from 'react-ionicons';
import s from './ItineraryHeader.css';
import Link from '../Link';
import LanguageSwitcher from '../LanguageSwitcher';

class ItineraryHeader extends React.Component {
  static propTypes = {
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

    return (
      <header>
        <div>
          <Link to="/">
            <Ionicon
              icon="ios-information-circle"
              fontSize="22px"
              color="#BE9F8A"
            />{' '}
            Home
          </Link>
          {itinerary.iconImageUrl !== null
            ? <img
                src={itinerary.iconImageUrl}
                alt={itinerary.attributes.title}
              />
            : <span>Image empty state</span>}

          {itinerary.backgroundImageUrl !== null
            ? <img
                src={itinerary.backgroundImageUrl}
                alt={itinerary.attributes.title}
              />
            : <span>Image empty state</span>}
          {itinerary.attributes.name}
          <LanguageSwitcher />
          <h1>
            {itinerary.attributes.name}
          </h1>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(ItineraryHeader);
