import {
  GET_DATA_PORTS,
  SET_SERIAL_PORTS,
  SEND_COMMAND,
  CLEAR_GRAPH
} from "./action-types";
import hash from "object-hash";
import store from "../store";

function get_epoch() {
  let state = store.getState();
  console.log(state.data_port.graphGPS);
  return state.epoch;
}

export function setSerialPorts(listports) {
  return {
    type: SET_SERIAL_PORTS,
    payload: {
      data_type: "SET_SERIAL_PORTS",
      id: hash({ timestamp: Date() }),
      listports,
      epoch_received: get_epoch()
    }
  };
}

export function clearGraph(nameGraph) {
  let state = store.getState();
  console.log(nameGraph);
  return {
    type: CLEAR_GRAPH,
    payload: {
      data_type: CLEAR_GRAPH,
      id: hash({ timestamp: Date() }),
      data: state.data_port.data,
      position: {
        lat:
          state.data_port.data[14] !== undefined ? state.data_port.data[14] : 0,
        lng:
          state.data_port.data[15] !== undefined ? state.data_port.data[15] : 0
      },
      graphTemperature:
        nameGraph === "graphTemperature"
          ? []
          : state.data_port.graphTemperature,
      graphMagnetometer:
        nameGraph === "graphMagnetometer"
          ? []
          : state.data_port.graphMagnetometer,
      graphAccelerometer:
        nameGraph === "graphAccelerometer"
          ? []
          : state.data_port.graphAccelerometer,
      graphGyroscope:
        nameGraph === "graphGyroscope" ? [] : state.data_port.graphGyroscope,
      graphGPS: nameGraph === "graphGPS" ? [] : state.data_port.graphGPS,
      epoch_received: get_epoch()
    }
  };
}

export function getDataPort(data) {
  let state = store.getState();
  console.log(state.data_port.graphGPS);

  state.data_port.graphTemperature = [
    ...state.data_port.graphTemperature,
    {
      name: "temp",
      temp: data[1] !== undefined ? data[1] : 0
    },
    {
      name: "hum %",
      hum: data[2] !== undefined ? data[2] : 0
    },
    {
      name: "press",
      press: data[3] !== undefined ? data[3] : 0
    }
  ];

  state.data_port.graphMagnetometer = [
    ...state.data_port.graphMagnetometer,
    {
      name: "mx",
      mx: data[5] !== undefined ? data[5] : 0
    },
    {
      name: "my",
      my: data[6] !== undefined ? data[6] : 0
    },
    {
      name: "mz",
      mz: data[7] !== undefined ? data[7] : 0
    }
  ];

  state.data_port.graphAccelerometer = [
    ...state.data_port.graphAccelerometer,
    {
      name: "ax",
      ax: data[8] !== undefined ? data[8] : 0
    },
    {
      name: "ay",
      ay: data[9] !== undefined ? data[9] : 0
    },
    {
      name: "az",
      az: data[10] !== undefined ? data[10] : 0
    }
  ];

  state.data_port.graphGyroscope = [
    ...state.data_port.graphGyroscope,
    {
      name: "gx",
      gx: data[11] !== undefined ? data[11] : 0
    },
    {
      name: "gy",
      gy: data[12] !== undefined ? data[12] : 0
    },
    {
      name: "gz",
      gz: data[13] !== undefined ? data[13] : 0
    }
  ];

  //clearData === "graphGPS" ? graphGPS = [] :
  state.data_port.graphGPS = [
    ...state.data_port.graphGPS,
    {
      name: "Height",
      Height: data[16] !== undefined ? data[16] : 0
    },
    {
      name: "Speed",
      Speed: data[17] !== undefined ? data[17] : 0
    }
  ];
  return {
    type: GET_DATA_PORTS,
    payload: {
      data_type: "SERIAL PORTS",
      id: hash({ timestamp: Date() }),
      data: data,
      position: {
        lat: data[14] !== undefined ? data[14] : 0,
        lng: data[15] !== undefined ? data[15] : 0
      },
      graphTemperature: state.data_port.graphTemperature,
      graphMagnetometer: state.data_port.graphMagnetometer,
      graphAccelerometer: state.data_port.graphAccelerometer,
      graphGyroscope: state.data_port.graphGyroscope,
      graphGPS: state.data_port.graphGPS,
      epoch_received: get_epoch()
    }
  };
}

export function sendCommand(cmd_input) {
  return {
    type: SEND_COMMAND,
    payload: {
      data_type: "COMMAND",
      id: hash({ text: cmd_input.text, timestamp: Date() }),
      text: cmd_input.command_input,
      epoch_sent: get_epoch()
    }
  };
}
