import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Teacher.css'
import Rating from 'react-rating';

const Teacher = (props) => {
    // console.log(props)

    const { picture, name, age, salary, email, University } = props.teacher

    return (
        <div className='teacher-container'>

            <img className='image-container' src={picture} alt="" />
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Email:{email}</p>
            <p>University:{University}</p>
            <p>Salary:{salary}</p>
            <p className='icon'>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-facebook-square"></i>

            </p>

            <button onClick={() => props.handleAddToCart(props.teacher)} className='button-container'><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>

        </div>
    );
};

export default Teacher;