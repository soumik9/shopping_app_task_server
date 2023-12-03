import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import User from "../../models/userSchema.js";

const GetUser = catchAsync(
    async (req, res) => {

        // finding profile
        const data = await User.findOne({ _id: req.params.userId });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `User retrived successfully!`,
            data: data
        });
    }
)

export default GetUser