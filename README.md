# Inspirational Quote Web App
 
This is a web application that generates random inspirational quotes using an external API. When the user clicks the "Give Me A Quote" button, the application makes a request to the API and retrieves a random famous quote along with the corresponding author. The quote and author are then displayed on the page.

```javascript
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
```
This code adds an event listener to the "Give Me A Quote" button (quoteBtn). When the button is clicked, an asynchronous function is executed. Inside this function, the fetch function is used to make a GET request to the API endpoint specified by the URL variable. The API request includes the necessary headers for authentication.

Once the response is received, it is converted to JSON using the response.json() method. The retrieved data is then used to extract the quote and author values. These values are assigned to the textContent property of the corresponding HTML elements (quoteLine and authorName), which updates the displayed quote and author on the page.

Please note that you need to replace the API key ('X-RapidAPI-Key') with your own key if you have one, or sign up for an account on the RapidAPI platform to obtain a key for accessing the "Random Famous Quotes" API.

Feel free to customize the HTML and CSS according to your desired design preferences.
