import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import classes from "./AccordionList.module.css";
// import qnaData from "./dummy/qnaData.json";

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={classes.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={classes.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${classes.itemBtn} ${isEnter && classes.itemBtnExpanded}`,
    }}
    contentProps={{ className: classes.itemContent }}
    panelProps={{ className: classes.itemPanel }}
  />
);

// eslint-disable-next-line react/prop-types
const AccordionList = ({ dummyData }) => {
  return (
    <>
      <div className={classes.accordion}>
        <Accordion transition transitionTimeout={250}>
          {/* eslint-disable-next-line react/prop-types */}
          {dummyData.map((data, index) => (
            <AccordionItem
              key={index}
              header={
                <div>
                  {data.header}
                  {data.subHeader && (
                    <p className={classes.subHeader}>{data.subHeader}</p>
                  )}
                </div>
              }
            >
              {data.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default AccordionList;
