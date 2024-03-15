import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { NotifyPositions } from "./NotifiesList";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

import {
    removeNotify,
    saveTime
} from "../../store/reducers/notifySlice";

import anime from "animejs";

import NotifyBack from "../../images/notify-back.svg"

const NotifiesItem = ({ notify }) => {

    const dispatch = useDispatch();

    const { notifyTypes } = useSelector(
        state => state.notifies
    );

    const nodeRef = useRef(null);
    const appearAnimation = useRef(null);

    const [ isRemoved, setIsRemoved ] = useState(false);

    const {
        id, type, position, timeout,
        time, title, subTitle, content
    } = notify;

    useEffect(() => {
        const Timer = setInterval(() => {
            dispatch(saveTime({ id, time: time - 50 }));

            if(time <= 0) {
                anime({
                    targets: nodeRef.current,
                    opacity: 0,
                    duration: 300,
                    complete: () => {
                        dispatch(removeNotify(id));
                        clearInterval(Timer);
                        setIsRemoved(true);
                    }
                });
            }
        }, 50)

        return () => {
            clearInterval(Timer);
        }
    }, [id, time, dispatch])

    useEffect(() => {
        const valueX =
            position === NotifyPositions.RIGHT_CENTER ?
                "100%" :
            position === NotifyPositions.LEFT_CENTER ?
                "-100%" : "0%"

        const valueY =
            position === NotifyPositions.CENTER_BOTTOM ?
                "100%" :
            position === NotifyPositions.CENTER_TOP ?
                "-100%" : "0%"

        appearAnimation.current = anime({
            targets: nodeRef.current,
            opacity: [0, 1],
            translateX: [valueX, 0],
            translateY: [valueY, 0],
            duration: 300,
        });

        return () => {
            appearAnimation.current.pause();
        };
    }, [position]);

    const styles = {
        opacity: isRemoved ? 0 : 1, transform: isRemoved ?
            'translateY(-100%)' : 'translateY(0)'
    }

    const { icon, type: notifyClassName } = notifyTypes.filter(
        (item) => item.id === type
    )[0];

    return (
        <div ref={nodeRef} className={`notifies-item ${notifyClassName}`} style={styles}>
            <div className="image-block">
                <img src={ icon } alt=""
                     draggable={"false"} />

                <CircularProgressBar
                    radius={22.5}
                    strokeWidth={3}
                    progress={time / (timeout / 100) > 0 ? time / (timeout / 100) : 0}
                />
            </div>

            <div className="text-block">
                <div className="header-section">
                    <h1>{ title }</h1>
                    <p>{ subTitle }</p>
                </div>

                <div className="content">
                    { content }
                </div>
            </div>

            <img src={ NotifyBack } alt="notify-back"
                draggable={"false"} className={"notify-back"}/>
        </div>
    );
};

export default NotifiesItem;