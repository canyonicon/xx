import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
// import { ReactComponent as Next } from "./assets/images/chevronDown.svg";
// import { ReactComponent as Prev } from "./assets/images/chevronUp.svg";
import "./assets/styles.css";

const VerticalCarousel = ({ data, heading }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item

  // get dynamic height of the image
  const itemHeight = 500; // document.querySelector(".carousel-item").clientHeight + 30;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });

    // reset the timeout function
    
  };

  // when componenet mounts, set a timeout to automatically move to the next item
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      handleClick("next");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

    
  return (
      <section className="outer-container row">
        
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center pe-md-5">
            <h2 className="title">{heading}</h2>
            <h3 className="custom-heading title my-4 ps-5">
                <span className="ps-5">
                    {data[activeIndex].introline}
                </span>
            </h3>

            <p className="text-center text-md-start">{data[activeIndex].content.copy}</p>

            <h5 className="title">
                {data[activeIndex].content.price_text}
                <span className="price">{data[activeIndex].content.price_amount}</span>
            </h5>
        </div>


        <div className="col-md-6 carousel-wrapper">
            {/* <button
                type="button"
                className="carousel-button prev btn btn-primary"
                onClick={() => handleClick("prev")}
            >
                    
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.3538 11.354C14.3073 11.4005 14.2522 11.4375 14.1914 11.4627C14.1307 11.4879 14.0655 11.5009 13.9998 11.5009C13.934 11.5009 13.8689 11.4879 13.8081 11.4627C13.7474 11.4375 13.6922 11.4005 13.6458 11.354L7.99978 5.70696L2.35378 11.354C2.30729 11.4004 2.2521 11.4373 2.19136 11.4625C2.13062 11.4876 2.06552 11.5006 1.99978 11.5006C1.93403 11.5006 1.86893 11.4876 1.80819 11.4625C1.74745 11.4373 1.69227 11.4004 1.64578 11.354C1.59929 11.3075 1.56241 11.2523 1.53725 11.1915C1.5121 11.1308 1.49915 11.0657 1.49915 11C1.49915 10.9342 1.5121 10.8691 1.53725 10.8084C1.56241 10.7476 1.59929 10.6924 1.64578 10.646L7.64578 4.64596C7.69222 4.5994 7.7474 4.56246 7.80814 4.53725C7.86889 4.51204 7.93401 4.49907 7.99978 4.49907C8.06555 4.49907 8.13067 4.51204 8.19141 4.53725C8.25216 4.56246 8.30733 4.5994 8.35378 4.64596L14.3538 10.646C14.4003 10.6924 14.4373 10.7476 14.4625 10.8083C14.4877 10.8691 14.5007 10.9342 14.5007 11C14.5007 11.0657 14.4877 11.1308 14.4625 11.1916C14.4373 11.2523 14.4003 11.3075 14.3538 11.354V11.354Z" fill="black"/>
                </svg>
            </button> */}

          <div className="carousel">
            
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <img
                  src={item.content.image}
                  alt={item.content.introline}
                  onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)+50}px)`,
                      borderRadius: "30px"
                    }}
                />

                ))}
              </div>
            </div>
          </div>

          {/* <button
            type="button"
            className="carousel-button next btn btn-primary"
            onClick={() => handleClick("next")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.64598 4.64604C1.69242 4.59948 1.7476 4.56253 1.80834 4.53733C1.86909 4.51212 1.93421 4.49915 1.99998 4.49915C2.06575 4.49915 2.13087 4.51212 2.19161 4.53733C2.25236 4.56253 2.30753 4.59948 2.35398 4.64604L7.99998 10.293L13.646 4.64604C13.6925 4.59955 13.7477 4.56267 13.8084 4.53752C13.8691 4.51236 13.9342 4.49941 14 4.49941C14.0657 4.49941 14.1308 4.51236 14.1916 4.53752C14.2523 4.56267 14.3075 4.59955 14.354 4.64604C14.4005 4.69253 14.4373 4.74772 14.4625 4.80846C14.4877 4.86919 14.5006 4.9343 14.5006 5.00004C14.5006 5.06578 14.4877 5.13088 14.4625 5.19162C14.4373 5.25236 14.4005 5.30755 14.354 5.35404L8.35398 11.354C8.30753 11.4006 8.25236 11.4375 8.19161 11.4628C8.13087 11.488 8.06575 11.5009 7.99998 11.5009C7.93421 11.5009 7.86909 11.488 7.80834 11.4628C7.7476 11.4375 7.69242 11.4006 7.64598 11.354L1.64598 5.35404C1.59942 5.30759 1.56247 5.25242 1.53727 5.19167C1.51206 5.13093 1.49908 5.06581 1.49908 5.00004C1.49908 4.93427 1.51206 4.86915 1.53727 4.80841C1.56247 4.74766 1.59942 4.69248 1.64598 4.64604V4.64604Z" fill="black"/>
            </svg>
          </button> */}
        </div>
        
      </section>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired
};

export default VerticalCarousel;
