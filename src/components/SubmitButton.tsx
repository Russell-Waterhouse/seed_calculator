import React, { EventHandler, FunctionComponent, MouseEventHandler } from 'react'

interface SubmitButtonProps { 
    onClick: Function
}

const log: MouseEventHandler = () => {
    console.log("hello, world!")
}

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({ onClick }) => {

    return (
    <button onClick={log}>
        Calculate Mixture
    </button>
    );
}
