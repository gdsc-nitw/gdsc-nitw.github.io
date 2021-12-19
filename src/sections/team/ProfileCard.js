function renderSocialLinks(socialLinks) {
  return Object.keys(socialLinks).map((to, link) => {
    return <a href={socialLinks[to]}>
      {to}
    </a>
  });
}

function ProfileCard(props) {
  return (
    <div>
      <div className="memberName">
        {props.memberName}
      </div>
      <small className="memberPost">
        {props.memberPost}
      </small>
      <p className="memberBio">
        {props.memberBio}
      </p>
      <div className="memberSocials">
        {renderSocialLinks(props.memberSocials)}
      </div>
    </div> 
  );
}

export default ProfileCard;
