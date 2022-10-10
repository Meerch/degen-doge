import React, {FC, useEffect, useState} from 'react';
import styles from "./SaleTimer.module.scss";
import {useContractRead} from "wagmi";
import {generateContractDogesSetting} from "../../blockchain/utils";
import {calculateDiffTime, formatEther, toWei} from "../../utils";
import classNames from "classnames";
import {BigNumberish} from "ethers";

const zeroValueTime = '00:00:00:00'

interface SaleTimeProps {
    className?: string
}

const SaleTimer: FC<SaleTimeProps> = ({className}) => {
    const [time, setTime] = useState('')
    const [deadline, setDeadline] = useState<Date>(null);
    const {data} = useContractRead(generateContractDogesSetting('getSaleTime', {
        select: (data: BigNumberish): number => toWei(formatEther(data)) * 1000,
        onSuccess: (data) => {
            setDeadline(new Date(+data))
        }
    }))

    useEffect(() => {
        if (!deadline) {
            return
        }

        const timerId = setInterval(() => {
            const nowDate = new Date()
            const diffTime = calculateDiffTime(nowDate, deadline)

            if (diffTime === zeroValueTime) {
                clearInterval(timerId)
            }

            setTime(diffTime)
        }, 1000);

        return () => clearInterval(timerId)
    }, [deadline])


    return deadline && time !== zeroValueTime && (
        <span className={classNames(styles.timer, className)}>{time}</span>
    );
};

export default SaleTimer
