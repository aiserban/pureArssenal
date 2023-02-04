export function removeHtml(text: string) {
    if (text === undefined) {
        return;
    }

    const tags = ['<img']
    const endTag = '/>'
    let result = text;

    for (let i = 0; i < tags.length; i++) {
        const startIndex = text.indexOf(tags[i]);
        if (startIndex >= 0) {
            const endIndex = text.indexOf(endTag);
            result = text.slice(endIndex + endTag.length);
        }
    }

    return result;
}