import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  questions: [{ type: String, ref: "Question" }],
  followers: [{ type: String, ref: "User" }],
  createdOn: { type: String, default: Date.now },
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
