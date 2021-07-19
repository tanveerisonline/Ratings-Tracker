// import "./styles.css";
import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core";

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
      <AreaChart width={width} height={height} data={mainData} {...rest}>
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
                />
              ) : (
                <RectangularLegend
                  legendalign={legendalign}
                  hideShowGraphLegendClick={hideShowGraphLegendClick}
                  isDisabled={isDisabled}
                  AdditionalStyles={AdditonalLegendsStyles}
                />
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
  legendType: "Rectangular",
  ShowLegends: true,
};
