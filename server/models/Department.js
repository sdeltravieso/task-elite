module.exports = function (sequelize, DataTypes) {
	var Department = sequelize.define("Department", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		departmentName: DataTypes.STRING,
		description: {
			type: DataTypes.STRING,
			notNull: true
		}
	}, {
		tableName: 'departments',
		timestamps: false,
	});

	// Department.associate = function (models) {
	// 	models.Department.belongsTo(models.Project, {
	// 		foreignKey: 'project_id'
	// 		// foreignKey: 'id'
	// 	});
		
	// 	models.Department.hasMany(models.Task, {
	// 		foreignKey: 'id'
	// 	});

	// }

	return Department;

};