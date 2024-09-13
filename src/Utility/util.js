
export function titleCase(str) {
    const label = str.split(/(?=[A-Z])/);
    if (label.length > 1) {
        const urlTitle = label.map(e => {
            return e.replace(
                /\w\S*/g,
                text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
            );
        })
        return urlTitle.join(" ")
    } else {
        return str.replace(
            /\w\S*/g,
            text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        );
    }
}