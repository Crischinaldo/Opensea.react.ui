
import React from 'react';
import { Link } from "react-router-dom";
const AssetCard = (props) => {
    return (
        <article className="image-outer-wrapper">
            <article className="image-inner-wrapper">
            <Link to={props.internUrl} className="asset-anchor">
            <header className="asset-header"></header>
                <div className="asset-content">
                    <div className="asset-content-asset pl-md-5 embed-responsive embed-responsive-16by9">
                
                        <img
                        className='embed-responsive-item'
                        top 
                        src={props.image} 
                        alt={props.name}  />
                    </div>
                </div>
                <div className="asset-card-footer">
                    <div className="asset-card-footer-content">
                        <div className="asset-name-content">
                            <div className="asset-collection">
                                {props.collection}
                            </div>
                            <div className="asset-name">
                                {props.name}
                            </div>
                            <div className="asset-description">
                                {props.description}
                            </div>
                        </div>

                        <div className="asset-price-content">
                            <div className="asset-price-header">
                                price
                            </div>
                            <div className="asset-price">
                            <img alt="eth" src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" className="eth-logo"/>
                            {props.price == null ? "0.00" : props.price}
                            </div>
                        </div>

                    </div>
            </div>
            </Link>
            </article>
        </article>

    );

}

export default AssetCard;