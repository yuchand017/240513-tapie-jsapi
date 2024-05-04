let jsonData = [];
const root = document.getElementById('root');
const loading = document.getElementById('loading');


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    jsonData = json;
    loading.remove();
    loadArticle();
}); 

function loadArticle() {
    root.innerHTML = '';
    jsonData.forEach((item, index)=> {
        let article = document.createElement('div');
        article.className = 'article';
        article.innerHTML = `
            <div class="title" onclick="displayArticle(${index})">
                <h1>${item.title}</h1>
                <h4>id: ${item.id}</h4>
            </div>
            <p>${item.body}</p>
        `;
        root.appendChild(article);
    });
}

function displayArticle(index) {
    root.innerHTML = '';
    let item = jsonData[index];
    let article = document.createElement('div');
    article.className = 'view-article';
    article.innerHTML = `
        <div id="menu">
            <img src="image.png" alt="돌아가기" onclick="loadArticle();" />
        </div>
        <div class="view-title" onclick="displayArticle(${index})">
            <h1>${item.title}</h1>
            <h4>id: ${item.id}</h4>
        </div>
        <p>${item.body}</p>
    `;
    root.appendChild(article);
}