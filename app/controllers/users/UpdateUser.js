import bcrypt from 'bcryptjs'
import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import User from '../../models/userSchema.js';

const UpdateUser = catchAsync(
    async (req, res) => {

        const userId = req.params.userId;
        const body = req.body;

        // cut out some data which should not be updated
        let { password, email, ...updatedData } = body;

        // if there is password
        if (body.password && body.password !== 'undefined') {
            const hashedPassword = await bcrypt.hash(body.password, 10);
            updatedData = { ...updatedData, password: hashedPassword }
        }

        // updating user
        await User.findOneAndUpdate({ _id: userId }, {
            $set: updatedData
        }, { new: true, runValidators: true })

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User updated successfully!',
        });
    }
)

export default UpdateUser