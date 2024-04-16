import mongoose, { Schema } from "mongoose";

const ReviewsSchema = new Schema(
  {
    name: String,
    avatar: String,
    job: String,
    review: String,
  },
  { timestamps: true }
);

const Reviews =
  mongoose.models.Reviews || mongoose.model("Reviews", ReviewsSchema);

export default Reviews;
