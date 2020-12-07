export const isEmptyText = (text) => {
    if (text == undefined || text.length == 0 || text == null) {
        return true
    }
    return false
}