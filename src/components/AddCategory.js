import React, {useState} from 'react'
//import {setCategories} from './components/GifExpertApp'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

        const handleSubmit = (e) => {
            e.preventDefault();

            if (inputValue.trim().length > 2 ){
                
                setCategories( cats => [inputValue, ...cats ] );
                setInputValue('');
            }

        }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

//HAcemos que sea requerido o obligatorio el pasaje de esta prop
AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;