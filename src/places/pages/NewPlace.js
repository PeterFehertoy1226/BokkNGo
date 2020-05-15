import React  from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE, 
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import {useForm } from '../../shared/hooks/form-hook';
import './NewPlace.css';
import { useReducedMotion } from 'framer-motion';




const NewPlace = () => {
    const [formState, inputHandler] = useForm(
        {
        title:{
            value: '',
            isValid: false
        },
        description:{
            value: '',
            isValid: false
        },
        address: {
            value:'',
            isValid: false
        }
    }, 
    false);
    

    
const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
}

    return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input 
            id="title"
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Írjál be valami értelmeset" 
            onInput={inputHandler}
        />
          <Input 
            id="description"
            element="input" 
            type="text" 
            label="Description" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Írjál be valami értelmeset" 
            onInput={inputHandler}
        />
           <Input 
            id="address"
            element="input" 
            type="text" 
            label="Address" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Írjál be valami értelmeset" 
            onInput={inputHandler}
        />


        
            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
    </form>
   
   );
};

export default NewPlace;