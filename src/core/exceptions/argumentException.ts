export class ArgumentException {
    private _code: number = 0;
    private _message: string | undefined = undefined;

    constructor(code: number, message: string) {
        this._code = code;
        this._message = message;
    }

    public get code() {
        return this._code;
    }

    public get message() {
        return this._message;
    }
}