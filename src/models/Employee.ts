import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Employee extends Model {
    public id!: number;
    public name!: string;
    public departmentId!: number;
    public email!: string;
    public position!: string;
    public hireDate!: Date;
}

Employee.init(
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
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'departments',
                key: 'id',
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hireDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        modelName: 'Employee',
        tableName: 'employees',
        timestamps: true,
    }
);

export default Employee;







