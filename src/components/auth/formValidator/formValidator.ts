export const maxLengthCreator = (limit: number) => {
    return (value: any) => {
        if (value && value.length > limit) {
            return `Length must be low ${limit}`
        }
        return undefined
    }
}

export const maxLength = maxLengthCreator(10)

export const required = (value: any) => {
    if (value) {
        return undefined
    }
    return "Input is empty"
}