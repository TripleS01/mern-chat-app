export default function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = zeroEnsure(date.getHours());
    const minutes = zeroEnsure(date.getMinutes());
    return `${hours}:${minutes}`;
};

function zeroEnsure(number) {
    return number.toString().padStart(2, "0");
};