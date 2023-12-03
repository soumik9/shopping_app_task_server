import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Item from "../../models/itemSchema.js";

const GetItems = catchAsync(
    async (req, res) => {

        // finding profile
        const data = await Item.find().populate('createdBy');

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Items retrived successfully!`,
            data: data
        });
    }
)

export default GetItems