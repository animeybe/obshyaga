module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        author_t: DataTypes.STRING,
        text: DataTypes.TEXT,
        dorm: DataTypes.STRING
    })

    return Post
}
