import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  value: String,
});

export const TestModel =
  mongoose.models?.tests || mongoose.model('tests', testSchema);
