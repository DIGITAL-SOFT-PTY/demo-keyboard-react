
import React, { useRef, useState } from 'react';
import { Keyboard } from 'virtual-keyboard-react-js/src/keyboard';

export const Example: React.FC = () => {
    const inputRef = useRef(null);
    const inputRefs = useRef([React.createRef()]);
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <input ref={inputRef} value={inputValue} />
            <Keyboard
                inputRef={inputRef}
                onClick={(value: string) => {
                    setInputValue(value);
                }}
                backgroundStyle={{
                    display: 'flex',
                    backgroundImage: `url('./assets/bg-teclado.png')`,
                    backgroundRepeat: 'no-repeat',
                    position: 'fixed',
                    width: '1065px',
                    height: '361px',
                    bottom: '0px',
                    padding: '1rem',
                    zIndex: '100'
                }}
                backgroundButtonStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80px',
                    height: '80px',
                    cursor: 'pointer',
                    color: '#4D4D4F',
                    backgroundImage: `url('./assets/key.png')`,
                    backgroundRepeat: 'no-repeat',
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}
                rowStyle={{
                    display: 'flex',
                    height: '80px',
                    marginLeft: '0px',
                    marginTop: '0px',
                    padding: '0px'
                }}
                leftStyle={{
                    background: 'transparent',
                    width: '790px'
                }}
                rigthStyle={{
                    background: 'transparent',
                    width: '275px'
                }}
                backgroundButtonSpaceStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '475px',
                    height: '80px',
                    cursor: 'pointer',
                    color: '#4D4D4F',
                    backgroundImage: `url('./assets/espacio.png')`,
                    backgroundRepeat: 'no-repeat',
                    fontSize: '30px',
                    fontWeight: 'bold'
                }}
                backgroundButtonDeleteStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '157px',
                    height: '80px',
                    cursor: 'pointer',
                    color: '#4D4D4F',
                    backgroundImage: `url('./assets/borrar.png')`,
                    backgroundRepeat: 'no-repeat',
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}
                backgroundButtonPuntoStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '157px',
                    height: '80px',
                    cursor: 'pointer',
                    color: '#4D4D4F',
                    backgroundImage: `url('./assets/borrar.png')`,
                    backgroundRepeat: 'no-repeat',
                    fontSize: '30px',
                    fontWeight: 'bold'
                }}
            />
        </>
    )
}