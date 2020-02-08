export default function buildErrorLogger() {
    return function logError(type: string, obj: any) {
        console.group('ERR::' + type);
        console.group(obj);
        console.groupEnd();
        console.groupEnd();
    }
}