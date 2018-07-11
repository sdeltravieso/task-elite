module.exports = function (sequelize, DataTypes) {
	var Project = sequelize.define("Project", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		project_name: DataTypes.STRING,
		description: {
			type: DataTypes.STRING,
			notNull: true
		},
		owner_id: DataTypes.INTEGER,
	}, {
		tableName: 'projects',
		timestamps: false,
	});

	// Project.associate = function (models) {

	// 	models.Project.hasMany(models.Department, {
	// 		foreignKey: 'id'
	// 	});

	// }

	return Project;

};