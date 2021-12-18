import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutCard(props) {
  return (
    <div className='col-md-4 col-sm-6'>
      <div className='about-card'>
        <div className='about-card-header'>
          {/* <img src={props.logo} className="about-card-header-logo" alt="card logo art"/> */}
          <FontAwesomeIcon icon={props.logo} />
          <p className='about-card-header-title'>{props.title}</p>
        </div>
        <div className='about-card-content'>{props.content}</div>
      </div>
    </div>
  );
}

export default AboutCard;
