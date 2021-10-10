import "./Profile.scss";
import { useRef } from "react";

const Profile = ({ image, name, onDaily, onWeekly, onMonthly }) => {
  const dailyBtn = useRef(null);
  const weeklyBtn = useRef(null);
  const monthlyBtn = useRef(null);

  const onDailyHandler = () => {
    dailyBtn.current.classList.toggle("active");
    weeklyBtn.current.classList = "";
    monthlyBtn.current.classList = "";
    onDaily();
  };
  const onWeeklyHandler = () => {
    dailyBtn.current.classList = "";
    weeklyBtn.current.classList.toggle("active");
    monthlyBtn.current.classList = "";
    onWeekly();
  };
  const onMonthlyHandler = () => {
    dailyBtn.current.classList = "";
    weeklyBtn.current.classList = "";
    monthlyBtn.current.classList.toggle("active");
    onMonthly();
  };

  return (
    <div className="profile">
      <div className="profile-head">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${image}`}
          alt="profile"
        />
        <div className="profile-text">
          <p>Report for</p>
          <h1>{name}</h1>
        </div>
      </div>
      <div className="profile-details">
        <button onClick={onDailyHandler} ref={dailyBtn} className="active">
          Daily
        </button>
        <button onClick={onWeeklyHandler} ref={weeklyBtn}>
          Weekly
        </button>
        <button onClick={onMonthlyHandler} ref={monthlyBtn}>
          Monthly
        </button>
      </div>
    </div>
  );
};

export default Profile;
