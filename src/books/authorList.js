const authors = [
    {
      "id": 1,
      "name": "Jane Austen",
      "description": "Jane Austen was an English novelist known for her classic works such as 'Pride and Prejudice.' Her writing style often depicted social commentary and the lives of women in the 19th century."
    },
    {
      "id": 2,
      "name": "Harper Lee",
      "description": "Harper Lee was an American author best known for her novel 'To Kill a Mockingbird.' Her book explores themes of racial injustice and has become a significant piece of American literature."
    },
    {
      "id": 3,
      "name": "George Orwell",
      "description": "George Orwell, whose real name was Eric Arthur Blair, was an English writer known for his dystopian novel '1984.' His works often examined political and societal issues, emphasizing the importance of individual freedom."
    },
    {
      "id": 4,
      "name": "F. Scott Fitzgerald",
      "description": "F. Scott Fitzgerald was an American author famous for his novel 'The Great Gatsby.' His writing captured the essence of the Roaring Twenties and explored themes of wealth, love, and the American Dream."
    },
    {
      "id": 5,
      "name": "Herman Melville",
      "description": "Herman Melville was an American writer renowned for his novel 'Moby-Dick.' His work delves into philosophical and symbolic themes, exploring the human condition and the pursuit of an enigmatic white whale."
    },
    {
      "id": 6,
      "name": "Charlotte Bronte",
      "description": "Charlotte Bronte was an English novelist and poet, best known for her novel 'Jane Eyre.' Her writing often portrayed strong female characters and tackled social issues of class, gender, and morality."
    },
    {
        "id": 7,
        "name": "J.D. Salinger",
        "description": "J.D. Salinger was an American writer known for his novel 'The Catcher in the Rye.' The book explores themes of teenage angst, alienation, and the search for authenticity, making it a significant work in American literature."
      },
      {
        "id": 8,
        "name": "Emily Bronte",
        "description": "Emily Bronte was an English novelist and poet, best known for her novel 'Wuthering Heights.' Her writing depicted intense emotions, passionate love, and the dark side of human nature, leaving a lasting impact on readers."
      },
      {
        "id": 9,
        "name": "Homer",
        "description": "Homer is an ancient Greek poet traditionally attributed to the epic poems 'The Iliad' and 'The Odyssey.' These works have greatly influenced Western literature and explore themes of heroism, war, and the journey of Odysseus."
      },
      {
        "id": 10,
        "name": "Miguel de Cervantes",
        "description": "Miguel de Cervantes was a Spanish writer known for his novel 'Don Quixote.' The book is considered a masterpiece of Western literature and satirizes chivalric romances while exploring themes of idealism, reality, and madness."
      },
      {
        "id": 11,
        "name": "Leo Tolstoy",
        "description": "Leo Tolstoy was a Russian writer known for his epic novel 'War and Peace.' His work explores the impact of war on society, delves into the complexities of human nature, and provides profound insights into the human condition."
      },
      {
        "id": 12,
        "name": "Fyodor Dostoevsky",
        "description": "Fyodor Dostoevsky was a Russian novelist known for his masterpiece 'The Brothers Karamazov.' His works delve into complex psychological and philosophical themes, exploring the depths of human nature and morality."
      },
      {
        "id": 13,
        "name": "Fyodor Dostoevsky",
        "description": "Fyodor Dostoevsky was a Russian writer renowned for his novel 'Crime and Punishment.' The book explores the psychological struggles of its protagonist and delves into themes of guilt, redemption, and the human psyche."
      },
      {
        "id": 14,
        "name": "Mark Twain",
        "description": "Mark Twain, whose real name was Samuel Clemens, was an American writer known for 'The Adventures of Huckleberry Finn.' His work captured the spirit of American life and often tackled social issues with humor and satire."
      },
      {
        "id": 15,
        "name": "Lewis Carroll",
        "description": "Lewis Carroll was an English author best known for 'Alice's Adventures in Wonderland.' His imaginative storytelling and whimsical characters have made his works beloved classics of children's literature."
      },
      {
        "id": 16,
        "name": "Alexandre Dumas",
        "description": "Alexandre Dumas was a French writer known for his novel 'The Count of Monte Cristo.' His adventure-filled stories and complex characters have made his works enduring classics in the literary world."
      },
      {
        "id": 17,
        "name": "Jonathan Swift",
        "description": "Jonathan Swift was an Anglo-Irish writer known for 'Gulliver's Travels.' His satirical novel critiques society and politics through the fantastical journeys of Lemuel Gulliver."
      },
      {
        "id": 18,
        "name": "Mary Shelley",
        "description": "Mary Shelley was an English author best known for her novel 'Frankenstein.' Her work explores themes of science, creation, and the moral responsibilities of individuals, leaving a lasting impact on Gothic literature."
      },
      {
        "id": 19,
        "name": "Joseph Heller",
        "description": "Joseph Heller was an American author famous for his novel 'Catch-22.' His satirical anti-war book exposes the absurdity of bureaucracy and the effects of war on the human psyche."
      },
      {
        "id": 20,
        "name": "Oscar Wilde",
        "description": "Oscar Wilde was an Irish playwright and novelist known for 'The Picture of Dorian Gray.' His works often featured wit, social criticism, and explored themes of aestheticism and morality."
      },
      {
        "id": 21,
        "name": "J.R.R. Tolkien",
        "description": "J.R.R. Tolkien was an English writer famous for 'The Hobbit' and 'The Lord of the Rings' trilogy. His epic fantasy works have captivated readers with their intricate world-building, rich mythology, and memorable characters."
      },
      {
        "id": 22,
        "name": "Leo Tolstoy",
        "description": "Leo Tolstoy was a Russian writer known for his novels, including 'Anna Karenina.' His works delve into human relationships, social issues, and philosophical themes, making him one of the greatest authors in world literature."
      },
      {
        "id": 23,
        "name": "Victor Hugo",
        "description": "Victor Hugo was a French writer renowned for 'Les Misérables.' His epic historical novel explores themes of justice, love, and redemption, leaving a profound impact on literature and inspiring numerous adaptations."
      },
      {
        "id": 24,
        "name": "Nathaniel Hawthorne",
        "description": "Nathaniel Hawthorne was an American novelist known for 'The Scarlet Letter.' His work delves into the complexities of sin, guilt, and societal expectations, leaving a significant mark on American literature."
      },
      {
        "id": 25,
        "name": "Gabriel Garcia Marquez",
        "description": "Gabriel Garcia Marquez was a Colombian author renowned for 'One Hundred Years of Solitude.' His magical realism style blended reality and fantasy, creating a unique narrative that captivated readers worldwide."
      },
      {
        "id": 26,
        "name": "Charles Dickens",
        "description": "Charles Dickens was an English writer known for his numerous novels, including 'A Tale of Two Cities.' His works depicted social injustices, explored the human condition, and remain influential in both literature and society."
      },
      {
        "id": 27,
        "name": "J.R.R. Tolkien",
        "description": "J.R.R. Tolkien was an English writer famous for 'The Lord of the Rings' trilogy. His epic fantasy works have captivated readers with their intricate world-building, rich mythology, and memorable characters."
      },
      {
        "id": 28,
        "name": "John Steinbeck",
        "description": "John Steinbeck was an American author known for 'The Grapes of Wrath.' His works often portrayed the struggles of the working class and tackled social issues, earning him critical acclaim and literary accolades."
      },
      {
        "id": 29,
        "name": "Dante Alighieri",
        "description": "Dante Alighieri was an Italian poet known for 'The Divine Comedy.' His epic poem takes the reader on a journey through Hell, Purgatory, and Heaven, exploring themes of sin, redemption, and the nature of God."
      },
      {
        "id": 30,
        "name": "Herman Melville",
        "description": "Herman Melville was an American writer known for his novel 'Moby-Dick.' His work delves into themes of obsession, morality, and the human struggle against nature, solidifying his place in the literary canon."
      },
      {
        "id": 31,
        "name": "Geoffrey Chaucer",
        "description": "Geoffrey Chaucer was an English poet renowned for 'The Canterbury Tales.' His collection of stories provides a vivid portrait of medieval life, blending humor, satire, and insightful commentary on society."
      },
      {
        "id": 32,
        "name": "Homer",
        "description": "Homer is an ancient Greek poet traditionally attributed to the epic poems 'The Iliad' and 'The Odyssey.' These works have greatly influenced Western literature and explore themes of heroism, war, and the journey of Odysseus."
      },
      {
        "id": 33,
        "name": "William Faulkner",
        "description": "William Faulkner was an American writer known for 'The Sound and the Fury.' His works employed innovative narrative techniques and explored themes of Southern culture, family, and the human condition."
      },
      {
        "id": 34,
        "name": "Bram Stoker",
        "description": "Bram Stoker was an Irish author best known for his Gothic novel 'Dracula.' His vampire tale has become an iconic piece of horror literature and has inspired countless adaptations in various media."
      },
      {
        "id": 35,
        "name": "Arthur Conan Doyle",
        "description": "Arthur Conan Doyle was a British writer known for creating the famous detective character Sherlock Holmes. His 'Adventures of Sherlock Holmes' series revolutionized detective fiction and remains popular to this day."
      },
      {
        "id": 36,
        "name": "Alexandre Dumas",
        "description": "Alexandre Dumas was a French writer known for 'The Three Musketeers.' His historical adventure novels are renowned for their swashbuckling heroes, intricate plots, and memorable characters."
      },
      {
        "id": 37,
        "name": "Ernest Hemingway",
        "description": "Ernest Hemingway was an American author known for 'The Sun Also Rises' and 'The Old Man and the Sea.' His concise yet powerful writing style captured the essence of the Lost Generation and made a significant impact on modern literature."
      },
      {
        "id": 38,
        "name": "Rudyard Kipling",
        "description": "Rudyard Kipling was a British author known for 'The Jungle Book.' His works often explored themes of colonialism, adventure, and the clash of cultures, leaving a lasting influence on literature for both adults and children."
      },
      {
        "id": 39,
        "name": "Charles Dickens",
        "description": "Charles Dickens was an English writer known for his numerous novels, including 'A Christmas Carol.' His works depicted social injustices, explored the human condition, and remain influential in both literature and society."
      },
      {
        "id": 40,
        "name": "Jane Austen",
        "description": "Jane Austen was an English novelist known for 'Pride and Prejudice' and other works. Her novels provide a keen social commentary, focusing on themes of love, marriage, and the position of women in society."
      },
      {
        "id": 41,
        "name": "Louisa May Alcott",
        "description": "Louisa May Alcott was an American author known for 'Little Women.' Her novel, based on her own experiences, explores themes of sisterhood, love, and the pursuit of personal and artistic fulfillment."
      },
      {
        "id": 42,
        "name": "Charles Dickens",
        "description": "Charles Dickens was an English writer known for his numerous novels, including 'Great Expectations.' His works depicted social injustices, explored the human condition, and remain influential in both literature and society."
      },
      {
        "id": 43,
        "name": "Jane Austen",
        "description": "Jane Austen was an English novelist known for 'Sense and Sensibility' and other works. Her novels provide a keen social commentary, focusing on themes of love, marriage, and the position of women in society."
      },
      {
        "id": 44,
        "name": "H.G. Wells",
        "description": "H.G. Wells was an English writer known for 'The War of the Worlds.' His science fiction novels, including 'The Time Machine' and 'The Invisible Man,' established him as a pioneer of the genre."
      },
      {
        "id": 45,
        "name": "Ernest Hemingway",
        "description": "Ernest Hemingway was an American author known for 'The Old Man and the Sea' and other works. His concise yet powerful writing style captured the essence of the Lost Generation and made a significant impact on modern literature."
      },
      {
        "id": 46,
        "name": "Mark Twain",
        "description": "Mark Twain, whose real name was Samuel Clemens, was an American writer known for 'The Adventures of Tom Sawyer.' His work captured the spirit of American life and often tackled social issues with humor and satire."
      },
      {
        "id": 47,
        "name": "Jules Verne",
        "description": "Jules Verne was a French writer known for 'Twenty Thousand Leagues Under the Sea' and other science fiction adventure novels. His imaginative stories anticipated technological advancements and inspired generations of readers."
      },
      {
        "id": 48,
        "name": "Homer",
        "description": "Homer is an ancient Greek poet traditionally attributed to the epic poems 'The Iliad' and 'The Odyssey.' These works have greatly influenced Western literature and explore themes of heroism, war, and the journey of Odysseus."
      },
      {
        "id": 49,
        "name": "Aldous Huxley",
        "description": "Aldous Huxley was a British writer known for 'Brave New World.' His dystopian novel depicts a future society governed by technology and explores themes of individuality, freedom, and the dangers of a utopian vision."
      },
      {
        "id": 50,
        "name": "F. Scott Fitzgerald",
        "description": "F. Scott Fitzgerald was an American writer known for 'The Great Gatsby.' His novel portrays the decadence and disillusionment of the Jazz Age, reflecting on themes of wealth, love, and the American Dream."
      },
      {
        "id": 51,
        "name": "Kurt Vonnegut",
        "description": "Kurt Vonnegut was an American writer known for 'Slaughterhouse-Five.' His novel, influenced by his experiences in World War II, combines science fiction elements with dark humor and social commentary."
      },
      {
        "id": 52,
        "name": "Ayn Rand",
        "description": "Ayn Rand was a Russian-American writer known for 'The Fountainhead.' Her philosophy of Objectivism, advocating rational individualism and laissez-faire capitalism, heavily influenced her novels."
      },
      {
        "id": 53,
        "name": "Sylvia Plath",
        "description": "Sylvia Plath was an American poet and novelist known for 'The Bell Jar.' Her works explore themes of mental illness, identity, and gender roles, and have made a significant impact on feminist literature."
      },
      {
        "id": 54,
        "name": "Anthony Burgess",
        "description": "Anthony Burgess was a British writer known for 'A Clockwork Orange.' His dystopian novel explores the nature of free will, morality, and the power of state control, and has become a cultural phenomenon."
      },
      {
        "id": 55,
        "name": "Mary Shelley",
        "description": "Mary Shelley was an English writer known for 'Frankenstein.' Her novel, often considered a masterpiece of Gothic literature, examines themes of creation, ambition, and the consequences of playing God."
      },
      {
        "id": 56,
        "name": "Albert Camus",
        "description": "Albert Camus was a French philosopher and writer known for 'The Stranger.' His works, characterized by existentialist themes and a philosophical exploration of the absurd, earned him the Nobel Prize in Literature."
      },
      {
        "id": 57,
        "name": "John Steinbeck",
        "description": "John Steinbeck was an American author known for 'Of Mice and Men.' His novels, often set against the backdrop of the Great Depression, capture the struggles and resilience of the working class."
      },
      {
        "id": 58,
        "name": "J.R.R. Tolkien",
        "description": "J.R.R. Tolkien was an English writer known for 'The Hobbit' and 'The Lord of the Rings' trilogy. His epic fantasy works created a richly detailed world of Middle-earth and have become enduring classics."
      },
      {
        "id": 59,
        "name": "Joseph Conrad",
        "description": "Joseph Conrad was a Polish-British writer known for 'Heart of Darkness.' His novella explores the dark side of human nature and the effects of European colonialism in Africa, reflecting on themes of imperialism and moral ambiguity."
      },
      {
        "id": 60,
        "name": "Franz Kafka",
        "description": "Franz Kafka was a German-language writer known for 'The Metamorphosis.' His works, characterized by surreal and absurd elements, explore themes of alienation, guilt, and the complexities of bureaucracy."
      },
      {
        "id": 61,
        "name": "Mark Twain",
        "description": "Mark Twain, whose real name was Samuel Clemens, was an American writer known for 'The Adventures of Tom Sawyer.' His work captured the spirit of American life and often tackled social issues with humor and satire."
      },
      {
        "id": 62,
        "name": "Arthur Conan Doyle",
        "description": "Arthur Conan Doyle was a British writer known for 'The Hound of the Baskervilles' and the Sherlock Holmes detective stories. His iconic character, Sherlock Holmes, has become one of the most famous fictional detectives in literature."
      },
      {
        "id": 63,
        "name": "Kenneth Grahame",
        "description": "Kenneth Grahame was a British writer known for 'The Wind in the Willows.' His children's novel, filled with anthropomorphic animal characters, celebrates the joys of friendship, nature, and the English countryside."
      },
      {
        "id": 64,
        "name": "Thomas Hardy",
        "description": "Thomas Hardy was an English writer known for 'Tess of the d'Urbervilles' and other novels set in the fictional region of Wessex. His works explore themes of fate, class, and the hardships faced by women in Victorian society."
      },
      {
        "id": 65,
        "name": "Jack London",
        "description": "Jack London was an American writer known for 'The Call of the Wild' and other adventure novels set in the Klondike Gold Rush. His works often depict the struggle for survival in harsh environments and examine the relationship between humans and animals."
      },
      {
        "id": 66,
        "name": "Edgar Allan Poe",
        "description": "Edgar Allan Poe was an American writer known for his macabre and Gothic tales, including 'The Raven' and 'The Fall of the House of Usher.' His works delve into themes of madness, death, and the dark corners of the human psyche."
      },
      {
        "id": 67,
        "name": "Homer",
        "description": "Homer is an ancient Greek poet traditionally attributed to the epic poems 'The Iliad' and 'The Odyssey.' These works have greatly influenced Western literature and explore themes of heroism, war, and the journey of Odysseus."
      },
      {
        "id": 68,
        "name": "Margaret Mitchell",
        "description": "Margaret Mitchell was an American writer known for 'Gone with the Wind.' Her epic novel, set during the American Civil War and Reconstruction era, portrays the complexities of Southern society and the resilience of its characters."
      },
      {
        "id": 69,
        "name": "Henry David Thoreau",
        "description": "Henry David Thoreau was an American writer known for 'Walden.' His transcendentalist work reflects on the beauty of nature, simple living, and the importance of self-reliance and individual freedom."
      },
      {
        "id": 70,
        "name": "Arthur Conan Doyle",
        "description": "Arthur Conan Doyle was a British writer known for 'The Adventures of Sherlock Holmes' and other detective stories featuring the brilliant detective Sherlock Holmes. His works have had a lasting impact on the detective fiction genre."
      },
      {
        "id": 71,
        "name": "George Eliot",
        "description": "George Eliot was an English writer known for 'Middlemarch.' Her novels, characterized by their realism and psychological depth, explore social and moral issues, and challenge the traditional gender roles of Victorian society."
      },
      {
        "id": 72,
        "name": "Alexandre Dumas",
        "description": "Alexandre Dumas was a French writer known for his historical novels, including 'The Count of Monte Cristo' and 'The Three Musketeers.' His works are known for their adventure, romance, and vivid characters."
      },
      {
        "id": 73,
        "name": "H.G. Wells",
        "description": "H.G. Wells was a British writer known for his science fiction novels, including 'The War of the Worlds' and 'The Time Machine.' He is considered one of the pioneers of science fiction and his works explore themes of technology, society, and the human condition."
      },
      {
        "id": 74,
        "name": "Robert Louis Stevenson",
        "description": "Robert Louis Stevenson was a Scottish writer known for his adventure novels, including 'Treasure Island' and 'The Strange Case of Dr. Jekyll and Mr. Hyde.' His works often explore themes of duality, morality, and the human psyche."
      },
      {
        "id": 75,
        "name": "Hermann Hesse",
        "description": "Hermann Hesse was a German-Swiss writer known for his novels, including 'Siddhartha' and 'Steppenwolf.' His works often delve into themes of spirituality, self-discovery, and the search for meaning in life."
      },
      {
        "id": 76,
        "name": "Nathaniel Hawthorne",
        "description": "Nathaniel Hawthorne was an American writer known for his novels and short stories, including 'The Scarlet Letter' and 'The House of the Seven Gables.' His works often explore moral and psychological themes, with a focus on the effects of guilt and sin on the human soul."
      },
      {
        "id": 77,
        "name": "Frances Hodgson Burnett",
        "description": "Frances Hodgson Burnett was an English-American writer known for her children's novels, including 'The Secret Garden' and 'A Little Princess.' Her works often portray themes of resilience, imagination, and the power of nature."
      },
      {
        "id": 78,
        "name": "Ray Bradbury",
        "description": "Ray Bradbury was an American writer known for his science fiction and fantasy works, including 'Fahrenheit 451' and 'The Martian Chronicles.' His works often explore themes of censorship, technology, and the human condition."
      },
      {
        "id": 79,
        "name": "Oscar Wilde",
        "description": "Oscar Wilde was an Irish writer known for his wit, plays, and novel, 'The Picture of Dorian Gray.' He is celebrated for his sharp social commentary, humor, and exploration of aestheticism."
      },
      {
        "id": 80,
        "name": "Geoffrey Chaucer",
        "description": "Geoffrey Chaucer was an English poet and writer known for his collection of stories, 'The Canterbury Tales.' His works are considered seminal in English literature and provide a vivid portrayal of medieval life and society."
      },
      {
        "id": 81,
        "name": "Dante Alighieri",
        "description": "Dante Alighieri was an Italian poet and writer known for his epic poem, 'The Divine Comedy.' His work is considered a masterpiece of world literature and explores themes of sin, redemption, and the journey of the soul."
      },
      {
        "id": 82,
        "name": "Charles Dickens",
        "description": "Charles Dickens was an English writer and social critic known for his novels, including 'A Christmas Carol,' 'Oliver Twist,' and 'Great Expectations.' His works often depict the social injustices of Victorian England and highlight the struggles of the poor and disadvantaged."
      },
      {
        "id": 83,
        "name": "Jane Austen",
        "description": "Jane Austen was an English writer known for her novels, including 'Pride and Prejudice,' 'Emma,' and 'Sense and Sensibility.' Her works are renowned for their social commentary, wit, and exploration of the lives and relationships of the English gentry."
      },
      {
        "id": 84,
        "name": "Jonathan Swift",
        "description": "Jonathan Swift was an Anglo-Irish writer and satirist known for his novel, 'Gulliver's Travels.' His works often employ satire and irony to critique society, politics, and human nature."
      },
      {
        "id": 85,
        "name": "Paulo Coelho",
        "description": "Paulo Coelho is a Brazilian writer known for his novels, including 'The Alchemist' and 'Brida.' His works often explore themes of spirituality, self-discovery, and the pursuit of one's personal legend."
      },
      {
        "id": 86,
        "name": "Rudyard Kipling",
        "description": "Rudyard Kipling was an English writer known for his short stories and poems, including 'The Jungle Book' and 'Kim.' His works often reflect his experiences in British India and explore themes of colonialism, identity, and the relationship between humans and animals."
      },
      {
        "id": 87,
        "name": "Joseph Conrad",
        "description": "Joseph Conrad was a Polish-British writer known for his novels, including 'Heart of Darkness' and 'Lord Jim.' His works often explore themes of imperialism, morality, and the psychological complexities of human nature."
      },
      {
        "id": 88,
        "name": "William Golding",
        "description": "William Golding was an English novelist and playwright, best known for his novel 'Lord of the Flies.' His works often explore the darker aspects of human nature and the inherent struggle between civilization and savagery."
      },
      {
        "id": 89,
        "name": "Antoine de Saint-Exupéry",
        "description": "Antoine de Saint-Exupéry was a French writer and aviator, known for his novella 'The Little Prince.' His works often touch on themes of innocence, love, friendship, and the complexities of adult life."
      }
      


  ]
  
  export default authors;