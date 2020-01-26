import { ApplicationErrorCodes } from "./constants/applicationErrorCodes";
import buildAuthModelCreator from "./models/identity/authModel";

export const APP_CODES = new ApplicationErrorCodes();

export const createAuthModel = buildAuthModelCreator({
    codeErrors: APP_CODES,
});
