import {
  GET_DATA_PORTS,
  SET_SERIAL_PORTS,
  SEND_COMMAND,
  SENT_COMMAND,
  INCREMENT_EPOCH
} from "./action-types"; // snag the action type string
import hash from "object-hash";
import store from "../store";
import { Fragment } from "react";

/*  Actions
    - actions return an object with (minimally) a field called "type," which is a string describing the action to take
        - the reducer will switch on the action string to modify the state appropriately
        - we don't use a string directly, we use OBC_SERIAL_RX which is defined in action-types.js to keep things easier to coordinate
    - we also pass some data into the action (obcdata_in), which the reducer can then pull out and append to the state (or whatever)

    - That's all an action does! Spits out an object with a string called "type", and optionally some data that may be used in changing the state. 

This action returns the following object:
{
type: OBC_SERIAL_RX (but turned into a string)
payload: {
        receivedStr: obcdata_in (a string from the serial port)
        // todo: maybe other things in the future?
    }
}
*/

function get_epoch() {
  let state = store.getState();
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

let graphTemperature = [];
let graphMagnetometer = [];
let graphAccelerometer = [];
let graphGyroscope = [];
let graphGPS = [];

export function getDataPort(data) {
  graphTemperature = [
    ...graphTemperature,
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

  graphMagnetometer = [
    ...graphMagnetometer,
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

  graphAccelerometer = [
    ...graphAccelerometer,
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
  graphGyroscope = [
    ...graphGyroscope,
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
  graphGPS = [
    ...graphGPS,
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
        lat: data[14],
        lng: data[15]
      },
      graphTemperature,
      graphMagnetometer,
      graphAccelerometer,
      graphGyroscope,
      graphGPS,
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

export function sentCommand(command) {
  return { type: SENT_COMMAND, payload: command };
}

export function incrementEpoch() {
  return { type: INCREMENT_EPOCH };
}
