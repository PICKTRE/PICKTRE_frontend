import classes from "./HeaderLayout.module.css";
import Header from "./Header";

const HeaderLayout = (props) => {
  const { title } = props; // 새로운 props로부터 title 값을 가져옵니다.

  return (
    <header className={classes.header}>
      <Header />
      <section className={classes.subHeader}>
        <article className={classes.pageHeader}>{title}</article>
      </section>
    </header>
  );
};

export default HeaderLayout;
