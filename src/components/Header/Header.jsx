import SelectUser from "../SelectUser/SelectUser.jsx";
import Button from "../Button/Button.jsx";
import {useState} from "react";
import Logo from "../Logo/Logo.jsx";

const logos = ['/Personal Journal.svg', '/Logo.svg']

function Header() {
    const [logoIndex, setLogoIndex] = useState(0);
    const toggleLogo = () => {
        setLogoIndex(state => Number(!state))
    }

    return (
        <>
            <Logo image={logos[logoIndex]}/>
            <SelectUser/>
            <Button onClick={toggleLogo}>Сменить Logo</Button>
        </>
    )
}

export default Header;