import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutCard(props) {
  return (
    <div className='col-sm-12 col-md-6 col-lg-4'>
      <div className='about-card'>
        <div className='about-card-header'>
          <FontAwesomeIcon style={{color: props.logoColor}} className="aboutCardLogo" icon={props.logo} />
          <h3 className='about-card-header-title'>{props.title}</h3>
        </div>
        <div className='about-card-content'>{props.content}</div>
      </div>
    </div>
  );
}

export default AboutCard;
