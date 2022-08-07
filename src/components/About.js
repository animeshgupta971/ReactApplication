import React from 'react'
import Image from '../images/profile.jpg';
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="d-flex introduction">
            <div className="col-md-6 left-intro">
                <div>
                <h1>Hi,<br />I'm
                    <span className="text-danger"> Animesh</span>
                    <br /><strong><em> Frontend Devloper</em></strong></h1>
                <p>I have 2+ Year of work Experience in web development</p>
                <Button variant="primary">Contact</Button>

                </div>
            </div>
            <div className="col-md-6 right-intro">
                <div>
                    <img src={Image} alt="Image" class="profile-img img-fluid" />
                </div>
            </div>
        </div>
    </div>
    <div className='spacebar'></div>

</>
  )
}

export default About