import { FunctionComponent, MouseEventHandler } from 'react'

interface SubmitButtonProps { 
    onClick: MouseEventHandler;
}

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({ onClick }) => {

    return (
    <button 
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
        Calculate Mixture
    </button>
    );
}
