import { useState } from "react";


const initialArticles = [
    { id: 1, title: "FORMAZIONE MILAN", categoria: "serie a", autore: "UMBERTO ECO", contenuto: "MILAN (4-2-3-1)..." },
    { id: 2, title: "FORMAZIONE FEYENOORD", categoria: "serie a", autore: "MONTALE", contenuto: "FEYENOORD (4-3-3)..." },
    { id: 3, title: "FORMAZIONE ATALANTA", categoria: "serie a", autore: "FOSCOLO", contenuto: "ATALANTA (3-4-1-2)..." },
    { id: 4, title: "FORMAZIONE CLUB BRUGGE", categoria: "serie a", autore: "ZEMAN", contenuto: "CLUB BRUGGE (4-5-1)..." },
    { id: 5, title: "FORMAZIONE BAYERN MONACO", categoria: "serie a", autore: "NIETZSCHE", contenuto: "BAYERN MONACO (4-2-3-1)..." },
];

export default function ArticleSelector() {

    // stato della lista articoli
    const [articles, setArticle] = useState(initialArticles);

    const [newTitle, setNewTitle] = useState('');


    // stato dell'input di inserimento nuovi titoli
    const [newArticle, setNewArticle] = useState('');







    //  aggiunta nuovo titolo alla lista

    const addArticle = e => {
        e.preventDefault();

        const newArticleInfo = { id: articles[articles.length - 1].id + 1, title: newTitle };
        // creazione nuovo array
        const updatedArticle = [...articles, newArticleInfo];

        setArticle(updatedArticle);
        // azzeriamo il valore di newTitle
        setNewArticle('');
        // azzeriamo input titolo
        setNewTitle('');
    }


    return (
        <>

            <form onSubmit={addArticle}>

                {/* input nuovo articolo */}
                <input
                    type="text"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="Inserisci articolo"
                />

                {/* input nuovo autore */}


                <button > Invia!</button>
            </form >



            <div>
                {articles.map((article) => (
                    <div key={article.id}>
                        <h2>Titolo : {article.title}</h2>
                        <h4>{article.autore}</h4>
                        <label htmlFor="#">{article.categoria}</label>
                        <p>{article.contenuto}</p>
                    </div>
                ))}
            </div>
        </>


    );
}