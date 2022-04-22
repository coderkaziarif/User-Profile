import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import './User.css';

const User = (props) => {
    // console.log(props.profile, 'props.profile');
    // console.log(props);
    const { img, name, email, country, city, phone, salary } = props.profile;
    const handleAddUser = props.handleAddUser;
    return (
        <div className='user'>
            <div>
                <img src={img} alt={name} />
            </div>

            <div className="user-info">
                {/* Using Bootstrap Card */}
                <Card className='card-container'>

                    <Card.Body className='card-body mb-4 mx-5 px-5'>
                        <Card.Title className='title mb-4'>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Email : {email}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Country : {country}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">City : {city}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Phone : {phone}</Card.Subtitle>
                        <Card.Subtitle className="mb-5 text-muted"><small>Yearly Income : ${salary}</small></Card.Subtitle>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        <Button onClick={() => handleAddUser(props.profile)} variant="danger"><FontAwesomeIcon icon={faPlus} /> Add as Friend</Button>
                    </Card.Body>
                </Card>


                {/* Old version */}
                {/* <h2>{name}</h2>
                <p>Email : {email}</p>
                <p>Country : {country}</p>
                <p>City : {city}</p>
                <p>Phone: {phone}</p>
                <p><small>Yearly Income : {salary}</small></p>
                <Button className='main-btn'> <FontAwesomeIcon icon={faPlus} /> Add as Friend</Button> */}
            </div>
        </div>
    );
};

export default User;