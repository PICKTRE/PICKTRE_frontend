import classes from "./StoreOther.module.css";
import StoreDividingLine from "./StoreDividingLine";
import StoreGoods from "./StoreGoods";
import StoreGoodsModal from "./modal/StoreGoodsModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/url";

// eslint-disable-next-line react/prop-types
const StoreOther = ({ products }) => {
  const msrl = localStorage.getItem("memberId");

  // 각 상품에 대한 모달 상태 배열
  const [modalOpenStates, setModalOpenStates] = useState(
    // eslint-disable-next-line react/prop-types
    new Array(products.length).fill(false)
  );

  const [productId, setProductId] = useState(0);
  const [userName, setUserName] = useState("");
  const [rewardPoint, setRewardPoint] = useState(0);

  // 모달 열기/닫기 함수
  const toggleModal = (index) => {
    // eslint-disable-next-line react/prop-types
    setProductId(products[index].productId); // 모달 열 때 productId 설정
    const updatedStates = [...modalOpenStates];
    updatedStates[index] = !updatedStates[index];
    setModalOpenStates(updatedStates);
  };

  // 상품 주문 함수
  const orderGoods = () => {
    axios
      .post(`${BASE_URL}/orders`, {
        memberId: msrl,
        productId: productId,
        quantity: 1,
        useRewardPoints: 1,
      })
      .then((response) => {
        alert("주문이 성공적으로 완료되었습니다.");
        console.log("주문이 성공적으로 완료되었습니다.", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/members/${msrl}`) // GET 요청 보내기
      .then((response) => {
        setUserName(response.data.data.username);
        setRewardPoint(response.data.data.rewardPoints);
      })
      .catch((error) => {
        // API 요청이 실패한 경우
        console.error("API 요청 실패:", error);
      });
  }, []);

  return (
    <>
      <div>
        <div className={classes.otherDividingSection}>
          <StoreDividingLine text="Other" />
        </div>
        <div className={classes.otherGoods}>
          {/* eslint-disable-next-line react/prop-types */}
          {products.map((product, index) => (
            <div key={index} onClick={() => toggleModal(index)}>
              <StoreGoods
                key={index}
                imagePath={product.imagePath}
                price={product.price}
                productName={product.productName}
              />
              <StoreGoodsModal
                isOpen={modalOpenStates[index]}
                setIsOpen={(value) =>
                  setModalOpenStates((prevStates) => {
                    const updatedStates = [...prevStates];
                    updatedStates[index] = value;
                    if (value === true) {
                      orderGoods();
                    }
                    return updatedStates;
                  })
                }
                productName={product.productName}
                price={product.price}
                quantity={product.quantity}
                userName={userName}
                rewardPoint={rewardPoint}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreOther;
