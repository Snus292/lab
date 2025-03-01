// models/TaskFile.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TaskFile extends Model {
        static associate(models) {
            TaskFile.belongsTo(models.Task, {
                foreignKey: 'task_id',
                as: 'task'
            });
        }
    }

    TaskFile.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        file_path: {
            type: DataTypes.STRING(255),
            allowNull: false,
            comment: "Путь к файлу"
        },
        file_type: {
            type: DataTypes.STRING(50),
            allowNull: false,
            comment: "Тип файла (image, zip, text, etc.)"
        }
    }, {
        sequelize,
        modelName: 'TaskFile',
        tableName: 'task_files',
        timestamps: false
    });

    return TaskFile;
};
