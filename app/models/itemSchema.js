import { Schema, Types, model } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name filed is required']
    },
    createdBy: {
        type: Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true, virtual: true });

// Define a virtual 'id' field
itemSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

const Item = model("Item", itemSchema);
export default Item;