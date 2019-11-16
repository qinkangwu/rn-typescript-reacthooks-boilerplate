export function reducer(state : any, action : any) {
    const { nums } = action
    if (action.type === "ADD") {
        return { nums: nums }
    } else {
        throw new Error('illegal type')
    }
}