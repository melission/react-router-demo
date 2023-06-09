const productData = [
    {
        id: 1,
        name: "name one",
        description: "desc one",
        status: "Available",
    },
    {
        id: 2,
        name: "name two",
        description: "desc two",
        status: "Not available",
    },
    {
        id: 3,
        name: "name three",
        description: "desc three",
        status: "Not available",
    },
    {
        id: 4,
        name: "a story about a fallen star and a magical world generated by chatGPD",
        description: `Once upon a time, there was a little girl named Mia who loved looking up at the night sky. Every night before bed, she would stare out her window and make a wish on a falling star.

        One night, Mia saw something extraordinary. A falling star streaked across the sky and landed in her backyard. She couldn't believe her eyes and ran outside to investigate. There, she found a magical crystal that glowed in the dark. She picked it up and held it tight in her hand, feeling its warmth.
        
        As she closed her eyes and made a wish, she was suddenly transported to a magical world. There were talking animals, rainbow-colored trees, and glowing flowers everywhere. Mia ran through the fields, feeling the wind in her hair and the magic in her heart.
        
        She explored the magical world for what felt like hours, meeting new creatures and discovering new wonders. When she was ready to return home, she closed her eyes and made another wish. The crystal glowed brightly, and she was back in her backyard, holding the crystal in her hand.
        
        Mia knew that the magical world was real and that she could return anytime she wanted with the help of the crystal. From that day on, she made sure to wish on every falling star she saw, hoping to return to the magical world and explore its wonders once again.
        
        And so, Mia's love for the night sky grew stronger, and she knew that every falling star was a sign of hope and magic.`,

        status: "Available",
    },
    {
        id: 5,
        name: "a story about depression and overcoming it written by chatGPT",
        description: `Jasmine had always been a happy-go-lucky person, but that all changed when she was betrayed by someone she trusted. The betrayal left her feeling lost, alone, and depressed. To make matters worse, she started experiencing flashbacks of a traumatic event from her past that she had long suppressed.

        Jasmine tried to bury her feelings and pretend like everything was fine, but the pain only grew stronger. Her relationships suffered, and she withdrew from her friends and family. It wasn't until she hit rock bottom that she realized she needed help.
        
        She reached out to a therapist who specialized in treating depression and PTSD. At first, it was hard for Jasmine to open up about what had happened, but over time, she learned to trust her therapist and the healing process began.
        
        Through therapy, Jasmine learned to accept the betrayal and the pain that came with it. She realized that it wasn't her fault and that she couldn't change what had happened. Instead, she focused on what she could control, which was how she responded to the situation.
        
        She started to practice self-care, doing things she enjoyed like painting, writing, and taking walks in nature. She also started to confront the traumatic event from her past, which was a painful but necessary step in her healing journey.
        
        Jasmine also learned to reframe her negative thoughts and beliefs about herself. She realized that the betrayal and trauma she had experienced didn't define her as a person, and that she was strong and resilient for making it through it all.
        
        It wasn't an easy journey, but over time, Jasmine started to feel like herself again. She reconnected with her friends and family and started to rebuild her relationships. She also started to feel a sense of purpose and meaning in her life, volunteering at a local shelter and helping others who had been through similar experiences.
        
        The journey wasn't without its setbacks, but Jasmine learned to accept them as part of the process. She knew that healing wasn't a linear path and that there would be ups and downs along the way.
        
        Through her journey, Jasmine learned that overcoming depression and PTSD wasn't about erasing the pain, but about learning to live with it and finding meaning in it. She learned to accept herself, flaws and all, and to see her experiences as a source of strength rather than weakness.
        
        In the end, Jasmine emerged from her healing journey a different person. She was stronger, more resilient, and more compassionate towards herself and others. And although the pain would never fully go away, she knew that she had the tools and support to continue living a meaningful and fulfilling life.`,
        status: "Available",
    }, 
    {
        id: 6, 
        name: "GRID vs Flex by GPT",
        description: `

        Both Grid and Flexbox are CSS layout systems that help developers create more complex and dynamic layouts. However, they differ in terms of their approach and functionality.
        
        CSS Grid is a two-dimensional layout system that allows you to create complex layouts by defining rows and columns. It enables you to create a grid of rows and columns, and then place elements into those rows and columns using the grid-template-rows, grid-template-columns, and grid-template-areas properties. CSS Grid provides more control over the placement and sizing of elements than Flexbox, and it is particularly useful for creating complex grid layouts with multiple columns and rows.
        
        Flexbox, on the other hand, is a one-dimensional layout system that is designed to help you create flexible and responsive layouts. It enables you to define a flexible container and align and distribute its child elements along a single axis. Flexbox is useful for creating layouts where elements need to be organized in a row or a column and where you need to control the alignment, distribution, and order of those elements.
        
        In summary, Grid is used for two-dimensional layout while Flexbox is used for one-dimensional layout. Grid is ideal for complex layouts with multiple rows and columns, while Flexbox is great for creating simple, flexible layouts along a single axis.`,
        status: "Available",
    },
    {
        id: 7,
        name: "the actual vs shadow DOM by GPT",
        description: `The actual DOM (Document Object Model) represents the structure of an HTML document as a tree of nodes that can be accessed, manipulated, and updated using JavaScript. When you create an HTML element, the browser generates a corresponding node in the actual DOM. The actual DOM is what you see in the browser's developer tools when you inspect a web page.

        Shadow DOM, on the other hand, is a separate DOM tree that is attached to an HTML element, usually a custom web component. This separate DOM tree is hidden from the main document's DOM tree, which means that the styles and structure defined in the shadow DOM do not affect the main document's styles and structure. This encapsulation allows developers to create custom web components that behave like native HTML elements but with their own internal structure and styling.
        
        The key difference between shadow DOM and the actual DOM is that the actual DOM is a single, global tree of nodes that represents the entire document, while shadow DOM is a local tree of nodes that represents a specific part of the document. When you manipulate the actual DOM using JavaScript, any changes you make can affect the entire document, whereas when you manipulate the shadow DOM, the changes are isolated to the web component associated with the shadow DOM.
        
        In summary, the actual DOM represents the entire structure of the HTML document, while the shadow DOM is a separate tree of nodes that is attached to an HTML element and provides encapsulation and isolation for web components.`,
        status: "Available",
    },
    {
        id: 8,
        name: "Vertical alignment in CSS",
        description: `...`,
        status: "Available",
    },
    {
        id: 9,
        name: "9",
        description: "...",
        status: "Available",
    }
]

export default productData;