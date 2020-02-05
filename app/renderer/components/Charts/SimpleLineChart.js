import React, { PureComponent, Fragment } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

class SimpleLineChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  render() {
    return (
      <Fragment>
        <div className="title-card-column">
          <p className="p-title-grph">{this.props.title}</p>
        </div>
        <ResponsiveContainer height="400px" width="100%" aspect={4.0}>
          <AreaChart
            data={this.props.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#2ec54d"
              fill="#70d69f"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#7128fb"
              fill="#8438f8"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#f77525"
              fill="#f9ca59"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Fragment>
    );
  }
}

export default SimpleLineChart;
