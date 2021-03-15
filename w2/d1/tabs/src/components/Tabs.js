import React, { useState } from "react";

const Tabs = (props) => {
  const tabsArr = props.tabs;
  const [activeTab, setActiveTab] = useState(tabsArr[0].content);

  const tabClick = (e, content) => {
    console.log(e);
    setActiveTab(content);
  };

  const tabsButtons = tabsArr.map((tab, i) => {
    return (
      <button key={i} onClick={(e) => tabClick(e, tab.content)}>
        {tab.label}
      </button>
    );
  });

  return (
    <div>
      <div>{tabsButtons}</div>
      <div>
        <p>{activeTab}</p>
      </div>
    </div>
  );
};

export default Tabs;
