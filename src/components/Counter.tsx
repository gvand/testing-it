import React, { useState } from 'react'
import {Button} from '@/components/ui/button'
// import {Trans} from '@lingui/macro'

type CounterProps = {
    initialValue?: number
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const [count, setCount] = useState(initialValue)
    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <Button onClick={increment}>
                Increment
                {/*<Trans>Increment</Trans>*/}
            </Button>
            <Button onClick={decrement}>
                Decrement
                {/*<Trans>Decrement</Trans>*/}
            </Button>
        </div>
    )
}

Counter.displayName = 'Counter'

export default Counter
