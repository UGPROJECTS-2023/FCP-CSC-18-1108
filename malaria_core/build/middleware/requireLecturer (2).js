"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
function requireLecturer(req, res, next) {
    const user = res.locals.user.lecturer;
    if (!user) {
        return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Message: "You are not Authorized to perform this operation" });
    }
    return next();
}
exports.default = requireLecturer;
