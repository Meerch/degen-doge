export const storage = (key: string, value: any = false) => {
    try {
        if (typeof window !== 'undefined') {
            const getValue = localStorage.getItem(key) || false
            return value ? localStorage.setItem(key, JSON.stringify(value)) : (getValue && typeof getValue === 'string' ? JSON.parse(getValue) : false)
        }
    } catch {
        return false
    }
}

export const hideAccountAddress = (address: string | null, valueFirstLetter = 8) => {
    return address ? `${address.slice(0, valueFirstLetter)}...${address.slice(-4)}` : ''
}