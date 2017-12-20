import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Ionicon from 'react-ionicons';
import s from './SearchBar.css';

const messages = defineMessages({
  search: {
    id: 'search.placeholder',
    defaultMessage: 'Search...',
    description: 'Search placeholder',
  },
});

class SearchBar extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    filterText: PropTypes.string.isRequired,
    // @todo check correct propType
    onFilterTextChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <form className={s.form}>
        <label className={s.wrapperIcon} htmlFor="searchfield">
          <Ionicon icon="ios-search" color="#2567D9" fontSize="24px" />
        </label>
        <input
          id="searchfield"
          name="searchfield"
          className={s.search}
          type="text"
          placeholder={formatMessage(messages.search)}
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

export default injectIntl(withStyles(s)(SearchBar));
