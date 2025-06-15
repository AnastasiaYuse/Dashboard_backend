import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: 'To Do' | 'In Progress' | 'Done';
    public dueDate!: Date;
    public employeeId!: number;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('To Do', 'In Progress', 'Done'),
            allowNull: false,
            defaultValue: 'To Do',
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employees',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Task',
        tableName: 'tasks',
        timestamps: true,
    }
);

export default Task;




