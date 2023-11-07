import Form from './Form'
import {expect, test, render, describe} from '@/test/test-utils'
import {vi} from 'vitest'

describe('Form', () => {
    test('input value updates on change', async () => {
        const {getByPlaceholderText, user} = render(<Form onSubmit={vi.fn()}/>)
        const input = getByPlaceholderText('Enter text')
        await user.type(input, 'New Value')
        expect(input).toHaveValue('New Value')
    })
    test('calls onSubmit with the input value when the form is submitted', async () => {
        const handleSubmit = vi.fn()
        const {getByPlaceholderText, getByRole, user} = render(<Form onSubmit={handleSubmit}/>)
        const input = getByPlaceholderText('Enter text')
        const submitButton = getByRole('button', {name: 'Submit'})
        await user.type(input, 'Hello, World!')
        await user.click(submitButton)
        expect(handleSubmit).toHaveBeenCalledWith('Hello, World!')
    })
    test('clears the input value after form submission', async () => {
        const {getByPlaceholderText, getByRole, user} = render(<Form onSubmit={vi.fn()}/>)
        const input = getByPlaceholderText('Enter text')
        const submitButton = getByRole('button', {name: 'Submit'})
        await user.type(input, 'Some text')
        await user.click(submitButton)
        expect(input).toHaveValue('')
    })
})
