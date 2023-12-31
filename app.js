const quoteBtn = document.getElementById('js-quote-btn');
const quoteLine = document.getElementById('quote');
const authorName = document.getElementById('author');

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
  }
};

quoteBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const quote = data[0].quote;
    const author = data[0].author;
    quoteLine.textContent = `"${quote}"`;
    authorName.textContent = `-${author}`;
  } catch (error) {
    console.error(error);
  }
});
