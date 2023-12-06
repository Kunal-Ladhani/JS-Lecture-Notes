// promises
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

const createArticleUsingPromise = (article) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            articles.push(article);

            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('error: promise failed.');
            }

        }, 2000);
    });
}

const newArticle = {
    title: "Hello",
    body: "World"
};

// createArticleUsingPromise(newArticle)
//     .then(getArticles)
//     .catch(err => console.error(err));

// in case of multiple promises use promise.all

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'hi');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'hello');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'bye');
});

const promise4 = 10;

const promise5 = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .catch(err => console.error(err));

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(value => console.log(value));

// async await way

const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    console.log(json);
};

getProducts();