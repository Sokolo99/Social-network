import './Button.css'

function Button() {
    const clicked = () => {
        console.log('hello');
    }

    return (
        <button onClick={clicked} className='button accent'>Сохранить</button>
    )
}

export default Button;