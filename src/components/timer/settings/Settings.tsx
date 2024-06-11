import React from 'react'
import { CiSettings } from "react-icons/ci";
import settings from '../../modules/settings.module.scss'
import { IButtonStartProps } from 'src/types/PropsTypes';


const Settings: React.FC<IButtonStartProps> = ({ trigger }) => {
    return (
        <div>
            <button onClick={trigger} className={settings.settings}> <CiSettings className={settings.settingsIcon} /> </button>
        </div>
    )
}

export default Settings;