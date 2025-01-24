import './JournalList.css'
import CardButton from "../CardButton/CardButton.jsx";
import JournaIitem from "../Journalitem/Journalitem.jsx";

function JournalList({items}) {
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
        {items.sort(sortItem).map(el => (
            <CardButton key={el.id}>
                <JournaIitem
                    title={el.title}
                    text={el.text}
                    date={el.date}
                />
            </CardButton>
        ))}
    </>
}

export default JournalList