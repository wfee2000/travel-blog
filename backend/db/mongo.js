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
