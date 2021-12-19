import {Image} from 'react-bootstrap';

function renderSocialLinks(socialLinks) {
  return Object.keys(socialLinks).map((to, link) => {
    return (<li><a href={socialLinks[to]}>
      {`${to} `}
    </a></li>)
  });
}

function ProfileCard(props) {
  return (
    <div className="profileCard">
      <div className="memberPic">
        <Image fluid={true} src={props.memberPic}></Image>
      </div>
      <div className='profileCardText'>
      <div className="memberName">
        {props.memberName}
      </div>
      <div className="memberPost">
        {props.memberPost}
      </div>
      <p className="memberBio">
        {props.memberBio}
      </p>
      <ul className="memberSocials">
        {renderSocialLinks(props.memberSocials)}
      </ul>
      </div>
    </div> 
  );
}

export default ProfileCard;
