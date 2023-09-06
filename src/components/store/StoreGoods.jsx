import classes from "./StoreGoods.module.css";

// eslint-disable-next-line react/prop-types
const StoreGoods = ({ props }) => {
  // eslint-disable-next-line react/prop-types
  const { isRank, productRank, imagePath, productName, price, isLoading } =
    props;
  return (
    <>
      <div className={classes.cardComponentWrapper}>
        {isRank && <div className={classes.cardBadge}>{productRank}</div>}
        <div className={classes.card}>
          {isLoading ? (
            // 로딩 중인 경우 빈 카드 이미지 표시
            <div
              className={classes.cardPhoto}
              style={{
                top: !price ? "5px" : null,
              }}
            />
          ) : (
            // 이미지 경로를 가진 카드 이미지 표시
            <div
              className={classes.cardPhotos}
              style={{
                backgroundImage: `url(${imagePath})`,
                top: !price ? "5px" : null,
              }}
            />
          )}

          <div
            className={classes.cardMainText}
            style={!price ? { margin: 0, top: 0 } : null}
          >
            {productName}
          </div>
          {price && (
            // 가격이 존재하는 경우, 가격 정보 표시
            <div className={classes.cardSubText}>{price.toLocaleString()}P</div>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreGoods;
