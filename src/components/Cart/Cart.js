import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.friend, 'friend');
    // const { friend } = props.friend;
    // NTB: Here we hav converted String Salary to Number Salary (using '+'plus sign or parseFlat to convert number) like this.
    const salary = props.friend.reduce((salary, property) => salary + +(property.salary), 0);
    // const salary = props.friend.reduce((salary, property) => salary + parseFloat(property.salary), 0);
    // console.log(salary);
    // const salaryAmount = (Number(salary));

    let name = [];
    for (let i = 0; i < props.friend.length; i++) {
        const element = props.friend[i];
        name = name + ' ' + element.name;
        console.log(name);
    }



    return (
        <div className='cart-info'>
            <h3>Friend List</h3>
            <h5>Friends Added : {props?.friend?.length}</h5>
            <p>Friends Name : {name} </p>
            <p>Anual Salary : $ {salary.toFixed(2)}</p>
        </div>
    )
};

export default Cart;