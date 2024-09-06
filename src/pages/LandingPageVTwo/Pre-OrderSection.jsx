import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import Header from "../../components/Header/Header";
import Footer from "components/Footer/Footer";
import CardContainer from "testAnimation";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import tick from "../../assets/images/tick.png";
import { Link, useNavigate } from "react-router-dom";
const PreOrderSection = ({value2,handleChange2}) => {
     const CustomTab = styled(Tab)(({ theme }) => ({
          "&.Mui-selected": {
            color: "green",
            fontWeight: "bold",
          },
        }));
  return (
    <>
       <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    
                  }}
                 
                  className="flex flex-col w-full mx-auto md:p-5 max-w-[1318px]"
                >
                  <div style={{ margin: 50 }}>
                    <div className="flex flex-col items-start gap-[22px]">
                      <Text
                        size="xl"
                        as="p"
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: 40,
                        }}
                      >
                        PRE ORDER
                      </Text>
                    </div>
                    <div style={{marginTop:15}} className="flex flex-col items-start gap-[22px]">
                      <Text
                        size="xl"
                        as="p"
                        style={{ fontSize: 20 }}
                        className="!text-blue_gray-400 tracking-[0.96px]"
                      >
                        Starting at est. $199 - Prices are estimates
                      </Text>
                    </div>

                    <div style={{ display: "flex" }}>
                      <div>
                      <AppBar
  position="static"
  color="default"
  style={{ boxShadow: "none", background: "none" }}
>
  <Tabs
    value2={value2}
    onChange={handleChange2}
    textColor="primary"
    orientation="vertical"
    sx={{
      "& .MuiTabs-indicator": {
        display: "none", // Hide the default indicator
      },
      "& .MuiTabs-flexContainer": {
        flexDirection: "column",
      },
    }}
    style={{
      minHeight: "unset",
    }}
  >
    <CustomTab
      label={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // borderRight: "2px solid #4F805D", // Customize right border color
            // borderBottom: "2px solid #4F805D", // Customize bottom border color
            padding: "5px", // Reduce padding to decrease height
            margin: "5px 0", // Reduce margin to decrease height
            borderRadius: "4px",
            width: 150,
          }}
        >
          <Typography
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "bold",
              color: "#EA9E52",
            }}
          >
            $199*
          </Typography>
          <Typography
            style={{
              textTransform: "none",
              color: "black",
              fontSize: 20,
            }}
          >
            eFX Plus HD
          </Typography>
        </Box>
      }
    />
    <CustomTab
      label={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // borderRight: "2px solid #4F805D", // Customize right border color
            // borderBottom: "2px solid #4F805D", // Customize bottom border color
            padding: "5px", // Reduce padding
            margin: "5px 0", // Reduce margin
            borderRadius: "4px",
            width: 150,
          }}
        >
          <Typography
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "bold",
              color: "#EA9E52",
            }}
          >
            $299*
          </Typography>
          <Typography
            style={{
              textTransform: "none",
              color: "black",
              fontSize: 20,
            }}
          >
            eFX Edge
          </Typography>
        </Box>
      }
    />
    <CustomTab
      label={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // borderRight: "2px solid #4F805D", // Customize right border color
            // borderBottom: "2px solid #4F805D", // Customize bottom border color
            padding: "5px", // Reduce padding
            margin: "5px 0", // Reduce margin
            borderRadius: "4px",
            width: 150,
          }}
        >
          <Typography
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "bold",
              color: "#EA9E52",
            }}
            variant="body2"
          >
            $399*
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "black",
              fontSize: 20,
              textTransform: "none",
            }}
          >
            eFX Alpha
          </Typography>
        </Box>
      }
    />
    <CustomTab
      label={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // borderRight: "2px solid #4F805D", // Customize right border color
            // borderBottom: "2px solid #4F805D", // Customize bottom border color
            padding: "5px", // Reduce padding
            margin: "5px 0", // Reduce margin
            borderRadius: "4px",
            width: 150,
          }}
        >
          <Typography
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "bold",
              color: "#EA9E52",
            }}
            variant="body2"
          >
            $899*
          </Typography>
          <Typography
            variant="body1"
            style={{
              textTransform: "none",
              color: "black",
              fontSize: 20,
            }}
          >
            eFX Apex
          </Typography>
        </Box>
      }
    />
  </Tabs>
</AppBar>


                      </div>

                      <div style={{marginLeft:80}}>
                        <div
                          style={{ marginTop: 30 }}
                          className="flex flex-col items-start gap-[22px]"
                        >
                          <Typography
                            style={{
                              fontSize: 24,
                              color: "#4F805D",
                              fontWeight: "bold",
                              alignSelf: "center",
                              textTransform: "uppercase",
                            }}
                            className="tracking-[0.96px]"
                          >
                            Pre-Ordering guarantees
                          </Typography>
                          <List style={{ paddingLeft: 24 }}>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="Grant a 25% discount on the final retail prices for continuous subscriptions"
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="Full access for the first month"
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="No higher monthly charge at service initiation."
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={tick}
                                alt="Tick icon"
                                style={{ marginTop: 10, marginRight: 10 }}
                              />
                              <ListItemText
                                primary="Pre-orders may qualify for lower prices."
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: 24,
                                    color: "black",
                                    className: "tracking-[0.96px]",
                                  },
                                }}
                              />
                            </ListItem>
                            <div
                              style={{
                                flexDirection: "row",
                                display: "flex",
                                justifyContent: "space-between",
                                height: "100%",
                                marginTop: 70,
                              }}
                              className="flex flex-col items-start w-full gap-[29px]"
                            >
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <Button
                                  shape="round"
                                  className="sm:px-5 tracking-[3.20px] uppercase min-w-[250px]"
                                >
                                  Place Pre-Order
                                </Button>
                              </div>
                              <div className="flex self-stretch justify-between items-start gap-5">
                                <div className="flex flex-row gap-5">
                                  <div className="flex flex-col gap-5">
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-black-900 tracking-[6.40px] uppercase"
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 24,
                                        }}
                                      >
                                        Due Today
                                      </Text>
                                    </a>
                                    <Text
                                      size="s"
                                      as="p"
                                      className="!text-blue_gray-400 tracking-[3.20px]"
                                    >
                                      Fully Refundable
                                    </Text>
                                  </div>

                                  <Heading
                                    size="4xl"
                                    as="h3"
                                    style={{ color: "#4F805D" }}
                                    className="flex flex-row text-black-900 tracking-[4.40px] uppercase"
                                  >
                                    <span>US</span>
                                    <span style={{ fontSize: 18 }}>150$</span>
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default PreOrderSection