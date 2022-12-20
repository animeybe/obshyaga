module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        author_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        text: DataTypes.TEXT,
        dorm: DataTypes.STRING
    })

    return Post
}
