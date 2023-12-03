import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import User from "../../models/userSchema.js";

const GetUsers = catchAsync(
    async (req, res) => {

        // finding profile
        const data = await User.find();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Users retrived successfully!`,
            data: data
        });
    }
)

export default GetUsers