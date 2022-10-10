import {BigNumberish, ethers} from "ethers";
import web3 from "web3";

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

export const calculateDiffTime = (start: Date, end: Date) => {
    const diff = +end - +start;
    let days: number | string = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    let hours: number | string = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    let minutes: number | string = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    let seconds: number | string = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${days}:${hours}:${minutes}:${seconds}`
}


export const formatEther = (value: BigNumberish): string => {
    return ethers.utils.formatEther(value)
}

export const toWei = (value: string): number => {
    return +web3.utils.toWei(value, "ether")
}