import {useState} from 'react'

function UseForm(callback, defaults) {
    
    const [input, setInput] = useState(defaults)
    
    // useEffect (() => { //ESCUCHAR SI HAY CAMBIOS EN LOS PROPS O EN EL ESTADO
    //     setInput({...defaults})
    // }, [defaults])

    const handleSubmit = (event) =>{
        event.preventDefault();
        callback(input) 
    }

    const handleInputChange = (event) => {
            const {name, value} = event.target
            console.log(name,value);
            setInput({...input, [name]:value})
    }


    return { 
        input,
        handleSubmit,
        handleInputChange
    } 
}

export default UseForm