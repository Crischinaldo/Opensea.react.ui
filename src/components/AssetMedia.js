import React from 'react';

const AssetCard = (props) => {
    return (
       
        <article className="media-outer-wrapper">
            <div className="item--media">
                <div className="item--flex">
                    <div className="item--image">
                        <img
                        className='item--image-img'
                        top 
                        src={props.image} 
                        alt={props.name}  />
                    </div>
                </div>
            </div>
        </article>

    );

}

export default AssetCard;