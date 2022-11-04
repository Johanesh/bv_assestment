export const validateAlphaNumOnly = (value) => {
    if (/^[A-Z0-9]*$/.test(value)) {
        return true;
    } else {
        return false;
    }
};
