import classes from "./activityGraph.module.css";
import { VictoryBar, VictoryLabel } from "victory";
import { useState } from "react";

const ActivityGraph = () => {
  const [selectedView, setSelectedView] = useState("월별");

  const data =
    selectedView === "월별"
      ? [
          { x: "3월", y: 10, label: "10" },
          { x: "4월", y: 8, label: "8" },
          { x: "5월", y: 19, label: "19" },
          { x: "6월", y: 10, label: "10" },
          { x: "7월", y: 18, label: "18" },
          { x: "이번달", y: 14, label: "14" },
        ]
      : [
          { x: "1주", y: 12, label: "15" },
          { x: "2주", y: 8, label: "8" },
          { x: "3주", y: 10, label: "19" },
          { x: "4주", y: 14, label: "10" },
          { x: "5주", y: 18, label: "18" },
          { x: "이번주", y: 14, label: "14" },
        ];

  const toggleView = (view) => {
    setSelectedView(view);
  };

  return (
    <div className={classes.activityGraph}>
      <ul className={classes.selectTitle}>
        <li
          className={`${classes.Month} ${
            selectedView === "월별" ? classes.Selected : ""
          }`}
          onClick={() => toggleView("월별")}
        >
          월별
        </li>
        <li
          className={`${classes.Week} ${
            selectedView === "주별" ? classes.Selected : ""
          }`}
          onClick={() => toggleView("주별")}
        >
          주별
        </li>
      </ul>
      <div className={classes.victoryChart}>
        <VictoryBar
          width={830}
          height={400}
          style={{
            data: {
              fill: ({ datum }) =>
                datum.x === "이번달" || datum.x === "이번주"
                  ? "#ACE2B5"
                  : "#E6EFE6",
              label: "#9B9B9B",
            },
          }}
          barRatio={1}
          cornerRadius={{ topLeft: 20, topRight: 20 }}
          data={data}
          labelComponent={
            <VictoryLabel
              angle={0}
              verticalAnchor="middle"
              textAnchor="middle"
              style={{ fill: "#9B9B9B", fontSize: 28, fontWeight: "bold" }}
            />
          }
        />
        <ul className={classes.list}>
          {data.map((item) => (
            <li
              key={item.x}
              className={
                item.x === "이번달" || item.x === "이번주"
                  ? classes.thisMonth
                  : ""
              }
            >
              {item.x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityGraph;
