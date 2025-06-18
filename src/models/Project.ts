import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Project extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public departmentId!: number;
    public startDate!: Date;
    public endDate!: Date;
    public status!: 'Planning' | 'In Progress' | 'On Hold' | 'Completed';
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
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('Planning', 'In Progress', 'On Hold', 'Completed'),
            allowNull: false,
            defaultValue: 'Planning',
        }
    },
    {
        sequelize,
        modelName: 'Project',
        tableName: 'projects',
        timestamps: true,
    }
);

export default Project; 