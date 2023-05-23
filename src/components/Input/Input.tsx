import './Input.css'
import { IInput } from '../../types';

const Input = ({ type, id, value, placeholder, callback }: IInput) => {
    
    return (
        <>
            <input 
                className='input'
                id={id}
                value ={value}
                type={type}
                placeholder={placeholder}
                // data-empty={isEmpty}
                onChange={(e) => { callback(e) }}
            />
        </>
    )
}

export default Input