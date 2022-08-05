import React from 'react'
import './../../sass/Header.scss'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='left-Menu'>
          logo 
          <span>영업관리자</span>
        </div>
        <div className='right-Menu'>
          <span>남은시간: 60:00</span>
          <button>연장</button>
          <div className='noti-icon'>d</div>
          <span><a href="#">알림 +99건</a></span>
          <img width={30} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" />
          <span className='user-name'>홍길동(본사스텝)님</span>
          <span className='btn-logout'>로그아웃</span>
        </div>
      </div>
      <div className='gnb'>
        <div className='rectangle-menu'><div className='menu-icon'></div><span className="menu">통합정보조회</span></div>
        <div className='rectangle-menu'><div className='menu-icon'></div><span className="menu">실적현황</span></div>
        <div className='rectangle-menu'><div className='menu-icon'></div><span className="menu">활동관리</span></div>
        <div className='rectangle-menu'><div className='menu-icon'></div><span className="menu">공지사항</span></div>
        <div className='rectangle-menu'><div className='menu-icon'></div><span className="menu">자료실</span></div>
        <div className='rectangle-menu'><div className='menu-icon'></div><span className="menu">운영</span></div>
      </div>
    </>
  )
}
export default Header