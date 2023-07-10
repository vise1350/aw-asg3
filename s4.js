function arrangeInAlphabeticalOrder(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles);
  }
  
  const books = [
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  ];
  
  const logTitles = (titles) => {
    titles.sort();
    titles.forEach((title) => {
      console.log(title);
    });
  };
  
  arrangeInAlphabeticalOrder(books, logTitles); // The Catcher in the Rye
  // The Hitchhiker's Guide to the Galaxy
  // The Lord of the Rings
  