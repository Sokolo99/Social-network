import './JournalAddButton.css'
import CardButton from "../CardButton/CardButton.jsx";

function JournalAddButton() {
    return (
        <CardButton className="journal-add">
            <img src='/public/Frame.svg'/>
            Новое воспоминание
        </CardButton>
    )
}
export default JournalAddButton