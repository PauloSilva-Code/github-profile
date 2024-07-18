import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";

export const WrapperTabs = styled(Tabs)`
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  background-color: #eee;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-radius: 16px 16px 0 0;
    border-bottom: 1px solid white;
  }
`;

export const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.3);
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
