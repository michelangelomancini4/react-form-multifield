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
    const [articles, setArticles] = useState(initialArticles);

    // stato dell'input di inserimento nuova articoli
    const [newArticle, setNewArticle] = useState('');
    const [newTitle, setNewTitle] = useState('');



    //  aggiunta nuovo articolo alla lista

    const addArticle = e => {
        e.preventDefault();

        const newArticleInfo = { id: articles[articles.length - 1].id + 1, title: newArticle.title, categoria: newArticle.categoria, autore: newArticle.autore, contenuto: newArticle.contenuto };
        // creazione nuovo array
        const updatedArticles = [...articles, newArticleInfo];

        setArticles(updatedArticles);
        // azzeriamo il valore di newarticle
        setNewArticle('');
    }

    return (
        <>

            <form onSubmit={addArticle}>

                {/* input nuovo articolo */}
                <input
                    type="text"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="Inserisci titolo"
                />

                <button > Invia!</button>
            </form >



            <div>
                {articles.map((article) => (
                    <div key={article.id}>
                        <h2>{article.title}</h2>
                        <h4>{article.autore}</h4>
                        <label htmlFor="#">{article.categoria}</label>
                        <p>{article.contenuto}</p>
                    </div>
                ))}
            </div>
        </>


    );
}