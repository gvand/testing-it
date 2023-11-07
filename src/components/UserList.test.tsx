import {test, render, waitFor, expect, describe} from '@/test/test-utils'
import UserList from './UserList'
import {afterAll, afterEach, beforeAll} from 'vitest'
import {setupServer} from 'msw/node'
import {http, HttpResponse} from 'msw'

const server = setupServer(
    http.get('https://jsonplaceholder.typicode.com/users', () => HttpResponse.json([
        { id: 'unique1', name: 'Hans Wurst', username: 'HansiVeggie' },
        { id: 'unique2', name: 'Sabine Hausgeist', username: 'SpookeySabine' }
    ]))
)
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('UserList', () => {
    test('renders a list of users after fetching data', async () => {
        const { getByText } = render(<UserList />)
        await waitFor(() => {
            expect(getByText('Hans Wurst')).toBeInTheDocument()
        })
    })
    test('displays an error message when the data fetching fails', async () => {
        // Mock the fetch function to simulate a failed request
        // Option 1: Use msw to error out the request
        server.use(http.get('https://jsonplaceholder.typicode.com/users', () => HttpResponse.error()))
        // Option 2: Use vi spy to mock the fetch function (Implementation Details)
        // vi.spyOn(window, 'fetch').mockImplementationOnce(() =>
        //     Promise.reject(new Error('Failed to fetch'))
        // )
        const { getByText } = render(<UserList />)
        await waitFor(() => {
            expect(getByText('Error: Failed to fetch')).toBeInTheDocument()
        })
    })
})
