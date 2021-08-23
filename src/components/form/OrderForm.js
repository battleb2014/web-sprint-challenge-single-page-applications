import React from 'react';
import './form.css';

const OrderForm = () => {

    return (
        <div className = 'form'>
            <h4>Coice of size</h4>
            <p>required*</p>
            <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>

            <h4>Choice of sauce</h4>
            <p>required*</p>
            <label> Original Red
                <input 
                    type = 'radio' 
                    value = 'original red' 
                    name = 'sauce'
                />
            </label>
            <label> Garlic Ranch
                <input 
                    type = 'radio' 
                    value = 'garlic ranch' 
                    name = 'sauce'
                />
            </label>
            <label> Bbq Sauce
                <input 
                    type = 'radio' 
                    value = 'bbq sauce' 
                    name = 'sauce'
                />
            </label>
            <label> Spinach Alfredo
                <input 
                    type = 'radio' 
                    value = 'spinach alfredo' 
                    name = 'sauce'
                />
            </label>

            <h4>Add Toppings</h4>
            <p>choose up to 10</p>
            <label> Pepperoni
                <input 
                    type = 'checkbox' 
                    value = 'pepperoni' 
                    name = 'toppings'
                />
            </label>
            <label> Sausage
                <input 
                    type = 'checkbox' 
                    value = 'sausage' 
                    name = 'toppings'
                />
            </label>
            <label> Canadian Bacon
                <input 
                    type = 'checkbox' 
                    value = 'canadian bacon' 
                    name = 'toppings'
                />
            </label>
            <label> Spicy Italian Sausage
                <input 
                    type = 'checkbox' 
                    value = 'spicy italian sausage' 
                    name = 'toppings'
                />
            </label>
            <label> Grilled Chicken
                <input 
                    type = 'checkbox' 
                    value = 'grilled chicken' 
                    name = 'toppings'
                />
            </label>
            <label> Onions
                <input 
                    type = 'checkbox' 
                    value = 'onions' 
                    name = 'toppings'
                />
            </label>
            <label> Green Pepper
                <input 
                    type = 'checkbox' 
                    value = 'green peppers' 
                    name = 'toppings'
                />
            </label>
            <label> Diced Tomatoes
                <input 
                    type = 'checkbox' 
                    value = 'diced tomatoes' 
                    name = 'toppings'
                />
            </label>
            <label> Black Olives
                <input 
                    type = 'checkbox' 
                    value = 'black olives' 
                    name = 'toppings'
                />
            </label>
            <label> Roasted Garlic
                <input 
                    type = 'checkbox' 
                    value = 'roasted garlic' 
                    name = 'toppings'
                />
            </label>
            <label> Artichoke Hearts
                <input 
                    type = 'checkbox' 
                    value = 'artichoke hearts' 
                    name = 'toppings'
                />
            </label>
            <label> Three Cheese
                <input 
                    type = 'checkbox' 
                    value = 'three cheese' 
                    name = 'toppings'
                />
            </label>
            <label> Pineapple
                <input 
                    type = 'checkbox' 
                    value = 'pineapple' 
                    name = 'toppings'
                />
            </label>
            <label> Extra Cheese
                <input 
                    type = 'checkbox' 
                    value = 'extra cheese' 
                    name = 'toppings'
                />
            </label>

            <h4>Choice of substitutes</h4>
            <p>Choose up to one</p>
            <label>
                <input 
                    type = 'checkbox'
                    aria-label = 'Toggle button'
                />
                Gluten Free Crust (+$1.00)
            </label>
            <h4>Special Instructions</h4>
            <textarea 
                type = 'textarea'
                name = 'special instructions'
            />
        </div>
    )

}

export default OrderForm;