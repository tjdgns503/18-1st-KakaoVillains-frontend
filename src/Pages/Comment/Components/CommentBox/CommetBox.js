import React from 'react';
import CocomentInput from '../CocommentInput/CocomentInput';
import ReplyBox from '../ReplyBox/ReplyBox';
import { FaRegHeart } from 'react-icons/fa';
import './CommentBox.scss';

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      changeLikedCount: false,
    };
  }

  changeLikedCount = () => {
    this.setState({ changeLikedCount: !this.state.changeLikedCount });
  };

  render() {
    const { name, text } = this.props;
    //console.log(text);
    return (
      <div className="textContainer">
        <div className="name">{name}</div>
        <div
          className="delete"
          onClick={() => this.props.handleCommentDelete(this.props.index)}
        >
          x
        </div>
        <div className="textBox">
          <span>{text}</span>
        </div>
        <div className="commentInfo">
          <span className="time">41분 전</span>
          <button className="heartBtn" onClick={this.changeLikedCount}>
            <span>
              <FaRegHeart
                className="heart"
                fill={this.state.changeLikedCount === true ? 'red' : 'gray'}
              />
            </span>
            <span className="likeCount" onClick={this.changeLikedCount}>
              {this.state.changeLikedCount === true ? '좋아요 1개' : '좋아요'}
            </span>
          </button>
          <button className="rereply">답글달기</button>
          <CocomentInput />
          <ReplyBox />
        </div>
      </div>
    );
  }
}

export default CommentBox;
