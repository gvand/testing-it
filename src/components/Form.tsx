import React, { useState, ChangeEvent, FormEvent } from 'react'

type FormProps = {
    onSubmit: (inputValue: string) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSubmit(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter text"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

Form.displayName = 'Form'

export default Form
