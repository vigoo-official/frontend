export default function buildInfoLogger() {
    return function logInfo(type: string, obj: any) {
        console.group('INFO::' + type);
        console.group(obj);
        console.groupEnd();
        console.groupEnd();
    }
}