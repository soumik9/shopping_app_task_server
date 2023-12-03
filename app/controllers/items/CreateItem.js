import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Item from "../../models/itemSchema.js";

const CreateItem = catchAsync(
    async (req, res) => {

        // creating user
        await Item.create({ createdBy: req.user?._id, ...req.body });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Item created successfully!`,
        });
    }
)

export default CreateItem