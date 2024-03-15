import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout/Layout";
import NotifiesList, { NotifyPositions } from "../components/Notifies/NotifiesList";

import {
    loadNotifies,
} from "../store/reducers/notifySlice";

import { useNuiEvent } from "../hooks/useNuiEvent";

const Notifies = () => {

    const dispatch = useDispatch();

    const { notifies } = useSelector(
        state => state.notifies
    );

    const addNotification = useCallback((notify) => {
        const newNotifies = [ ...notifies, { ...notify, time: notify.timeout } ];

        const notifiesByPosition = {
            [NotifyPositions.CENTER_TOP]: [],
            [NotifyPositions.CENTER_BOTTOM]: [],
            [NotifyPositions.LEFT_CENTER]: [],
            [NotifyPositions.RIGHT_CENTER]: [],
        };

        newNotifies.forEach(notification => {
            notifiesByPosition[notification.position].unshift(notification);
            notifiesByPosition[notification.position].sort((a, b) => b.id - a.id);
        });

        const limitedNotifies = Object.keys(notifiesByPosition).reduce((acc, position) => {
            acc.push(...notifiesByPosition[position].slice(0, 1));
            return acc;
        }, []);

        dispatch(loadNotifies(limitedNotifies));
    }, [notifies, dispatch]);

    const createNotification = useCallback(( title, subTitle, content, timeout, type, position ) => {
        const id = Date.now().toString();
        addNotification({ id, title, subTitle, content, timeout, type, position });
    }, [addNotification]);

    useNuiEvent("createNotify", useCallback(( data ) => {
        const {
            title = "No title", subTitle = "No title",  content = "Empty",
            timeout = 5000, type = 0, position = 0,
        } = data;

        createNotification(title, subTitle, content, timeout, type, position);
    }, [ createNotification ]));

    return (
        <Layout containerName={"notifies"}>
            <NotifiesList/>
        </Layout>
    );
};

export default Notifies;