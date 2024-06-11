import { Dispatch, SetStateAction } from 'react';

export interface IButtonStartProps {
    trigger: () => void
}



export interface IItemLocalData {
    dataValue?: number,
    changeDataValue?: Dispatch<SetStateAction<number>>,
    dataValueSecond?: number,
    changeDataValueSecond?: Dispatch<SetStateAction<number>>,

}


export interface IItemGlobalData extends IItemLocalData {
    text: string;
    className: string;
    thumbClassName: string;
    trackClassName: string;
}

