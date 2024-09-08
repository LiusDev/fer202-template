import React from 'react'
import { useQuery } from '../hooks'

const HomePage = () => {
    const { data } = useQuery("/users")

    return (
        <ul>
            { data?.map(user => (
                <li key={ user.id }>{ user.name }</li>
            )) }
        </ul>
    )
}

export default HomePage