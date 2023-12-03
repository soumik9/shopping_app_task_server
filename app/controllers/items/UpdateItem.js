import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Item from "../../models/itemSchema.js";

const UpdateItem = catchAsync(
    async (req, res) => {

        // updating item
        await Item.findOneAndUpdate({ _id: req.params.itemId }, {
            $set: req.body
        }, { new: true, runValidators: true })

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Item updated successfully!',
        });
    }
)

export default UpdateItem