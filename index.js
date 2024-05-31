const file_system = require('fs');
const { stringify } = require('querystring');
const parser = new (require('rss-parser'))();

(async () => {
    let feed = await parser.parseURL('https://www.reddit.com/.rss');
    let cont = 1;

    // Logging to the terminal
    console.log(feed.title + '\n\n');
    feed.items.forEach(item => {
        console.log('Item ' + cont + ' - ' + item.title);
        cont++;
    });

    // Saving the article's title
    let article_index = 0;

    let article = stringify({
        title: feed.title,
        date: feed.items.at(article_index).date,
        headline: feed.items.at(article_index).title,
        link: feed.items.at(article_index).link,
    });

    file_system.writeFileSync('./articles.txt', article, (error) => {
        if (error) {
            console.log('Error: ' + error);
        }
        else {
            console.log('Success!');
        }
    });
})();