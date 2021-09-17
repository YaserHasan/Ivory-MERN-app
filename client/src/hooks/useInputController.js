import { useState } from 'react';

function useInputController(validator) {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange,
        
    }
}

export default useInputController;