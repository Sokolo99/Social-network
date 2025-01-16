import './App.css'
import Button from "./components/Button/Button.jsx";
import JournaIitem from "./components/Journalitem/Journalitem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";

function App() {
    const date = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Горные походы открывают удивительные природные ландшафты',
            date: new Date()
        },
        {
            title: 'Поход в горы',
            text: 'Думал что очень много времени...',
            date: new Date()
        },
    ]

    return (
        <>
            <h1>Заголовок</h1>
            <p>Текст</p>
            <Button/>
            <CardButton>
                Новое воспоминание
            </CardButton>
            <CardButton>
                <JournaIitem
                    title={date[0].title}
                    text={date[0].text}
                    date={date[0].date}
                />
            </CardButton>
            <CardButton>
                <JournaIitem
                    title={date[1].title}
                    text={date[1].text}
                    date={date[1].date}
                />
            </CardButton>
        </>
    );
}

export default App;