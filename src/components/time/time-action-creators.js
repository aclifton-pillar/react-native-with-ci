import {wsConnect} from "../../../websocket-middleware/actions";

export const getTime = () => {
    return dispatch => {
        return null;
    };
};

export const startTime = () => {
    return dispatch => {
        // dispatch({type: 'SOMETHING'});
        dispatch(wsConnect('ws://10.0.2.2:3000'));
        return null;
    }
};