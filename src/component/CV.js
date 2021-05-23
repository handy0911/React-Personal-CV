import React from 'react';
import './CV.sass';
import InfoItem from './InfoItem';
import Progress from './Progress'
import ExpItem from './ExpItem'

const content = {
  name: "許顥瀚",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  experiences: [
    { title: "軟體工程師", place: "偲捷科技", time: "2019/07 ~ Now", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }
  ],
  educations: [
    { title: "機械所控制組 碩士", place: "國立台灣科技大學", time: "2017/09 ~ 2019/05", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "航太與系統工程學系 學士", place: "逢甲大學", time: "2013/09 ~ 2017/06", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "企業管理學系 學士", place: "逢甲大學", time: "2013/09 ~ 2017/06", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ],
  infos: [
    { title: "手機", content: "+886 - 911937160", picpath: "/Info/Phone.png" },
    { title: "郵箱", content: "handy0911@gmail.com", picpath: "/Info/Mail.png" },
    { title: "網站", content: "Lita Co, Ltd.99", picpath: "/Info/Website.png" },
    { title: "地址", content: "基隆市安樂區", picpath: "/Info/Address.png" }
  ],
  skills: [
    { title: "Figma", progress: "80%" },
    { title: "Frontend", progress: "80%" }
  ],
  languages: [
    { title: "Chinese", progress: "90%" },
    { title: "English", progress: "70%" }
  ],
  hobbies: {
    title: "興趣",
    content: "Socialising with firends and family, playing football, reading non-fiction books,and computing "
  }
}

function CV() {
  var i
  var infos = []
  for (i = 0; i < content.infos.length; i++) {
    infos[i] = <InfoItem content={content.infos[i]} />
  }
  var skills = []
  for (i = 0; i < content.skills.length; i++) {
    skills[i] = <Progress content={content.skills[i]} />
  }
  var languages = []
  for (i = 0; i < content.languages.length; i++) {
    languages[i] = <Progress content={content.languages[i]} />
  }
  var experiences = []
  for (i = 0; i < content.experiences.length; i++) {
    experiences[i] = <ExpItem content={content.experiences[i]} />
  }
  var educations = []
  for (i = 0; i < content.educations.length; i++) {
    educations[i] = <ExpItem content={content.educations[i]} />
  }

  return (
    <div className="cv__bound">
      <div className="cv__leftbox"></div>
      <div className="cv__bottombox"></div>
      <div className="cv__content">
        <div className="cv__left">
          <div className="cv__image">
            <img src={process.env.PUBLIC_URL + '/PersonalPhoto.png'} alt=""></img>
          </div>
          <div className="cv__info">
            {infos}
          </div>
          <div className="cv__skill">
            <h2>技能</h2>
            {skills}
          </div>
          <div className="cv__language">
            <h2>語言</h2>
            {languages}
          </div>
          <div className="cv__hobbies">
            <h2>興趣</h2>
            <p>{content.hobbies.content}</p>
          </div>
        </div>
        <div className="cv__right">
          <div className="cv__name">
            <h1>{content.name}</h1>
          </div>
          <div className="cv__About">
            <h2>關於我</h2>
            <p>{content.about}</p></div>
          <div className="cv__experience">
            <h2>經歷</h2>
            {experiences}
          </div>
          <div className="cv__education">
            <h2>教育</h2>
            {educations}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
