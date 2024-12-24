import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        title: String,
        img: String,
        content: String,
        // tag: String,
        // revive: String
    },
    {
        timestamps: true
    }

)

const Post = mongoose.models.Post || mongoose.model("Post" , postSchema); //if not model = ใช้modelนี้
export default Post; //สำหรับเพิ่ม/update data