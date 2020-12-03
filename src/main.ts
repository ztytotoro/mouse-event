export function isNumber(value: any) {
    return !isNaN(value) && typeof value === 'number';
}
