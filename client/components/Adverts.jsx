import React, { useState, useEffect } from 'react'

const adverts = [
    { url: '/images/good-dog-1.jpg', description: 'bestest dog' },
    // { url: '/images/partstrader-ad-1.png', description: 'ya boi'},
    { url: '/images/Cat-ad-1.jpg', description: 'Chonker cat'},
    { url: '/images/goose-ad-1-reworked.jpg', description: 'Pet a goose'},
    { url: '/images/garageimg-2-reworked.jpg', description: 'Family home'},
    { url: '/images/scoots-ad-2.jpg', description: 'Jeffmobile'},
]

const Advert = (props) => {
    const [currentAdvert, setCurrentAdvert] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(currentAdvert == adverts.length - 1) {
                setCurrentAdvert(0)
            } else {
                setCurrentAdvert(currentAdvert + 1);
            }
        }, 10000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, [currentAdvert]);

    return (
        <>
        <div className={`advert-banners advert-banners--${props.side}`}>
            { adverts.map((advert, i) => (
               <img 
                key={i}
                src={advert.url}
                alt={advert.description}
                className={i === currentAdvert ? 'current' : ''}
                />
            ))}
        </div>
        </>
    )
}

export default Advert