// import "./styles.css";
import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core";
<<<<<<< HEAD

=======
import Divider from "@material-ui/core/Divider";
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Legend,
  Area,
  Surface,
  Symbols,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import WrappedLegends from "components/GraphsNew/Legends/circularLegend";
import RectangularLegend from "components/GraphsNew/Legends/rectangular.js";
import { ClassNames } from "@emotion/react";
export default function AreaChartComponent(props) {
  const {
    graphData,
    width,
    height,
    legendVerticalAlign,
    legendlayout,
    legendalign,
    legendsProps,
    mainData,
    areaProps,
    ShowLegends,
    legendType,
    AdditonalLegendsStyles,
    ...rest
  } = props;
  const [isDisabled, setIsDisabled] = useState([]);
  const [render, setRerender] = useState(false);
  // const classes = useStyles();
<<<<<<< HEAD

=======
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0

  const hideShowGraphLegendClick = (payload) => {
    let disabledGraph = [];
    disabledGraph = isDisabled;
    if (disabledGraph.includes(payload)) {
      var index = disabledGraph.indexOf(payload);
      disabledGraph.splice(index, 1);
    } else {
      disabledGraph.push(payload);
    }
    setIsDisabled(disabledGraph);

    render ? setRerender(false) : setRerender(true);
  };
  useEffect(() => {}, [render]);
  return (
    <ResponsiveContainer height={height}>
      <AreaChart
        width={width}
        height={height}
        data={mainData}
        {...rest}
        margin={{ top: 30, right: 30, left: 0, bottom: 30 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis axisLine={false} />
        <Tooltip />
        {ShowLegends && (
          <Legend
            // className={classes.example}
            iconSize={22}
            verticalAlign={legendVerticalAlign}
            align={legendalign}
            margin={{ bottom: 20 }}
            layout={legendlayout}
            onClick={(e) => legendalign(e)}
            content={
              legendType == "circular" ? (
                <WrappedLegends
                  legendalign={legendalign}
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  AdditionalStyles={AdditonalLegendsStyles}
<<<<<<< HEAD
                />
              ) : (
                <RectangularLegend
                  legendalign={legendalign}
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  AdditionalStyles={AdditonalLegendsStyles}
                />
=======
                  LabelLegendsStyles={{
                    marginBottom: 80,
                  }}
                />
              ) : (
                <RectangularLegend
                  legendalign={legendalign}
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  AdditionalStyles={AdditonalLegendsStyles}
                />
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
              )
            }
            {...legendsProps}
          />
        )}

        {graphData?.map((item, index) => {
          return (
            <Area
              key={index}
              type={item.type}
              dataKey={item.dataKey}
              stroke={item.stroke}
              fill={item.fill}
              fillOpacity={item.fillOpacity && item.fillOpacity}
              hide={isDisabled.includes(item.dataKey)}
              {...areaProps}
            />
          );
        })}
      </AreaChart>
      {/* <Divider variant="middle" /> */}
    </ResponsiveContainer>
  );
}

AreaChartComponent.propTypes = {};

AreaChartComponent.defaultProps = {
  legendVerticalAlign: "bottom",
  legendlayout: "horizontal",
  legendalign: "center",
  height: 400,
  width: window.innerWidth,
  legendType: "circular",
  ShowLegends: true,
};
