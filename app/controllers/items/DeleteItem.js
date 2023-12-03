import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Item from "../../models/itemSchema.js";

const DeleteItem = catchAsync(
    async (req, res) => {

        // finding profile
        const data = await Item.deleteOne({ _id: req.params.itemId });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Item deleted successfully!`,
            data: data
        });
    }
)

export default DeleteItem