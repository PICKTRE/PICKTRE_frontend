import Footer from "../common/Footer";
import classes from "./Setting.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import HeaderLayout from "../common/HeaderLayout";

const contentVariants = {
    hidden: {
        opacity: 0.3,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5 },
    },
};



const Setting = () => {
    const navigate = useNavigate();

    const onClickAlert = () => {
        if( confirm("로그아웃 하시겠습니까?") ) {
            localStorage.removeItem("memberId");
            alert("로그아웃 되었습니다.");
            navigate("/");
        }
    }
    

    return (
        <>
            <HeaderLayout title="Setting" />
            <motion.main
                className={classes.main}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <ul className={classes.firstList}>
                    <li onClick={onClickAlert}>
                        <div className={classes.listTitle}>
                            로그아웃 하기
                        </div>
                        <IoIosArrowForward size="27" color="#ACE2B5" />
                    </li>
                </ul>
            </motion.main>
            <Footer />
        </>
    )
}

export default Setting;