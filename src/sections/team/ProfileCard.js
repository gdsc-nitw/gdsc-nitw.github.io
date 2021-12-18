function ProfileCard(props) {
  return (
    <div className='card event-card'>
      <div className='card hovercard'>
        <div className='cardheader'></div>
        <div className='avatar'>
          {/* <img alt="" data-src="images/assets/team/SimranKoul.jpg" src="images/assets/team/SimranKoul.jpg"> */}
        </div>
        <div className='info'>
          <div className='title'>
            <h5>
              <b>{props.name}</b>
            </h5>
            <p>{props.designation}</p>
          </div>
          <div className='desc'>{props.description}</div>
        </div>
        <div className='bottom'>
          <ul className='social-list__inline mt-10'>
            <li>
              <a href={props.twitter} target='_blank' rel='noreferrer'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>

            <li>
              <a
                href='https://www.instagram.com/simrankoul_7618/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>

            <li>
              <a
                href='https://github.com/SimranKoul7'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-github'></i>
              </a>
            </li>

            <li>
              <a
                href='https://www.linkedin.com/in/simran-koul-0210561b0/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/simran.koul.372/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
