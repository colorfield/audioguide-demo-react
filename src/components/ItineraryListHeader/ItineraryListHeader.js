import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ItineraryListHeader.css';
import Link from '../Link';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './belvue_logo.svg';

class ItineraryListHeader extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link to="/about">About</Link>
          <img src={logoUrl} alt="BELvue museum" />
          <LanguageSwitcher />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ItineraryListHeader);
