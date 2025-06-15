import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Project extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public departmentId!: number;
    public employeeId!: number;
    public projectDeadline!: Date;
}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'departments',
                key: 'id',
            },
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employees',
                key: 'id',
            },
        },
        projectDeadline: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Project',
        tableName: 'projects',
        timestamps: true,
    }
);

export default Project; 