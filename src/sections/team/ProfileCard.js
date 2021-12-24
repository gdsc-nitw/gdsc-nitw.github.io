import {Image, Button} from 'react-bootstrap';
import settings from "../../settings";

function renderSocialLinks(socialLinks) {
  return Object.keys(socialLinks).map((to, link) => {
    return (
      <li>
        <Button size="sm" variant='primary' href={socialLinks[to]}>{to}</Button>
      </li>
    ) 
  });
}

function ProfileCard(props) {
  return (
    <div className="profileCard">
      <div className="memberPic" style={{backgroundColor: settings.themeColor}}>
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
