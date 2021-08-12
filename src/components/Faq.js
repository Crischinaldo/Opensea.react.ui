import {
    Container,
  } from "reactstrap";
import React, { useState , Component, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Faq from 'react-faq-component';

const FAQ = (props) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
      });
    
    const [visible, setVisible] = useState("is-not-visible");
    
    if (!(visible === "is-visible") && inView) {
        setVisible("is-visible");
    }
    const data = {
        rows: [
            {
                title: "what is a NFT?",
                content: `an NFT is a digital asset that represents real-world objects like art, music, in-game items and videos.
                NFTs are based on a Blockchain, often on the Ethereum blockchain. `,
            },
            {
                title: "can someone download my NFT and pretend its his?",
                content:
                    "your NFT is on the Internet, people can screenshot or download it, but no one else can pretend that he owns hat nft. With your purchase on the Blockchain, people can see that you bought the nft.",
            },
            {
                title: "will my NFT change in price?",
                content: `after you purchased the NFT, you can decide what to do with it. you can give your nft any price or value.`,
            },
            {
                title: "is the NFT time limited?",
                content: `no, the NFT is as long as the ethereum blockchain is still active there. be sure you keep your ethereum wallet information safe and secure.`,
            },
        ],
    };
    
    const styles = {
        bgColor: 'transparent',
        titleTextColor: "white",
        rowTitleColor: "#e61873",
        rowContentColor: 'white',
        arrowColor: "#580231",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div id="faq" ref={ref} className={"section faq-section component-transition section-l " + visible}>
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
