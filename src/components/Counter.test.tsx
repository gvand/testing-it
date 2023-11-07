import * as axe from 'axe-core'
import {test, expect, render, describe} from '@/test/test-utils'
import {i18n} from '@lingui/core'
import Counter from './Counter'

describe('Counter', () => {
    test('it is accessible', async () => {
        const {container} = render(<Counter />)
        const results = await axe.run(container)
        expect(results.violations.length).toBe(0)
    })
    test('translates increment and decrement button label', () => {
        i18n.activate('de')
        const { getByText } = render(<Counter />)
        const incrementButton = getByText(/Erhöhen/i)
        const decrementButton = getByText(/Verringern/i)
        expect(incrementButton).toBeInTheDocument()
        expect(decrementButton).toBeInTheDocument()
    })
    test('renders initial count value', () => {
        const { getByText } = render(<Counter initialValue={5} />)
        const countValue = getByText(/Count: 5/i)
        expect(countValue).toBeInTheDocument()
    })
    test('increments the count when the increment button is clicked', async () => {
        const { getByText, user } = render(<Counter />)
        const incrementButton = getByText(/Increment/i)
        const countValue = getByText(/Count: 0/i)
        await user.click(incrementButton)
        expect(countValue).toHaveTextContent('Count: 1')
        await user.click(incrementButton)
        expect(countValue).toHaveTextContent('Count: 2')
    })
    test('decrements the count when the decrement button is clicked', async () => {
        const { getByText, user } = render(<Counter initialValue={3} />)
        const decrementButton = getByText(/Decrement/i)
        const countValue = getByText(/Count: 3/i)
        await user.click(decrementButton)
        expect(countValue).toHaveTextContent('Count: 2')
        await user.click(decrementButton)
        expect(countValue).toHaveTextContent('Count: 1')
    })
})
