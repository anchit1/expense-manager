const book = {
  title: 'XYZ',
  author: 'ABC',
  publisher: {
    // name: 'PQR'
  }
};

const publisher = book.publisher;

const { name: publisherName = 'Self-published' } = publisher;

console.log(publisherName);