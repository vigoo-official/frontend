import { ApplicationErrorCodes } from "../../core/constants/applicationErrorCodes";
import buildAuthModelCreator from "../../core/models/identity/authModel";

export const APP_CODES = new ApplicationErrorCodes();

export const createAuthModel = buildAuthModelCreator({
    codeErrors: APP_CODES,
});
