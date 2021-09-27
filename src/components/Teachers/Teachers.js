import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {

    const [teachers, setTeachers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))

    }, [])

    const handleAddToCart = (teacher) => {
        const newCart = [...cart, teacher]
        setCart(newCart)
    }

    return (
        <div className='teachers'>

            <div className='teachers-container'>
                {/* <h2>teacher details:{teachers.length}</h2> */}
                {
                    teachers.map(teacher => <Teacher
                        key={teacher._id}
                        teacher={teacher}
                        handleAddToCart={handleAddToCart}
                    ></Teacher>)
                }
            </div>

            <div className='teachers-cart'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Teachers;