import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import play from '../modules/play.module.scss'
import { IButtonStartProps } from '../../types/PropsTypes';

const PlayBtn: React.FC<IButtonStartProps> = ({ trigger }) => {
    return (
        <button onClick={trigger} className={play.play}><FaRegPlayCircle className={play.playIcon} /> </button>
    )
}

export default PlayBtn;