import React, { useState } from 'react';

const TodoAdder = (props) => {
    const [value, setValue] = useState('Hallo');
    return (
        <div>
            <input
                type="text"
                placeholder="Add Todo"
                value={value}
                onChange={(event) => setValue(event.target.value)} />
            <button
                type="button"
                onClick={() => {
                    props.addHandler(value);
                    setValue('');
                }}>
                Add
            </button>
        </div>
    )
}

export default TodoAdder;