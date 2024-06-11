import React from 'react'
import { CiPause1 } from "react-icons/ci";
import pause from '../modules/pause.module.scss'
import { IButtonStartProps } from '../../types/PropsTypes';

const Pause: React.FC<IButtonStartProps> = ({ trigger }) => {
    return (
        <>
            <button onClick={trigger} className={pause.pause}><CiPause1 className={pause.pauseIcon} /> </button>
        </>
    )
}

export default Pause