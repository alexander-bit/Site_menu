import { FaArrowLeft } from 'react-icons/fa';

export default function SidePanel({visible, visibleInf = false}) {
    return (
        <div style = {{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '350px',
            height: '100%',
            background: '#333',
            display: visibleInf ? 'block' : 'none',
            zIndex: '1'
        }}>
            
            <div style = {{
                position: 'absolute',
                display: 'flex',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'black',
                justifyContent: 'center',
                alignContent: 'center',
                padding: '10px',
                boxSizing: 'border-box'
            }}>
                <h3
                    style = {{
                        textAlign: 'center',
                        color: 'red',
                        margin: '20px 0'
                    }}
                >
                    LOGO
                </h3>
                    
                <button onClick = {visible} style={
                    {
                        position: 'absolute',
                        top: '15px',
                        right: 0,
                        width: '35px',
                        height: '35px',
                        background: 'red',
                        color: 'red',
                        border: 'none',
                        borderRadius: '50%',
                        marginRight: '18px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 5px rgba(0,0,0,0.3)'
                    }
                }>
                    <FaArrowLeft size={18} color="black" />
                </button>
            </div>
        </div>
    );
}