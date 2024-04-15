import mongoose, { Schema, Document } from 'mongoose';

// Definimos el esquema para el modelo de datos
interface User extends Document {
    name: string;
    email: string;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

// Creamos el modelo a partir del esquema
const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;