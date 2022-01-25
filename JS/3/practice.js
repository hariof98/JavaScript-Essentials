class Book{
    constructor(name, author, volume, date, time, price)
    {
        this.name = name,
        this.author = author,
        this.volume = volume,
        this.publishedAt = {
            date:date,
            time:time,
        }
        this.price = price
    }
}

const myBook = new Book(
    'My Life',
    'Hari',
    1,
    '2021',
    '12.30 PM',
    500,
)

var dateAndTime = "publishedAt";

console.log('The Book details are:', 'The name of the book is:', myBook.name,',', 'The author of the book is', myBook.author,',',
            'This is',myBook.volume,'st volume book',',', 'The date of publishing is', myBook[dateAndTime],',', 'The price is Rs.', myBook.price 
);