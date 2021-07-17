import Link from "next/link"
import { toast } from "react-toastify"

export const LinkTxHash = ({ txHash }) => {
    return (
        <Link href={`https://rinkeby.etherscan.io/tx/${txHash}`} passHref>
            <p>{txHash}</p>
        </Link>
    )
}

// Toast
export const success = (data,time) => {
    toast.success(data, {
        autoClose: time,
        position: toast.POSITION.BOTTOM_CENTER,
        draggablePercent: 20,
    });
}

export const info = (data, time) => {
    toast.info(data, {
        autoClose: time,
        position: toast.POSITION.BOTTOM_CENTER,
        draggablePercent: 20,
    });
}

export const warning = (data) => {
    toast.warn(data, {
        position: toast.POSITION.BOTTOM_CENTER,
        draggablePercent: 20,
    });
}

export const danger = (data, time) => {
    toast.error(data, {
        autoClose: time,
        position: toast.POSITION.BOTTOM_CENTER,
        draggablePercent: 20,
    });
}