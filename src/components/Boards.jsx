import React, { useState } from 'react'
import Square from './Square'

const Boards = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);

    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const checkWinner = () => {
        for (let i = 0; i < winner.length; i++) {
            let [a, b, c] = winner[i];
            if (state[a] != null && state[a] == state[b] && state[b] == state[c]) {
                return state[a];
            }
        }
        return null;
    }

    const isWinner = checkWinner();


    const handler = (index) => {
        if (state[index]) {
            return;
        }
        console.log(index);
        const copy = [...state];
        copy[index] = isXturn ? 'X' : 'O';
        setState(copy);
        setIsXturn(!isXturn);

    }

    return (


        <div className=''>
            {
                isWinner ? (<>
                    <p className='text-white text-3xl text-center py-44'>
                         {isWinner} WON
                    </p>
                </>) :
                    (<>
                        <p className='text-white text-3xl text-center my-10 '>
                            {isXturn ? 'X' : 'O'} Your Move 
                        </p>
                        <div className='flex flex-row '>
                            <Square onClick={() => handler(0)} state={state[0]} />
                            <Square onClick={() => handler(1)} state={state[1]} />
                            <Square onClick={() => handler(2)} state={state[2]} />
                        </div>
                        <div className='flex flex-row'>
                            <Square onClick={() => handler(3)} state={state[3]} />
                            <Square onClick={() => handler(4)} state={state[4]} />
                            <Square onClick={() => handler(5)} state={state[5]} />
                        </div>
                        <div className='flex flex-row'>
                            <Square onClick={() => handler(6)} state={state[6]} />
                            <Square onClick={() => handler(7)} state={state[7]} />
                            <Square onClick={() => handler(8)} state={state[8]} />
                        </div>
                    </>)
            }



        </div>
    )
}

export default Boards