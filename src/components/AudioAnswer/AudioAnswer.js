import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ReactAudioPlayer from 'react-audio-player';
import s from './AudioAnswer.css';

class AudioAnswer extends React.Component {
  static propTypes = {
    answer: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }

  handleClick() {
    this.state = {
      selected: true,
    };
  }

  // @todo set current answer via Redux
  render() {
    const { answer } = this.props;
    return (
      <div>
        <a
          href="#"
          onClick={e => this.handleClick(e)}
          className={s.answerTitle}
        >
          <h3>
            {answer.title}
          </h3>
        </a>
        <Collapsible open={this.state.selected}>
          <div className={s.collapsedContent}>
            <ReactAudioPlayer src={answer.mp3URL} controls />
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: answer.text }}
            />
          </div>
        </Collapsible>
      </div>
    );
  }
}

export default withStyles(s)(AudioAnswer);
