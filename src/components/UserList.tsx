import {FC, useState, useEffect} from 'react'

type User = {
    id: number
    name: string
    username: string
}

const UserList: FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string | null>(null)

    // Demo only, please don't do this in production! Use a library like swr or react-query instead.
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    throw new Error('Failed to fetch')
                }
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setError(error.message)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

UserList.displayName = 'UserList'
export default UserList
