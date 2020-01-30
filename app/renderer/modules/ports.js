import { setSerialPorts, getDataPort } from "../actions/catwan-actions";

import store from "../store";
import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";
import axios from "axios";

var parser = new Readline();

let _state = store.getState();
console.log(_state);

export const getters = {
  async LIST_PORTS() {
    console.log("LIST_PORTS()");
    console.log(_state.activePort);
    let all_ports = [];
    await SerialPort.list().then(ports => {
      ports.forEach(function(port) {
        console.log(port.path);
        console.log(port.pnpId);
        console.log(port.manufacturer);
        all_ports.push(port.comName);
      });
    });

    store.dispatch(setSerialPorts(all_ports));
  },
  __SET_PORT() {
    var connection = this.connection;
    var port = this.port;
    console.log(port);

    function* closePort() {
      var sp = new SerialPort(port, { baudRate: 9600, autoOpen: true });

      while (true) {
        if (connection) {
          sp.update()
          yield parser;
        } else {
          parser.resume();
          sp.pipe(parser);
          
          yield sp;
        }
      }
    }
    return closePort().next().value;
  }
};

export const actions = {
  CONNECT_TO_SERIALPORT(port, __url, __urlPort, connection) {
    store.dispatch(getDataPort("..."));
    const state = { port, __url, __urlPort, connection };
    const sp = getters.__SET_PORT.call(state);
    console.table(state);
    sp.on("close", function(err) {
      console.error("close port!", err);
    });

    sp.on("error", function(err) {
      console.log(err);
    });

    parser.on("data", function(data) {
      console.log("Send data port!");
      console.log(data);
      store.dispatch(getDataPort(data));
    });
  }
};

//store.subscribe(connectToSerialPort);
store.dispatch(getDataPort("..."));
