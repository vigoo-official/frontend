import { ModelException } from "../../exceptions/modelException";
import { createErrorsDefinder } from "../../helpers/modelErrorsBuilder";
import { IApplicationErrorsCodes } from "../../interfaces";
import { AuthModel } from "./types";

export default function buildAuthModelCreator({
    codeErrors,
}: {
    codeErrors: IApplicationErrorsCodes
}) {
    return function createAuthModel(authModel: AuthModel): AuthModel {
        const {
            email,
            password,
        } = authModel;
        var errorsDefinder = createErrorsDefinder();

        if (!email) {
            errorsDefinder.setError('email', codeErrors.STRING_IS_REQUIRED, 'Email or email is required');
        }

        if (!password)
            errorsDefinder.setError('password', codeErrors.STRING_IS_REQUIRED, 'Password is required');

        if (password && password.length < 6)
            errorsDefinder.setError('password', codeErrors.STRING_GTE_6, 'Password is required');

        if (errorsDefinder.hasErrors())
            throw new ModelException(errorsDefinder.getErrors());
        else
            return authModel;
    };
};
