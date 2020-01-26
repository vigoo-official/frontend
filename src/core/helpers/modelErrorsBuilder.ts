import { FieldError, FieldsError } from "../exceptions/modelException";

export function createErrorsDefinder() {
    const errors: FieldsError[] = [];

    return {
        setError: function (name: string, code: number, message?: string | undefined) {
            let errorByName = errors.find(e => e.name == name);

            if (!errorByName) {
                errorByName = {
                    name,
                    errors: [],
                };
                errors.push(errorByName);
            }

            errorByName.errors.push({
                code,
                message,
            } as FieldError);

            return this;
        },
        getErrors: function () {
            return errors;
        },
        hasErrors: function () {
            return errors.length !== 0;
        }
    }
}
