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