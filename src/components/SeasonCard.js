import React from 'react';

const SeasonCard = (props) => {

    return (
       
        <article className="season-small-outer-wrapper">
            <article className="season-small-inner-wrapper">
            <a href={props.seasonHref} class="season-small-anchor">
            <header class="season-small-header">
            <div className="season-small-name">
                {props.name}
            </div>
            </header>
            
                <div className="season-small-content">
                    <div className="season-small-content-asset pl-md-5 embed-responsive embed-responsive-16by9">
                        <img
                        className='embed-responsive-item'
                        top 
                        src={props.image} 
                        alt={props.name}  />

                    </div>
                </div>
                <div className="season-small-card-footer">
                    <div className="season-small-card-footer-content">
                    <div className="season-small-description">
                        {props.description}
            </div>

                    </div>
            </div>
            </a>
            </article>
        </article>
    );
}

export default SeasonCard;