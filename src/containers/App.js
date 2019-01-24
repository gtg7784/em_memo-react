import React, { Component } from 'react';
import * as classNames from 'classnames/bind'
import MaterialIcon from 'material-icons-react';
import styles from './App.scss';

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <h1>EM_Memo-React</h1>
        <div className={cx('Memocontents')}>
          <ul>{/* {this.state.comments.map((comment, i) => { 
               return ( */}
                <li>
                  <div>
                    <div className={cx('comment')}><strong>gtg7784</strong> (작성일 - <span>2018.01.25</span>)</div>  <div className={cx('icons')}><MaterialIcon icon='edit' /> <MaterialIcon icon='delete_forever' /></div>
                  </div>
                  <span>댓글 ㅁㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㅁㄴㅇㄹㅁㄴㄹㄴㅁㅇㄹㅁㅇㄴㄹㄴㅁㅇㄹㅇㄴ 제이쿼리 개싫어 진짜</span>
                </li>
              {/* )
            })} */}
            </ul>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className={cx('PostWrite')}>
            <div className='WriteHeader'>댓글 작성</div>
            <textarea value='{this.state.comment}' onChange='{this.onChangeComment}' cols='30' placeholder='Write a comment…' />
          </div>
          <div className={cx('PostAction')}>
            <button type='submit'>댓글 작성</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
