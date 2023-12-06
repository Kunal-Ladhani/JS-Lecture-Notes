// callbacks

const articles = [
    {
        title: "Article 1",
        body: "HI my name is kunal"
    },
    {
        title: "Article 2",
        body: "HI my surname is ladhani"
    }
]

const getArticles = () => {
    setTimeout(() => {
        articles.forEach((article, index) => {
            console.log(`${article.title} => ${article.body}`);
        });
    }, 1000);
}

const createArticle = (article) => {
    setTimeout(() => {
        articles.push(article);
    }, 2000);
}

// getArticles();

createArticle({
    title: "Hello",
    body: "World"
});

// dom is getting made in 1s while create is wairing for 2s to add 3rd article

// solution -> use callback functions

const createArticleUsingCallback = (article, callBackFunction) => {
    setTimeout(() => {
        articles.push(article);
        callBackFunction();
    }, 2000);
}

createArticleUsingCallback({
    title: "Hello",
    body: "World"
}, getArticles);
