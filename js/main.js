

// mock data
/*
const data = {
    articles: [
        { id: '1', image: 'http://via.placeholder.com/350x150', title: 'Article1', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { id: '2', image: 'http://via.placeholder.com/350x150', title: 'Article2', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
    ]
}*/

// cash
const doc = document;

function createArticle(data) {
    console.log(data)
    // article wrapper 
    let article = doc.createElement('article');
    article.id = data.id;
    // article title
    let title = doc.createElement('h3');
    title.innerHTML = data.title;
    // article image
    let img = doc.createElement('img');
    img.src = data.image;
    img.setAttribute('alt', data.title);
    // article content
    let content = doc.createElement('p');
    content.innerHTML = data.content;
    // put content to article wrapper
    article.appendChild(title);
    article.appendChild(img);
    article.appendChild(content);
    return article;
}

document.addEventListener("DOMContentLoaded", () => {

    // create query
    let xhr = new XMLHttpRequest();

    // query settings
    // GET - type query, address - server url
    xhr.open('GET', 'http://address.com', false);

    // send query

    //xhr.send();

    // 200 - successfully, other - error
    if (xhr.status != 200) {
    // procced error
    } else {
    // result
    const response = xhr.responseText;
         let articlesWrapper = doc.getElementById('articles-wrapper');
        // iterate array and create article with data
        response.articles.forEach((article) => {
            let articleNode = createArticle(article);
            let elemWrapper = doc.createElement('li');
            elemWrapper.appendChild(articleNode);
            articlesWrapper.appendChild(elemWrapper);
        })
    }   
});