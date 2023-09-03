import classes from "./HomeMainPostText.module.css";
import { useState, useEffect } from "react";
import showProfile from "../../service/showProfile";

const HomeMainPostText = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    showProfile()
      .then((data) => {
        setName(data.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={classes.homeMainPostTextSection}>
        {name}님! <br />
        인기있는 매거진 이야기를 확인해보세요!
      </div>
    </>
  );
};

export default HomeMainPostText;
