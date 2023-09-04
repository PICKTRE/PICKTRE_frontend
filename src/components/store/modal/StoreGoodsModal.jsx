import classes from "./StoreGoodsModal.module.css";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
const StoreGoodsModal = ({
  isOpen,
  setIsOpen,
  productName,
  price,
  quantity,
  userName,
  rewardPoint,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={setIsOpen} className={classes.dialog}>
          <div>
            <Dialog.Overlay />
            <div className={classes.dialogOverlay} aria-hidden="true">
              <div></div>
            </div>

            <motion.div
              className={classes.motionDiv}
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}
            >
              <span aria-hidden="true">&#8203;</span>

              <div
                className={classes.modalHeadLine}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className={classes.modalInbox}>
                  <div className={classes.modalInboxFlex}>
                    <div className={classes.modalInboxText}>
                      <Dialog.Title
                        className={classes.dialogTitle}
                        id="modal-headline"
                      >
                        물건 구매하기
                      </Dialog.Title>
                      <div className="mt-2">
                        <Dialog.Description
                          as="div"
                          className={classes.dialogDescription}
                        >
                          물건 이름: {productName} <br />
                          가격: {price} <br />
                          남은 수량: {quantity} <br />
                          <div className={classes.dividerLine} />
                          구매자 이름: {userName} <br />
                          구매자의 남은 포인트: {rewardPoint} <br />
                          구매 후 잔여 포인트: {rewardPoint - price}
                        </Dialog.Description>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.buttonSection}>
                  <button
                    type="button"
                    tabIndex={0}
                    className={classes.buttonBuy}
                    onClick={() => setIsOpen(true)}
                  >
                    구매하기
                  </button>
                  <button
                    type="button"
                    tabIndex={0}
                    className={classes.buttonCancel}
                    onClick={() => setIsOpen(false)}
                  >
                    취소
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default StoreGoodsModal;
