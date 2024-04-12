use travelBlog
db.users.createIndex({ "username": 1 }, { unique: true })
db.entries.createIndex({ "title": 1 }, { unique: true })

db.users.insert([
    {
        name: "Alice Johnson",
        username: "traveler123",
        email: "alice.johnson@example.com",
        password: "securepassword123"
    },
    {
        name: "Bob Smith",
        username: "commenter456",
        email: "bob.smith@example.com",
        password: "password456"
    },
    {
        name: "Charlie Brown",
        username: "charliebrown1",
        email: "charlie.brown@example.com",
        password: "brownie123"
    },
    {
        name: "David Lee",
        username: "davidlee007",
        email: "david.lee@example.com",
        password: "secretagent"
    },
    {
        name: "Eve Wilson",
        username: "wanderlust_eve",
        email: "eve.wilson@example.com",
        password: "adventurelover"
    }
])

db.entries.insert([
    {
        title: "Wanderlust Chronicles",
        description: "Embark on a journey around the world through the eyes of passionate travelers.",
        creationDate: new Date("2024-02-04"),
        editDates: [
            new Date("2024-05-02"),
            new Date("2024-01-30")
        ],
        impressionCount: 1523,
        contents: [
            {
                type: "text",
                content: "Traveling isn't just about visiting new places; it's about immersing yourself in different cultures, flavors, and landscapes. Join us as we explore the wonders of the world."
            }
        ],
        commentsAllowed: true,
        blogCategory: "Adventure",
        author_un: "traveler123",
        comments: [
            {
                commenter_un: "commenter456",
                content: "Absolutely agree with you, Alice! Traveling opens up a whole new world of experiences and perspectives."
            }
        ]
    },
    {
        title: "Discovering the Unknown",
        description: "Embark on an adventure into uncharted territories and hidden gems.",
        creationDate: new Date("2024-03-10"),
        editDates: [
            new Date("2024-03-15"),
            new Date("2024-03-25")
        ],
        impressionCount: 2846,
        contents: [
            {
                type: "text",
                content: "There's something magical about exploring places off the beaten path. Join us as we uncover the secrets of the world's most fascinating destinations."
            }
        ],
        commentsAllowed: true,
        blogCategory: "Exploration",
        author_un: "commenter456",
        comments: [
            {
                commenter_un: "davidlee007",
                content: "I love venturing into lesser-known destinations. It's where you often find the most unforgettable experiences."
            },
            {
                commenter_un: "wanderlust_eve",
                content: "Exploring the unknown ignites a sense of curiosity and wonder. It's like stepping into a story waiting to unfold."
            }
        ]
    },
    {
        title: "Cuisine & Culture Expedition",
        description: "Embark on a gastronomic journey around the globe and delve into the heart of diverse culinary traditions.",
        creationDate: new Date("2024-01-10"),
        editDates: [
            new Date("2024-01-20"),
            new Date("2024-02-05")
        ],
        impressionCount: 3765,
        contents: [
            {
                type: "text",
                content: "Food is a universal language that transcends borders. Join us as we explore the intersection of cuisine and culture in our travels."
            }
        ],
        commentsAllowed: true,
        blogCategory: "Culinary",
        author_un: "charliebrown1",
        comments: [
            {
                commenter_un: "traveler123",
                content: "Sampling local cuisines is one of the highlights of traveling for me. It's like taking a culinary tour of the world."
            }
        ]
    },
    {
        title: "Wanderer's Sanctuary",
        description: "A sanctuary for travelers seeking inspiration, tips, and stories from the road.",
        creationDate: new Date("2024-04-01"),
        editDates: [
            new Date("2024-04-05"),
            new Date("2024-04-08")
        ],
        impressionCount: 932,
        contents: [
            {
                type: "text",
                content: "Amidst the chaos of the world, travel offers moments of serenity and discovery. Join us as we embark on journeys that nourish the soul and expand the mind."
            }
        ],
        commentsAllowed: true,
        blogCategory: "Inspiration",
        author_un: "wanderlust_eve",
        comments: []
    },
    {
        title: "Tales from the Trail",
        description: "Journey with us as we share stories from the road, from breathtaking landscapes to chance encounters.",
        creationDate: new Date("2024-03-10"),
        editDates: [
            new Date("2024-03-15"),
            new Date("2024-03-25")
        ],
        impressionCount: 2156,
        contents: [
            {
                type: "text",
                content: "Every journey leaves behind a trail of stories waiting to be told. Join us as we weave tales of adventure, discovery, and connection."
            }
        ],
        commentsAllowed: false,
        blogCategory: "Narratives",
        author_un: "davidlee007",
        comments: []
    }
])
