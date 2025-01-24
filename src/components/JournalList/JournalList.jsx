import './JournalList.css'
import CardButton from "../CardButton/CardButton.jsx";
import JournaIitem from "../Journalitem/Journalitem.jsx";
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

function JournalList({items}) {
    const {userId} = useContext(UserContext)

    if (items.length === 0) {
        return <p>Записей пока нет, добавьте</p>
    }
    const sortItem = (a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    };

    return <>
        {items
            .filter(el => el.userId === userId)
            .sort(sortItem)
            .map(el => (
                <CardButton key={el.id}>
                    <JournaIitem
                        title={el.title}
                        post={el.post}
                        date={el.date}
                    />
                </CardButton>
            ))}
    </>
}

export default JournalList