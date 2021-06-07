import * as icoMoon from 'react-icons-kit/icomoon';
import classnames from "classnames";
import Icon from 'react-icons-kit';
import {
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
import React, { useState , Component, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { user } from 'react-icons-kit/icomoon';

import Faq from "react-faq-component";

const FAQ = (props) => {

    const { ref, inView, entry } = useInView({
        threshold: 0,
      });
    
    const [visible, setVisible] = useState("is-not-visible");
    
    if (!(visible === "is-visible") && inView) {
        setVisible("is-visible");
    }

    const [iconTabs, setIconsTabs] = React.useState(1);
    const [textTabs, setTextTabs] = React.useState(1);

    const data = {
        title: "General Information",
        rows: [
            {
                title: "What is an NFT?",
                content: `An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos.
                NFTs are based on a Blockchain, often on the Ethereum blockchain. `,
            },
            {
                title: "Can someone download my NFT and pretend its his?",
                content:
                    "Your NFT is on the Internet, people can screenshot or download it, but no one else can pretend that he owns hat nft. With your purchase on the Blockchain, people can see that you bought the nft.",
            },
            {
                title: "Will my NFT change in price?",
                content: `After you purchased the nft, you can decide what to do with it. You can give your nft any price or value.`,
            },
            {
                title: "Ist he NFT time limited?",
                content: `No, the nft is as long as the ethereum blockchain is still active there. Be sure you keep your ethereum wallet information safe and secure.`,
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "#ffffffcc",
        rowTitleColor: "#ffffffcc",
        bgColor: "#580231"
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div ref={ref} className={"section component-transition section-l " + visible}>
        <Container>
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </Container>
      </div>
                        
       
            
  
         
    );
}
export default FAQ;
