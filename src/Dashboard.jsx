import React from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard |Gadget</title>
      </Helmet>
      <div className="bg-primary ">
        <div className="w-10/12 mx-auto">
          <div className=" text-white">
            <h1 className="text-3xl font-bold text-center pt-9">Dashboard</h1>
            <p className="text-center pt-6 pb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            
          </div>
          <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
