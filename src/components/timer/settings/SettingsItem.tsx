import React from 'react'
import ReactSlider from 'react-slider';

import settings from './../../modules/settings.module.scss'
import { IItemGlobalData } from 'src/types/PropsTypes';



const SettingsItem: React.FC<IItemGlobalData> = ({ className, thumbClassName, text, trackClassName, dataValue, changeDataValue }) => {
    return (
        <div className={settings.settingsItem}>
            <p className={settings.minutes}>{text} {dataValue}:00</p>
            <ReactSlider onChange={changeDataValue} className={settings[className]} thumbClassName={settings[thumbClassName]}
                trackClassName={settings[trackClassName]} value={dataValue} min={1} max={120} />
        </div>
    )
}

export default SettingsItem;