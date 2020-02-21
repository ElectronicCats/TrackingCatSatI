import {
  SEND_COMMAND,
  GET_DATA_PORTS,
  SET_SERIAL_PORTS,
  SENT_COMMAND,
  INCREMENT_EPOCH,
  SWITCH_MOCK_OBC,
  CLEAR_GRAPH
} from "../actions/action-types";

const initialState = {
  data_port: {
    data: [],
    position: {
      lat: 21.9008467,
      lng: -102.31658777777777,
      zoom: 18
    },
    graphTemperature: [],
    graphMagnetometer: [],
    graphAccelerometer: [],
    graphGyroscope: [],
    graphGPS: []
  },
  list_ports: {
    listports: []
  },
  activePort: ""
};

/* Reducer
    - takes in the state (the current state)
    - takes in an action (an action type string + some other data usually)
    - switch on the action, and depending on which action occurred, modify the state appropriately
        - we only ever append to the state
*/
const rootReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_SERIAL_PORTS:
      console.log("Data count: ", state.list_ports);
      return {
        ...state,
        list_ports: {
          ...action.payload
        }
      };
    case GET_DATA_PORTS:
      console.log("GET_DATA_PORTS ~REDUCER.JS");
      return {
        ...state,
        data_port: {
          ...action.payload
        }
      };
    case CLEAR_GRAPH:
      console.log("CLEAR_GRAPH ~REDUCER.JS");
      return {
        ...state,
        data_port: {
          ...action.payload
        }
      };
    case SEND_COMMAND:
      console.log("Command", action.payload);
      return {
        ...state,
        commands: [
          ...state.commands,
          {
            ...action.payload
          }
        ],
        command_to_send: true
      };

    case SENT_COMMAND:
      return {
        ...state,
        commands: state.commands.slice(1),
        command_to_send: false,
        timelinedata: [
          ...state.timelinedata,
          {
            ...action.payload
          }
        ],
        timeline_count: state.timeline_count + 1
      };

    case INCREMENT_EPOCH:
      return { ...state, epoch: state.epoch + 1 };

    case SWITCH_MOCK_OBC:
      return { ...state, mockOBC: action.payload.enable_mock };

    default:
      return state;
  }
};

export default rootReducer;
