import React, { useState, useEffect } from 'react'

const bottomAdverts = [
    { url: '/images/goose-bottom-1.jpg', description: 'very nice goose'},
    { url: '/images/snag-1.jpg', description: 'snags for dayz'},
    { url: '/images/boop-dog-1.png', description: 'heckin booped'},
]

const AdvertsBottom = (props) => {

      const [currentBottomAdvert, setCurrentBottomAdvert] = useState(0)

      useEffect(() => {
          const timeout = setTimeout(() => {
            if(currentBottomAdvert == bottomAdverts.length - 1){
                setCurrentBottomAdvert(0)
            } else {
                setCurrentBottomAdvert(currentBottomAdvert + 1)
            }
          }, 10000)

          return () => {
              clearTimeout(timeout)
          }
      }, [currentBottomAdvert])

    return (
        <>
        <div className={`advert-banners advert-banners--${props.side}`}>
            { bottomAdverts.map((advert, i) => (
               <img className='img-bottom'
                key={i}
                src={advert.url}
                alt={advert.description}
                className={i === currentBottomAdvert ? 'current' : ''}
                />
            ))}
        </div>
        </>
    )
}

{/* <AdvertsBottom side='bottom' /> */}

export default AdvertsBottom