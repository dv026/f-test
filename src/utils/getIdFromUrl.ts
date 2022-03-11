export const getIdFromUrl = (url: string): string => {
    const urlObject = new URL(url)
    const splittedPathname = urlObject.pathname.split('/')
    for (var i = splittedPathname.length - 1; i > 0; i--) {
        if (splittedPathname[i] !== '') {
            return splittedPathname[i]
        }
    }
    return ''
}