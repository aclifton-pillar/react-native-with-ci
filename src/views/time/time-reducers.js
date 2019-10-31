import moment from "moment";

const something = () => {
    return moment().toString();
};

const updateTime = (state, action) => {
    return action.payload.time;
};

const unknown = (state, action) => {
    return action.type;
};

const timeReducer = (state = null, action) => {
    const reducers = {
        "WS_MESSAGE": updateTime,
        "SOMETHING": something
    };

    const reducer = reducers[action.type];

    return reducer ? reducer(state, action): unknown(state, action);
};

export default timeReducer;