import HeaderLayout from "../common/HeaderLayout";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import classes from "./Store.module.css";
import StoreSearching from "./StoreSearching";
import StorePopular from "./StorePopular";
import StoreOther from "./StoreOther";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "../../constants/url";

const Store = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 페이지 전환 애니메이션 효과 정의
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.1 },
    },
  };

  // 데이터를 가져오는 함수 정의
  const fetchData = useCallback(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((response) => {
        // 모든 products를 가져옴
        const allProducts = response.data.list;

        // viewCount가 많은 상위 3개만 추출해 popularProducts에 저장
        const sortedProducts = allProducts.sort(
          (a, b) => b.viewCount - a.viewCount
        );
        setPopularProducts(sortedProducts.slice(0, 3));

        // popularProducts를 제외한 나머지 products를 추출해 otherProducts에 저장
        setOtherProducts(sortedProducts.slice(3, sortedProducts.length));
      })
      .catch((error) => {
        // API 요청이 실패한 경우 에러를 콘솔에 기록합니다.
        console.error("API 요청 실패:", error);
      })
      .finally(() => {
        setIsLoading(false); // 데이터 로딩 완료 후 isLoading을 false로 설정
      });
  }, []);

  // 데이터를 가져오는 효과 함수를 실행
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <HeaderLayout title="Store" />
      <motion.main
        className={classes.main}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <section className={classes.searchingSection}>
          <StoreSearching />
        </section>
        <section className={classes.popularSection}>
          {/* popularProducts 데이터가 있을 때만 StorePopular 컴포넌트 렌더링 */}
          {popularProducts.length > 0 && (
            <StorePopular products={popularProducts} isLoading={isLoading} />
          )}
        </section>
        <section className={classes.otherSection}>
          {/* otherProducts 데이터가 있을 때만 StoreOther 컴포넌트 렌더링 */}
          {otherProducts.length > 0 && (
            <StoreOther products={otherProducts} isLoading={isLoading} />
          )}
        </section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Store;
