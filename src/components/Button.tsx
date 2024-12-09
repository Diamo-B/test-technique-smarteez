import { useEffect, useState } from 'react';

type Props = {
    colorPrefix: string;
    symbol: string;
    action: () => void
}

const Button = ({colorPrefix, symbol, action}: Props) => {

    const [colors, setColors] = useState("")

    useEffect(()=>{
        setColors(`bg-${colorPrefix}-600 hover:bg-${colorPrefix}-700`)
    }, [colorPrefix])

    return (
        <button className={`w-20 h-12 text-lg font-bold rounded-md text-white ${colors}`} onClick={action}>
            {symbol}
        </button>
    );
}

export default Button;