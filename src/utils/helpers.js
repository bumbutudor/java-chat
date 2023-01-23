export const displayCreatedAt = (createdAt) => {
    const date = new Date(createdAt.seconds * 1000);
    return date.toLocaleTimeString();
}

export const filterJavaText = (text) => {
    if (!text.toLowerCase().includes('java')) {
        return "No java word";
    }

    if (text.toLowerCase().includes('pula')) {
        // replace pula with ****
        return text.replace(/pula/gi, '****');
    }

    if (text.toLowerCase().includes('shit')) {
        // replace shit with ****
        return text.replace(/shit/gi, '****');

    }

    return text;

}