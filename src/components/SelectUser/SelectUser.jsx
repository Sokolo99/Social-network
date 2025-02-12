import {useContext} from "react";
import {UserContext} from "../../context/user.context.js";

function SelectUser() {
    const {userId, setUserId} = useContext(UserContext);

    const changeUser = (e) => {
        setUserId(Number(e.target.value))
    }

    return (
        <select name='user' id='user' value={userId} onChange={changeUser}>
            <option value='1'>Ivan</option>
            <option value='2'>Ivan666</option>
        </select>
    )
}

export default SelectUser;