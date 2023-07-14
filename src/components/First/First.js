import React from "react";
import "./../First/First.css";
import Tabinfo from "./Tabs/Tabinfo";
import Tabs1 from "./Tabs/Tabs1";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const First = () => {
  return (
    <div className="tabs-container">
      <Tabs className="tabs-area">
        <TabList className="tab-list">
          <Tab className={"tab"}>Domains</Tab>
          <Tab className={"tab"}>Web Hosting</Tab>
          <Tab className={"tab"}>Dedicated Server</Tab>
          <Tab className={"tab"}>Virtual Cloud Servers</Tab>
          <Tab className={"tab"}>WordPress Hosting</Tab>
          <Tab className={"tab"}>Email Hosting</Tab>
          <Tab className={"tab"}>Vps Hosting Servers</Tab>
          <Tab className={"tab"}>Free Hosting</Tab>
        </TabList>

        <TabPanel>
          <div className="tabinfo">
            {Tabinfo.map((tabinfo) => (
              <Tabs1
                key={tabinfo.domain}
                domain={tabinfo.domain}
                price={tabinfo.price}
                oldp={tabinfo.oldp}
              />
            ))}
            <div />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Web Hosting</h2>
        </TabPanel>
        <TabPanel>
          <h2>Dedicated Servers</h2>
        </TabPanel>
        <TabPanel>
          <h2>Virtual Cloud Servers</h2>
        </TabPanel>
        <TabPanel>
          <h2>Email Hosting</h2>
        </TabPanel>
        <TabPanel>
          <h2>Free Hosting</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default First;
