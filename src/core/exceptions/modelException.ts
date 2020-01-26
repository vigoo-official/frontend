export type FieldError = {
    code: number,
    message?: string | undefined,
};

export type FieldsError = {
    name: string,
    errors: FieldError[],
}

export class ModelException {
    private _errors: FieldsError[] = [];

    constructor(errors: FieldsError[]) {
        this._errors = errors;
    }

    public get errors() {
        return Object.freeze(this._errors);
    }
}