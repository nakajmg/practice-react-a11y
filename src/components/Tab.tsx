import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactChild;
}

const Tab: React.FC<Props> = ({ className }) => {
  const tabs = [
    {
      key: "tab1",
      label: "tab1",
    },
    {
      key: "tab2",
      label: "tab2",
    },
    {
      key: "tab3",
      label: "tab3",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].key);

  const onClickTab = (key: string) => {
    setSelectedTab(key);
  };
  const isSelected = (key: string) => key === selectedTab;

  return (
    <section className={className}>
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            className={`tab ${isSelected(tab.key) ? "selected" : ""}`}
            onClick={() => onClickTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="contents">
        {tabs.map((tab) => (
          <div className={`content ${isSelected(tab.key) ? "selected" : ""}`}>
            アクティブ{tab.label}
          </div>
        ))}
      </div>
    </section>
  );
};

const StyledTab = styled(Tab)`
  .tabs {
    display: flex;
  }
  .tab {
    &.selected {
      background-color: #000;
      color: #fff;
    }
  }
  .content {
    display: none;
    &.selected {
      display: block;
    }
  }
`;

export default StyledTab;
