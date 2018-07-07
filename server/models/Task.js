module.exports = function (sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		taskName: {
			type: DataTypes.STRING,
			notNull: true
		},

		description: {
			type: DataTypes.STRING,
			notNull: true
		},

		completed: {
			type: DataTypes.BOOLEAN
		}
	}, {
		tableName: 'tasks',
		timestamps: false,
	});

	Task.associate = function (models) {
		models.Task.belongsTo(models.Department, {
			foreignKey: 'department_id'
		});

		models.Task.belongsTo(models.User, {
			foreignKey: 'assigned_user'
		});
	}



	return Task;

};