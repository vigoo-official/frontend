import { APP_CODES } from "../../constants";
import buildAuthModelCreator from "./authModel";

export const createAuthModel = buildAuthModelCreator({
    codeErrors: APP_CODES,
});
