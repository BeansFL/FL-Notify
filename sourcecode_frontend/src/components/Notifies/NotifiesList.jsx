import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import NotifiesItem from './NotifiesItem';

export const NotifyPositions = {
    CENTER_TOP: 0,
    CENTER_BOTTOM: 1,
    LEFT_CENTER: 2,
    RIGHT_CENTER: 3,
};

export const NotifyType = {
    ERROR: 0,
    SUCCESS: 1,
    WARNING: 2,
    INFORMATION: 3,
};

const NotifiesList = () => {
    const { notifies } = useSelector(state => state.notifies);

    const getNotifiesByPosition = useCallback(id => {
        return notifies.filter(item => item.position === id);
    }, [notifies]);

    const renderNotifies = (items) => {
        return items.map((item) => (
            <NotifiesItem
                key={item.id}
                notify={item}
            />
        ));
    };

    const renderNotifyContainer = (position, index) => {
        const positionClassName = `notify-container ${position.toLowerCase()}-container`;
        const positionId = NotifyPositions[position];

        const notifiesForPosition = getNotifiesByPosition(positionId);
        const renderedNotifies = renderNotifies(notifiesForPosition);

        return (
            <div className={positionClassName} key={index}>
                {renderedNotifies}
            </div>
        );
    };

    return (
        Object.keys(NotifyPositions).map((position, index) => (
            renderNotifyContainer(position, index)
        ))
    );
};

export default NotifiesList;
