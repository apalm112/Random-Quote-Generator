// Random Quote Generator for Treehouse Project #1
var getQuote;
var getRQ;

var quotesArray = [];  // array for Stretch Goal of not repeating quotes until all have been displayed


function getRandomQuote() {
    // selects random quote from quotes array
    //for (var idx=0;idx<quotes.length;idx++) {} loop for stretch goal
    var rando = Math.floor(Math.random() * quotes.length);
    // console.log(rando);
    quotesArray.push( quotes[rando].quote );
    // console.log(quotes[rando].quote);
    getQuote = quotes[rando].quote;
    return getQuote;
}

function printQuote() {
    var getRQ = getRandomQuote();
    // for in loop searches through the objects to find matching quote & then grab that objects corresponding properties for the template
        for (var key in quotes){
            if (quotes[key].quote === getQuote){
                var source = quotes[key].source;
                var citation = quotes[key].citation;
                var year = quotes[key].year;
            }
        }
    template = '<p class="quote">' + getRQ + '</p>';
    template += '<p class="source">' + source;
    // constructs a string using this template:
    // printQuote does not add for a missing citation or year property
    template += '<span class="citation">' + citation + '</span>';
    template += '<span class="year">' + year + '</span></p>';

    // printQuote puts final HTML string to the page using:
    var getQuoteBox = document.getElementById('quote-box');
    getQuoteBox.innerHTML = template;
}

function checkForRepeats() {
    // stretch goal function to not repeat quotes until all quotes have been shown, use console.log();
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// printQuote();