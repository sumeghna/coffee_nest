import dotenv from 'dotenv';
import app from './app';
import connectDB from "./database/db"

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});