import { ModelException } from "../../core/exceptions/modelException";
import { createErrorsDefinder } from "../../core/helpers/modelErrorsBuilder";
import { createAuthModel } from "../../di/core";
import { IHttpClient, ILogger } from "../interfaces";

export default function buildLoginUseCase({
    http,
    logger,
}: {
    http: IHttpClient,
    logger: ILogger,
}) {
    return async function login(email: string, password: string) {
        try {
            var userCred = createAuthModel({
                email,
                password,
            });

            var response = await http.post('/users/login', { user: userCred });
            logger.info('LoginUC', response);
        } catch (e) {
            logger.error('LoginUC', e.response);
            if (e.response) {
                throw new ModelException(createErrorsDefinder()
                    .setError('$model', 1, e.response.data.errors)
                    .getErrors()
                );
            }
            throw e;
        }
    }
}