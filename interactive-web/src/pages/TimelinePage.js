import React, { useState, useEffect } from "react";
import FooterComponent from "../component/FooterComponent";
import "../component/Posts.css";
import Carousel from "../component/Carousel";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import NavigationBar from "../component/NavigationBar";
import "./TimelinePage.css";


export default function TimelinePage() {
  
    var item = [{date: "2021-09-30", title: "Testing Title 1", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-01", title: "Testing Title 2", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-02", title: "Testing Title 3", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-03", title: "Testing Title 4", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-04", title: "Testing Title 5", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-05", title: "Testing Title 6", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-06", title: "Testing Title 7", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-07", title: "Testing Title 8", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-08", title: "Testing Title 9", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-09", title: "Testing Title 10", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."},
    {date: "2021-10-10", title: "Testing Title 11", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."}, ]
    return (
        <Layout>
          <NavigationBar/>
          <Content>
                  <Carousel items={item} active={0}/> 
            <FooterComponent/>
          </Content>
    
          {/* <FooterComponent /> */}
        </Layout>
      );
}