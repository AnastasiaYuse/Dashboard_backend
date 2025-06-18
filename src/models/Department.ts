import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Department extends Model {
    public id!: number;
    public name!: string;
    public description?: string;
    public location?: string;
}

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: 'Department',
        tableName: 'departments',
        timestamps: true,
    }
);

export default Department;
