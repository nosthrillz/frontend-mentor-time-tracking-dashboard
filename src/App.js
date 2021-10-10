import { useState } from "react";
import "./App.scss";
import Profile from "./components/Profile";
import Cards from "./components/Cards";

function App() {
  const dailyData = parseData("daily");
  const weeklyData = parseData("weekly");
  const monthlyData = parseData("monthly");
  const [displayData, setDisplayData] = useState(dailyData);

  const onDailyHandler = () => {
    dailyData !== displayData && setDisplayData(dailyData);
  };

  const onWeeklyHandler = () => {
    weeklyData !== displayData && setDisplayData(weeklyData);
  };
  const onMonthlyHandler = () => {
    monthlyData !== displayData && setDisplayData(monthlyData);
  };

  return (
    <div className="container">
      <Profile
        image={data.image}
        name={data.name}
        onDaily={onDailyHandler}
        onWeekly={onWeeklyHandler}
        onMonthly={onMonthlyHandler}
      />
      <Cards data={displayData} />
    </div>
  );
}

export default App;

const data = {
  name: "Jeremy Robson",
  image: "image-jeremy.png",
  timetracking: [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ],
};

function parseData(period) {
  const newData = data.timetracking.map((item) => {
    let type = "";
    if (period === "daily") type = "Day";
    else if (period === "weekly") type = "Week";
    else type = "Month";
    return {
      period: type,
      title: item.title,
      current: item.timeframes[period].current,
      previous: item.timeframes[period].previous,
    };
  });
  return newData;
}
