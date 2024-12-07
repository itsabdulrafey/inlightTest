import React, { useState } from "react";
import testimage from "./Images/testimage.jpg";
import star from "./Images/Stars.svg";
import Vector from "./Images/Vector.svg";
import Slider from "@mui/material/Slider";
import { motion } from "framer-motion"; // Import framer-motion for animations
import CarouselNavigationButton from "./CarouselNavigationButton";

// Custom Thumb using styled-components

function valuetext(value) {
  return `${value}`;
}
function InlightTest() {
  const carddata = [
    {
      id: 1,
      image: testimage,
      title: "Love 3 - Nintendo Switch",
      platforms: "PS4 | PS5",
      rating: 4.9,
      reviews: 27,
      price: 20.99,
      originalPrice: 39.99,
    },
    {
      id: 2,
      image: testimage,
      title: "Super Mario Odyssey",
      platforms: "Nintendo Switch",
      rating: 4.8,
      reviews: 102,
      price: 34.99,
      originalPrice: 59.99,
    },
    {
      id: 3,
      image: testimage,
      title: "The Legend of Zelda: Breath of the Wild",
      platforms: "Nintendo Switch | Wii U",
      rating: 5.0,
      reviews: 500,
      price: 49.99,
      originalPrice: 69.99,
    },
    {
      id: 4,
      image: testimage,
      title: "Uncharted 4: A Thief's End",
      platforms: "PS4",
      rating: 4.7,
      reviews: 315,
      price: 19.99,
      originalPrice: 39.99,
    },
    {
      id: 5,
      image: testimage,
      title: "Red Dead Redemption 2",
      platforms: "PS4 | Xbox One",
      rating: 4.9,
      reviews: 128,
      price: 29.99,
      originalPrice: 59.99,
    },
    {
      id: 6,
      image: testimage,
      title: "Cyberpunk 2077",
      platforms: "PS5 | Xbox Series X",
      rating: 3.9,
      reviews: 820,
      price: 39.99,
      originalPrice: 69.99,
    },
    {
      id: 7,
      image: testimage,
      title: "FIFA 22",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.5,
      reviews: 200,
      price: 49.99,
      originalPrice: 79.99,
    },
    {
      id: 8,
      image: testimage,
      title: "Call of Duty: Vanguard",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.3,
      reviews: 150,
      price: 59.99,
      originalPrice: 89.99,
    },
    {
      id: 9,
      image: testimage,
      title: "Call of Duty: Vanguard",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.3,
      reviews: 150000,
      price: 59.99,
      originalPrice: 89.99,
    },
    {
      id: 10,
      image: testimage,
      title: "Minecraft",
      platforms: "PC | PS4 | Xbox One | Switch",
      rating: 4.7,
      reviews: 800,
      price: 26.99,
      originalPrice: 39.99,
    },
    {
      id: 11,
      image: testimage,
      title: "Fortnite",
      platforms: "PC | PS5 | Xbox Series X | Switch",
      rating: 4.5,
      reviews: 10000,
      price: 0.0,
      originalPrice: 0.0,
    },
    {
      id: 12,
      image: testimage,
      title: "The Witcher 3: Wild Hunt",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.9,
      reviews: 10000,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 13,
      image: testimage,
      title: "Halo Infinite",
      platforms: "Xbox Series X | PC",
      rating: 4.6,
      reviews: 2500,
      price: 59.99,
      originalPrice: 69.99,
    },
    {
      id: 14,
      image: testimage,
      title: "Spider-Man: Miles Morales",
      platforms: "PS4 | PS5",
      rating: 4.8,
      reviews: 2500,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 15,
      image: testimage,
      title: "GTA V",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.7,
      reviews: 30000,
      price: 29.99,
      originalPrice: 59.99,
    },
    {
      id: 16,
      image: testimage,
      title: "Madden NFL 22",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.4,
      reviews: 400,
      price: 59.99,
      originalPrice: 79.99,
    },
    {
      id: 17,
      image: testimage,
      title: "Doom Eternal",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.7,
      reviews: 2200,
      price: 49.99,
      originalPrice: 69.99,
    },
    {
      id: 18,
      image: testimage,
      title: "Assassin's Creed Valhalla",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.8,
      reviews: 1500,
      price: 59.99,
      originalPrice: 79.99,
    },
    {
      id: 19,
      image: testimage,
      title: "Watch Dogs: Legion",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.4,
      reviews: 800,
      price: 49.99,
      originalPrice: 69.99,
    },
    {
      id: 20,
      image: testimage,
      title: "The Elder Scrolls V: Skyrim",
      platforms: "PC | PS4 | Xbox One",
      rating: 4.9,
      reviews: 3500,
      price: 19.99,
      originalPrice: 29.99,
    },
    {
      id: 21,
      image: testimage,
      title: "Resident Evil Village",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.8,
      reviews: 1000,
      price: 59.99,
      originalPrice: 79.99,
    },
    {
      id: 22,
      image: testimage,
      title: "Borderlands 3",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.5,
      reviews: 2200,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 23,
      image: testimage,
      title: "Far Cry 6",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.3,
      reviews: 1500,
      price: 59.99,
      originalPrice: 79.99,
    },
    {
      id: 24,
      image: testimage,
      title: "The Division 2",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.6,
      reviews: 1800,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 25,
      image: testimage,
      title: "Need for Speed Heat",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.5,
      reviews: 1300,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 26,
      image: testimage,
      title: "FIFA 21",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.6,
      reviews: 1500,
      price: 49.99,
      originalPrice: 79.99,
    },
    {
      id: 27,
      image: testimage,
      title: "NBA 2K21",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.4,
      reviews: 1000,
      price: 59.99,
      originalPrice: 79.99,
    },
    {
      id: 28,
      image: testimage,
      title: "Monster Hunter: World",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.8,
      reviews: 2500,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 29,
      image: testimage,
      title: "Star Wars: Jedi Fallen Order",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.7,
      reviews: 1800,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 30,
      image: testimage,
      title: "Dragon Age: Inquisition",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.8,
      reviews: 1600,
      price: 19.99,
      originalPrice: 39.99,
    },
    {
      id: 31,
      image: testimage,
      title: "Civilization VI",
      platforms: "PC | Switch",
      rating: 4.7,
      reviews: 1300,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 32,
      image: testimage,
      title: "The Sims 4",
      platforms: "PC | PS4 | Xbox One",
      rating: 4.5,
      reviews: 2200,
      price: 19.99,
      originalPrice: 39.99,
    },
    {
      id: 33,
      image: testimage,
      title: "Hitman 3",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 4.8,
      reviews: 800,
      price: 49.99,
      originalPrice: 69.99,
    },
    {
      id: 34,
      image: testimage,
      title: "Tomb Raider: Definitive Edition",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.6,
      reviews: 1500,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 35,
      image: testimage,
      title: "Assassin's Creed Odyssey",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.7,
      reviews: 2000,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 36,
      image: testimage,
      title: "Battlefield 2042",
      platforms: "PS5 | Xbox Series X | PC",
      rating: 3.9,
      reviews: 1000,
      price: 59.99,
      originalPrice: 79.99,
    },
    {
      id: 37,
      image: testimage,
      title: "Overwatch",
      platforms: "PC | PS4 | Xbox One",
      rating: 4.8,
      reviews: 10000,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 38,
      image: testimage,
      title: "Destiny 2",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.7,
      reviews: 8000,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 39,
      image: testimage,
      title: "The Outer Worlds",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.6,
      reviews: 1500,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 40,
      image: testimage,
      title: "Control",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.7,
      reviews: 1200,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 41,
      image: testimage,
      title: "Horizon Zero Dawn",
      platforms: "PS4 | PC",
      rating: 4.9,
      reviews: 1500,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 42,
      image: testimage,
      title: "Ratchet & Clank: Rift Apart",
      platforms: "PS5",
      rating: 4.9,
      reviews: 800,
      price: 69.99,
      originalPrice: 79.99,
    },
    {
      id: 43,
      image: testimage,
      title: "Gran Turismo 7",
      platforms: "PS5",
      rating: 4.7,
      reviews: 900,
      price: 59.99,
      originalPrice: 79.99,
    },
    {
      id: 44,
      image: testimage,
      title: "NBA 2K20",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.5,
      reviews: 1300,
      price: 19.99,
      originalPrice: 39.99,
    },
    {
      id: 45,
      image: testimage,
      title: "Apex Legends",
      platforms: "PC | PS4 | Xbox One",
      rating: 4.7,
      reviews: 5000,
      price: 0.0,
      originalPrice: 0.0,
    },
    {
      id: 46,
      image: testimage,
      title: "Rainbow Six Siege",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.6,
      reviews: 3000,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 47,
      image: testimage,
      title: "No Man's Sky",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.5,
      reviews: 4000,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 48,
      image: testimage,
      title: "The Last of Us Part II",
      platforms: "PS4",
      rating: 4.9,
      reviews: 2000,
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 49,
      image: testimage,
      title: "Gears 5",
      platforms: "Xbox One | PC",
      rating: 4.7,
      reviews: 1800,
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 50,
      image: testimage,
      title: "Shadow of the Tomb Raider",
      platforms: "PS4 | Xbox One | PC",
      rating: 4.6,
      reviews: 1200,
      price: 29.99,
      originalPrice: 49.99,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Show only one item at a time

  const handleSliderChange = (event, newValue) => {
    const maxIndex = carddata.length - itemsPerPage;

    // Ensure newValue doesn't exceed maxIndex, allowing it to go to the very end.
    setCurrentIndex(Math.min(newValue, maxIndex));
  };

  const CustomThumb = (props) => {
    const { style, ...rest } = props; // Extracting other props and style
    return (
      <span
        {...rest} // Rest of the props for Slider functionality
        style={{
          ...style, // Apply any default style
          width: "50px", // Set thumb size (adjust as per your image)
          height: "50px",
          // borderRadius: "50%", // Make it circular
          backgroundImage: `url(${Vector})`, // Your custom image
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "none", // Remove any shadow
          cursor: "pointer", // To make it draggable
          position: "absolute", // Ensure it moves on the track
          bottom: 10,
        }}
      />
    );
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move one item back
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < carddata.length) {
      setCurrentIndex(currentIndex + 1); // Move one item forward
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "ButtonFace",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontWeight: 700, fontSize: 32 }}>
            Recently Viewed Items
          </span>
        </div>
        <div
          style={{
            position: "relative",
            // backgroundColor: "red",
            width: "60%",
          }}
        >
          {/* Left Arrow Button */}
          {/* <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            &#8592;
          </button> */}
          <CarouselNavigationButton
            direction="prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            position="left"
          />
          {/* Product Cards with Motion */}
          <div
            style={{
              display: "flex",
              gap: 16,
              overflowX: "hidden", // No horizontal scroll
              paddingBottom: 20,
            }}
          >
            {carddata
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    width: 250,
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #ccc",
                    borderRadius: 8,
                    overflowY: "auto", // This makes the div scrollable
                    maxHeight: 400, // Set a max height for the scroll effect
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: 10,
                  }}
                >
                  <img
                    src={product.image}
                    alt="Product"
                    style={{
                      width: "100%",
                      height: 150,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <hr
                    style={{ border: "1px solid #f0f0f0", margin: "10px 0" }}
                  />
                  <span
                    style={{ fontSize: 16, fontWeight: 600, color: "#333" }}
                  >
                    {product.title}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <span style={{ fontSize: 14, color: "#777" }}>
                      {product.platforms}
                    </span>
                    <img src={star} alt="Rating" height={14} width={14} />
                    <span style={{ fontWeight: 700, marginLeft: 5 }}>
                      {product.rating}
                    </span>
                    <span
                      style={{ fontSize: 12, color: "#777", marginLeft: 5 }}
                    >
                      ({product.reviews} Reviews)
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <span
                      style={{ fontSize: 20, fontWeight: 700, color: "#333" }}
                    >
                      ${product.price.toFixed(2)}
                    </span>
                    <span
                      style={{
                        color: "#888",
                        fontSize: 18,
                        fontWeight: 400,
                        textDecoration: "line-through",
                        marginLeft: 8,
                      }}
                    >
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Right Arrow Button */}
          <CarouselNavigationButton
            direction="next"
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= carddata.length}
            position="right"
          />
        </div>
      </div>

      <div
        style={{
          // backgroundColor: "red",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",

            width: "60%",
            // backgroundColor: "GrayText",
          }}
        >
          <Slider
            aria-label="Product Slider"
            value={currentIndex}
            onChange={handleSliderChange}
            step={1}
            min={0}
            max={carddata.length - itemsPerPage}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `Item ${value + 1}`} // Showing the index of the item
            sx={{
              marginTop: 10,
              "& .MuiSlider-rail": {
                backgroundColor: "#d3d3d3", // Rail color
              },
              "& .MuiSlider-track": {
                backgroundColor: "#3f51b5", // Track color
              },
            }}
            components={{
              Thumb: CustomThumb, // Use the custom thumb here
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default InlightTest;
