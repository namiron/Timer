import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import timer from './../modules/timer.module.scss';
import Pause from './Pause';
import PlayBtn from './PlayBtn';
import Settings from './settings/Settings';
import SettingsPage from './settings/SettingsPage';

const Timer: React.FC = () => {
    //--------------------------------------
    const [trigger, setTrigger] = React.useState<boolean>(true);
    const [showSettings, setShowSettings] = React.useState<boolean>(false);
    const [workTime, setWorkTime] = React.useState<number>(1);
    const [breakTime, setBreakTime] = React.useState<number>(1);
    const [seconds, setSeconds] = React.useState<number>(0);
    const [mode, setMode] = React.useState<string>('work');

    const secondRef = React.useRef(seconds);
    const triggerRef = React.useRef(trigger);
    const modeRef = React.useRef(mode);
    const intervalRef = React.useRef<number | null>(null);

    const handleShowSettings: () => void = () => {
        setShowSettings(prevState => !prevState);
    };

    const handleTrigger: () => void = () => {
        setTrigger(prevState => !prevState);
        triggerRef.current = !triggerRef.current;
    };
    const switchMode = () => {
        const nextMode: string = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? workTime : breakTime) * 60;
        setMode(nextMode);
        modeRef.current = nextMode;
        setSeconds(nextSeconds);
        secondRef.current = nextSeconds;
    };

    const tick = () => {
        secondRef.current--;
        setSeconds(secondRef.current);
    };

    const initTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        setSeconds(workTime * 60);
        secondRef.current = workTime * 60;

        intervalRef.current = window.setInterval(() => {
            if (triggerRef.current) {
                return;
            }
            if (secondRef.current === 0) {
                switchMode();
            } else {
                tick();
            }
        }, 1000);
    };

    React.useEffect(() => {
        initTimer();
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, [trigger, workTime, breakTime]);

    React.useEffect(() => {
        triggerRef.current = trigger;
    }, [trigger]);

    React.useEffect(() => {
        modeRef.current = mode;
    }, [mode]);

    const totalSecond = mode === 'work' ? workTime * 60 : breakTime * 60;
    const percentage = Math.round((seconds / totalSecond) * 100);

    const minutes = Math.floor(seconds / 60);
    let secondsTimer: number | string = seconds % 60;
    if (secondsTimer < 10) secondsTimer = '0' + secondsTimer;
    //--------------------------------------

    return (
        <div className={timer.timerWrapper}>
            <div className={timer.contentContainer}>
                {showSettings ? (
                    <SettingsPage
                        dataValue={workTime}
                        dataValueSecond={breakTime}
                        changeDataValue={setWorkTime}
                        changeDataValueSecond={setBreakTime}
                    />
                ) : (
                    <CircularProgressbar
                        value={percentage}
                        text={minutes + ':' + secondsTimer}
                        styles={buildStyles({
                            textColor: '#fff',
                            pathColor: mode === 'work' ? 'red' : 'green',
                            trailColor: 'grey',
                        })}
                    />
                )}
            </div>
            <div className={timer.navContainer}>
                {trigger ?
                    (<PlayBtn trigger={handleTrigger} />)
                    :
                    (<Pause trigger={handleTrigger} />)

                }
                <Settings trigger={handleShowSettings} />
            </div>
        </div>
    );
};

export default Timer;
