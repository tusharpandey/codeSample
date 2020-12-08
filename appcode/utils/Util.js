export const uniqueIDGenerator = (appendExtra) => {
    let append = appendExtra == undefined ? "" : appendExtra
    let unqId = Date.now();
    return unqId + append
}