import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Department extends Model {
    public id!: number;
    public name!: string;
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
    },
    {
        sequelize,
        modelName: 'Department',
        tableName: 'departments',
        timestamps: true,
    }
);

export default Department;
