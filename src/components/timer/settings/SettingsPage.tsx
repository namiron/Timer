import React from 'react'
import SettingsItem from './SettingsItem';
import { WORK_MINUTES, BREAK_MINUTES } from '../../common/Constants';
import { IItemLocalData } from 'src/types/PropsTypes';
import settings from '../../modules/settings.module.scss'


const SettingsPage: React.FC<IItemLocalData> = ({ dataValue, dataValueSecond, changeDataValue, changeDataValueSecond }) => {

    return (
        <div className='settingsContainer'>
            <SettingsItem text={WORK_MINUTES}
                className='sliderRed' thumbClassName='thumbRed'
                trackClassName='trackRed' dataValue={dataValue} changeDataValue={changeDataValue}
            />
            <SettingsItem text={BREAK_MINUTES}
                className='sliderGreen' thumbClassName='thumbGreen'
                trackClassName='trackGreen' dataValue={dataValueSecond} changeDataValue={changeDataValueSecond} />
        </div>
    )
}

export default SettingsPage;