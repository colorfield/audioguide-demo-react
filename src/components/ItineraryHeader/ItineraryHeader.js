import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Ionicon from 'react-ionicons';
import s from './ItineraryHeader.css';
import Link from '../Link';
import LanguageSwitcher from '../LanguageSwitcher';

const messages = defineMessages({
  home: {
    id: 'navigation.home',
    defaultMessage: 'Home',
    description: 'Home link in header',
  },
});

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
    const inlineStyle = {
      backgroundImage: `url(${itinerary.backgroundImageUrl})`,
    };

    return (
      <header className={s.header} style={inlineStyle}>
        <div className={s.container}>
          <div className={s.contentHeader}>
            <Link to="/" className={s.backUrl}>
              <Ionicon
                icon="md-arrow-round-back"
                fontSize="22px"
                color="#BE9F8A"
              />{' '}
              <FormattedMessage {...messages.home} />
            </Link>
            {itinerary.iconImageUrl !== null
              ? <img
                  src={itinerary.iconImageUrl}
                  alt={itinerary.attributes.title}
                />
              : <span>Image empty state</span>}
            <LanguageSwitcher />
          </div>
          <h1 className={s.title}>
            {itinerary.attributes.name}
          </h1>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(ItineraryHeader);
