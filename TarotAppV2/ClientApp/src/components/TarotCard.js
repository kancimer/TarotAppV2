import React from 'react';

const TarotCard = (props) => { 
    <div >
        {/*
            props.map((item) => (item.ranking === 0)
                ? <Item key={`item-${item.id}`} item={item} drag={drag}
                    itemImgObj={imgArr.find(o => o.id === item.imageId)} />
                : null)
        */}
        <h2>{props.name}</h2>
    </div>

}

export default TarotCard;