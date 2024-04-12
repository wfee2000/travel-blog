db.users.find({ $where: "this.username == this.password"})
db.entries.find({ author_un: db.users.findOne({username: "traveler123"}).username})
db.entries.find({contents: {$elemMatch: { type : {$ne: "coordinates"}}}})
db.entries.aggregate([
    {
        $project: {
            title: "$title",
            numImages: {
                $size: {
                    $filter: {
                        input: "$contents",
                        as: "content",
                        cond: { $eq: ["$$content.type", "image"] }
                    }
                }
            }
        }
    },
    {
        $match: {
            numImages: { $gt: 1 }
        }
    }
])
db.entries.find({"contents.type": {$in: ["text", "image"]}})
db.entries.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "author_un",
            foreignField: "username",
            as: "author"
        }
    },
    {
        $match: {
            $or: [
                {
                    $and: [
                        { "author.name": "Alice Johnson" }, // es gibt keinen nachnamen
                        { "author.name": { $ne: "Guest" } }
                    ]
                },
                { "author.name": "admin" }
            ]
        }
    }
])
db.entries.aggregate([
    {
        $addFields: {
            titleInContents: {
                $gt: [
                    {
                        $size: {
                            $filter: {
                                input: "$contents",
                                cond: { $regexMatch: { input: "$$this.content", regex: "$title"} }
                            }
                        }
                    },
                    0
                ]
            }
        }
    },
    { $match: { titleInContents: true } }
])
db.users.find().sort({username: 1})
db.entries.find().sort({creationDate: -1}).limit(2)
db.entries.find().sort({creationDate: 1}).skip(1).limit(1)
db.entries.find({
    $and: [
        {creationDate: { $gt: ISODate("2024-03-31")}},
        {contents: {$elemMatch: {type: "link"}}}
    ]
})
db.entries.aggregate([
    {
        $match: { author_un: "davidlee007" }
    },
    {
        $project: {
            title: "$title",
            comments: "$comments",
            latestComments: {
                $slice: [ "$comments.content", -2 ]
            }
        }
    }
])
db.entries.aggregate([
    {
        $match: { author_un: "charliebrown1" }
    },
    {
        $project: { comments: { $slice: ["$comments.content", -2] } }
    }
])

// Updates
db.entries.updateOne(
    {
        _id: db.entries.aggregate({ $sort: { creationDate: -1 }}).toArray()[0]._id
    },
    { $set: { author_un: "charliebrown1" } }
)
db.entries.updateOne(
    {
        _id: db.entries.aggregate({ $sort: { creationDate: -1 }}).toArray()[0]._id
    },
    { $set: { hashtags: ["neu", "interessant"] } }
)
db.entries.updateMany(
    { blogCategory: "Adventure" },
    { $set: { blogCategory: "NotAdventure" } }
)
db.entries.updateOne(
    {
        title: "My title",
    },
    {
        $set: {
            title: "My title",
            description: "My description",
            author_un: "traveler123",
            blogCategory: "Survival",
            creationDate: new Date(),
            editDates: [
                new Date("2023-05-02"),
                new Date("2024-01-30")
            ],
            impressionCount: 0,
            contents: [
                {
                    type: "text",
                    content: "Eastern Europe beckons with its allure, promising a journey through time and nature's wonders. Explore Krakow's medieval streets, Romania's rustic villages, and Croatia's enchanting lakes. From Gothic castles to thermal baths, adventure awaits in every corner. Ready to uncover Eastern Europe's secrets?"
                }
            ],
            commentsAllowed: true,
            comments: []
        }
    },
    {
        upsert: true
    }
)
db.entries.deleteOne()
