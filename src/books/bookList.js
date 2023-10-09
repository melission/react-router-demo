const classicBooks = [
    {
      id: 1,
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen"
    },
    {
      id: 2,
      bookName: "To Kill a Mockingbird",
      authorName: "Harper Lee"
    },
    {
      id: 3,
      bookName: "1984",
      authorName: "George Orwell"
    },
    {
      id: 4,
      bookName: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald"
    },
    {
      id: 5,
      bookName: "Moby-Dick",
      authorName: "Herman Melville"
    },
    {
      id: 6,
      bookName: "Jane Eyre",
      authorName: "Charlotte Bronte"
    },
    {
      id: 7,
      bookName: "The Catcher in the Rye",
      authorName: "J.D. Salinger"
    },
    {
      id: 8,
      bookName: "Wuthering Heights",
      authorName: "Emily Bronte"
    },
    {
      id: 9,
      bookName: "The Odyssey",
      authorName: "Homer"
    },
    {
      id: 10,
      bookName: "Don Quixote",
      authorName: "Miguel de Cervantes"
    },
    {
      id: 11,
      bookName: "War and Peace",
      authorName: "Leo Tolstoy"
    },
    {
      id: 12,
      bookName: "The Brothers Karamazov",
      authorName: "Fyodor Dostoevsky"
    },
    {
      id: 13,
      bookName: "Crime and Punishment",
      authorName: "Fyodor Dostoevsky"
    },
    {
      id: 14,
      bookName: "The Adventures of Huckleberry Finn",
      authorName: "Mark Twain"
    },
    {
      id: 15,
      bookName: "Alice's Adventures in Wonderland",
      authorName: "Lewis Carroll"
    },
    {
      id: 16,
      bookName: "The Count of Monte Cristo",
      authorName: "Alexandre Dumas"
    },
    {
      id: 17,
      bookName: "Gulliver's Travels",
      authorName: "Jonathan Swift"
    },
    {
      id: 18,
      bookName: "Frankenstein",
      authorName: "Mary Shelley"
    },
    {
      id: 19,
      bookName: "Catch-22",
      authorName: "Joseph Heller"
    },
    {
      id: 20,
      bookName: "The Picture of Dorian Gray",
      authorName: "Oscar Wilde"
    },
    {
      id: 21,
      bookName: "The Hobbit",
      authorName: "J.R.R. Tolkien"
    },
    {
      id: 22,
      bookName: "Anna Karenina",
      authorName: "Leo Tolstoy"
    },
    {
      id: 23,
      bookName: "Les Misérables",
      authorName: "Victor Hugo"
    },
    {
      id: 24,
      bookName: "The Scarlet Letter",
      authorName: "Nathaniel Hawthorne"
    },
    {
      id: 25,
      bookName: "One Hundred Years of Solitude",
      authorName: "Gabriel Garcia Marquez"
    },
    {
      id: 26,
      bookName: "A Tale of Two Cities",
      authorName: "Charles Dickens"
    },
    {
      id: 27,
      bookName: "The Lord of the Rings",
      authorName: "J.R.R. Tolkien"
    },
    {
      id: 28,
      bookName: "The Grapes of Wrath",
      authorName: "John Steinbeck"
    },
    {
      id: 29,
      bookName: "The Divine Comedy",
      authorName: "Dante Alighieri"
    },
    {
      id: 30,
      bookName: "Moby-Dick",
      authorName: "Herman Melville"
    },
    {
      id: 31,
      bookName: "The Canterbury Tales",
      authorName: "Geoffrey Chaucer"
    },
    {
      id: 32,
      bookName: "The Iliad",
      authorName: "Homer"
    },
    {
      id: 33,
      bookName: "The Sound and the Fury",
      authorName: "William Faulkner"
    },
    {
      id: 34,
      bookName: "Dracula",
      authorName: "Bram Stoker"
    },
    {
      id: 35,
      bookName: "The Adventures of Sherlock Holmes",
      authorName: "Arthur Conan Doyle"
    },
    {
      id: 36,
      bookName: "The Three Musketeers",
      authorName: "Alexandre Dumas"
    },
    {
      id: 37,
      bookName: "The Sun Also Rises",
      authorName: "Ernest Hemingway"
    },
    {
      id: 38,
      bookName: "The Jungle Book",
      authorName: "Rudyard Kipling"
    },
    {
      id: 39,
      bookName: "A Christmas Carol",
      authorName: "Charles Dickens"
    },
    {
      id: 40,
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen"
    },
    {
      id: 41,
      bookName: "Little Women",
      authorName: "Louisa May Alcott"
    },
    {
      id: 42,
      bookName: "Great Expectations",
      authorName: "Charles Dickens"
    },
    {
      id: 43,
      bookName: "Sense and Sensibility",
      authorName: "Jane Austen"
    },
    {
      id: 44,
      bookName: "The War of the Worlds",
      authorName: "H.G. Wells"
    },
    {
      id: 45,
      bookName: "The Old Man and the Sea",
      authorName: "Ernest Hemingway"
    },
    {
      id: 46,
      bookName: "Wuthering Heights",
      authorName: "Emily Bronte"
    },
    {
      id: 47,
      bookName: "The Trial",
      authorName: "Franz Kafka"
    },
    {
      id: 48,
      bookName: "A Farewell to Arms",
      authorName: "Ernest Hemingway"
    },
    {
      id: 49,
      bookName: "Lord of the Flies",
      authorName: "William Golding"
    },
    {
      id: 50,
      bookName: "The Little Prince",
      authorName: "Antoine de Saint-Exupéry"
    },
    {
      id: 51,
      bookName: "Slaughterhouse-Five",
      authorName: "Kurt Vonnegut"
    },
    {
      id: 52,
      bookName: "The Fountainhead",
      authorName: "Ayn Rand"
    },
    {
      id: 53,
      bookName: "The Bell Jar",
      authorName: "Sylvia Plath"
    },
    {
      id: 54,
      bookName: "A Clockwork Orange",
      authorName: "Anthony Burgess"
    },
    {
      id: 55,
      bookName: "Frankenstein",
      authorName: "Mary Shelley"
    },
    {
      id: 56,
      bookName: "The Stranger",
      authorName: "Albert Camus"
    },
    {
      id: 57,
      bookName: "Of Mice and Men",
      authorName: "John Steinbeck"
    },
    {
      id: 58,
      bookName: "The Hobbit",
      authorName: "J.R.R. Tolkien"
    },
    {
      id: 59,
      bookName: "Heart of Darkness",
      authorName: "Joseph Conrad"
    },
    {
      id: 60,
      bookName: "The Metamorphosis",
      authorName: "Franz Kafka"
    },
    {
      id: 61,
      bookName: "The Adventures of Tom Sawyer",
      authorName: "Mark Twain"
    },
    {
      id: 62,
      bookName: "The Hound of the Baskervilles",
      authorName: "Arthur Conan Doyle"
    },
    {
      id: 63,
      bookName: "The Wind in the Willows",
      authorName: "Kenneth Grahame"
    },
    {
      id: 64,
      bookName: "Tess of the d'Urbervilles",
      authorName: "Thomas Hardy"
    },
    {
      id: 65,
      bookName: "The Call of the Wild",
      authorName: "Jack London"
    },
    {
      id: 66,
      bookName: "The Raven",
      authorName: "Edgar Allan Poe"
    },
    {
      id: 67,
      bookName: "The Odyssey",
      authorName: "Homer"
    },
    {
      id: 68,
      bookName: "Gone with the Wind",
      authorName: "Margaret Mitchell"
    },
    {
      id: 69,
      bookName: "Walden",
      authorName: "Henry David Thoreau"
    },
    {
      id: 70,
      bookName: "The Adventures of Sherlock Holmes",
      authorName: "Arthur Conan Doyle"
    },
    {
      id: 71,
      bookName: "Middlemarch",
      authorName: "George Eliot"
    },
    {
      id: 72,
      bookName: "The Count of Monte Cristo",
      authorName: "Alexandre Dumas"
    },
    {
      id: 73,
      bookName: "The War of the Worlds",
      authorName: "H.G. Wells"
    },
    {
      id: 74,
      bookName: "Treasure Island",
      authorName: "Robert Louis Stevenson"
    },
    {
      id: 75,
      bookName: "Siddhartha",
      authorName: "Hermann Hesse"
    },
    {
      id: 76,
      bookName: "The Scarlet Letter",
      authorName: "Nathaniel Hawthorne"
    },
    {
      id: 77,
      bookName: "The Secret Garden",
      authorName: "Frances Hodgson Burnett"
    },
    {
      id: 78,
      bookName: "Fahrenheit 451",
      authorName: "Ray Bradbury"
    },
    {
      id: 79,
      bookName: "The Picture of Dorian Gray",
      authorName: "Oscar Wilde"
    },
    {
      id: 80,
      bookName: "The Canterbury Tales",
      authorName: "Geoffrey Chaucer"
    },
    {
      id: 81,
      bookName: "The Divine Comedy",
      authorName: "Dante Alighieri"
    },
    {
      id: 82,
      bookName: "A Christmas Carol",
      authorName: "Charles Dickens"
    },
    {
      id: 83,
      bookName: "Mansfield Park",
      authorName: "Jane Austen"
    },
    {
      id: 84,
      bookName: "The Adventures of Oliver Twist",
      authorName: "Charles Dickens"
    },
    {
      id: 85,
      bookName: "Emma",
      authorName: "Jane Austen"
    },
    {
      id: 86,
      bookName: "Gulliver's Travels",
      authorName: "Jonathan Swift"
    },
    {
      id: 87,
      bookName: "Sense and Sensibility",
      authorName: "Jane Austen"
    },
    {
      id: 88,
      bookName: "The Alchemist",
      authorName: "Paulo Coelho"
    },
    {
      id: 89,
      bookName: "The Jungle Book",
      authorName: "Rudyard Kipling"
    },
    {
      id: 90,
      bookName: "Lord Jim",
      authorName: "Joseph Conrad"
    }
  ];
  
  

export {classicBooks};