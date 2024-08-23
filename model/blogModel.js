const makeBlogTable = (sequelize, DataTypes) => {
  const blog = sequelize.define("blog", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
  return blog;
};

module.exports = makeBlogTable;
