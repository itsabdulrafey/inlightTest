              {/* <div className="flex flex-col gap-[43px] p-[22px] sm:p-5 bg-white-A700">
                <div className="w-full mt-[5px] mx-auto max-w-[1302px]">
                  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}} >
                    <Button
                      size="md"
                      variant="outline"
                      className="sm:px-5 !text-white-A700 tracking-[4.00px] bg-gradient min-w-[173px] rounded-md"
                      onClick={()=>{
                        window.open("https://plus.efxdata.com/login")
                      }}
                    >
                      eFX Plus
                    </Button>
                    <Button onClick={()=>{
                      handelDiv()
                      setcardState(0)
                    }
                      } size="md" variant="outline" className="sm:px-5 tracking-[4.00px] min-w-[220px] rounded-md">
                      eFX Plus HD
                    </Button>
                    <Button onClick={()=>{
                      handelDiv()
                      setcardState(1)}} size="md" variant="outline" className="sm:px-5 tracking-[4.00px] min-w-[180px] rounded-md">
                      eFX Edge
                    </Button>
                    <div onClick={()=>{
                      handelDiv()
                      setcardState(2)}} className="flex justify-center w-[15%]">
                      <div className="flex flex-col items-end w-full">
                        <div className="flex justify-center w-[37%] md:w-full mr-[5px] md:mr-0 z-[1] border-blue_gray-600 border border-solid bg-gray-900_01 rounded">
                          <Heading size="xs" as="h3" className="w-[67%] tracking-[1.00px] text-center leading-3">
                            <>
                              coming
                              <br />
                              soon!
                            </>
                          </Heading>
                        </div>
                        <a
                          href="#"
                          className="mt-[-14px] px-[30px] py-[18px] sm:px-5 border-blue_gray-600 border-2 border-solid text-shadow-ts rounded-md"
                        >
                          <Heading as="h4" className="!text-blue_gray-600 tracking-[4.00px]">
                            eFX Alpha
                          </Heading>
                        </a>
                      </div>
                    </div>
                    <Button onClick={()=>{
                      handelDiv()
                      setcardState(3)}} size="xl" variant="outline" sty className="sm:px-5 tracking-[4.00px] min-w-[100px] rounded-md">
                      eFX Apex
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-start w-full mb-[19px] mx-auto max-w-[1388px]">
                  <div className="w-[21%] md:w-full mt-[9px]">
                    <div className="flex flex-col items-center gap-[27px] p-3 bg-blue_gray-900 shadow-sm rounded-[16px]">
                      <div className="flex flex-col items-start w-[86%] md:w-full mt-3 gap-4">
                        <Heading as="h5" className="tracking-[0.01px] !font-poppins">
                          eFXPlus Data
                        </Heading>
                        <div className="flex flex-col self-stretch gap-[17px]">
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="h6" className="self-start !font-roboto">
                                  <span className="text-white-A700">15</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of&nbsp;</span>
                                  <span className="text-white-A700">100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Orders
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "60%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-[5px]">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">224</span>
                                  <span className="text-white-A700 font-normal">&nbsp;of&nbsp;</span>
                                  <span className="text-white-A700">500</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Insights
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "30%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-[5px]">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">20</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700">120</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Order Activity
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "80%" }} className="h-full bg-green-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">03</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700">100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  TOTW & Models
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "90%" }} className="h-full bg-green-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">02</span>
                                  <span className="text-white-A700 font-medium">&nbsp;</span>
                                  <span className="text-white-A700 font-normal">of</span>
                                  <span className="text-white-A700 font-medium">&nbsp;100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Trade Stats
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "50%" }} className="h-full bg-green-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-[5px]">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">45</span>
                                  <span className="text-white-A700 font-normal">&nbsp;of&nbsp;</span>
                                  <span className="text-white-A700">100</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Forecast Changes
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "30%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center flex-1">
                            <div className="flex flex-col w-full gap-1.5">
                              <div className="flex justify-between items-center gap-5 flex-wrap">
                                <Heading size="s" as="p" className="self-start !font-roboto">
                                  <span className="text-white-A700">03</span>
                                  <span className="text-white-A700 font-normal">&nbsp;of&nbsp;</span>
                                  <span className="text-white-A700">150</span>
                                </Heading>
                                <Heading size="md" as="p" className="self-end !font-roboto text-right">
                                  Data Preview
                                </Heading>
                              </div>
                              <div className="h-[6px] bg-indigo-50 relative rounded-sm">
                                <div style={{ width: "30%" }} className="h-full bg-purple-500 absolute rounded-sm" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Heading size="md" as="p" className="!text-green-A700 tracking-[0.14px] !font-bold">
                        Green lines refer to 7-day data count
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:self-stretch ml-[33px] gap-[19px] md:ml-0 flex-1">
                    <a href="#">
                      <Heading size="4xl" as="h2" className="!text-black-900 tracking-[1.28px]">
                        Latest eFX Public Insights
                      </Heading>
                    </a>
                    <div className="flex flex-col self-stretch gap-1">
                      <div className="flex md:flex-col justify-between items-center gap-5 bg-blue-50">
                        <div className="flex sm:flex-col justify-center items-center w-[63%] md:w-full gap-6 md:p-5">
                          <div className="flex flex-col items-end py-2">
                            <Img
                              src="images/img_email_row_check.svg"
                              alt="emailrowcheck"
                              className="h-[22px] w-[22px]"
                            />
                          </div>
                          <div className="flex items-center gap-1 flex-wrap">
                            <Heading size="xl" as="h6" className="!text-gray-900_02">
                              EUR/USD{" "}
                            </Heading>
                            <Text as="p" className="self-end">
                              -
                            </Text>
                            <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                              Opens Higher As USD Soft Despite Rising US Yields
                            </Text>
                          </div>
                        </div>
                        <div className="flex p-[7px] md:p-5">
                          <Text as="p" className="self-end tracking-[-0.14px] text-right !font-medium">
                            10:10 AM - Apr 25
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-100 shadow-md">
                          <div className="flex md:flex-col items-center gap-6">
                            <div className="flex items-center">
                              <div className="h-full w-[3px] bg-blue-A200" />
                              <Img
                                src="images/img_email_row_drag_indicator.svg"
                                alt="emailrowdrag"
                                className="h-[22px]"
                              />
                              <Img
                                src="images/img_email_row_check_black_900.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px]"
                              />
                            </div>
                            <div className="flex items-center gap-3.5 flex-wrap">
                              <Text
                                size="s"
                                as="p"
                                className="flex justify-center items-center h-[25px] p-[3px] !text-white-A700 tracking-[0.12px] !font-medium bg-purple-500 rounded"
                              >
                                Updates
                              </Text>
                              <Heading size="xl" as="h6" className="!text-gray-900_02">
                                AUD/USD{" "}
                              </Heading>
                              <Text as="p" className="self-end mb-[3px]">
                                -
                              </Text>
                              <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                Atains Offered Tone Heading Into The Afternoon
                              </Text>
                            </div>
                          </div>
                          <div className="flex mr-[11px] p-1.5 md:p-5 md:mr-0 bg-blue-100">
                            <Img
                              src="images/img_email_row_overlay.svg"
                              alt="emailrow_three"
                              className="h-[22px] w-[22px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="eurusd_one"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD{" "}
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Opens Higher As USD Soft Despite Rising US Yields
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Opens Higher As Market Shrugs Off Higher US Yields
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Credit Agricole: Cautious on GBP N-Term; Here is Why?
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  COMMENT-US Recap: EUR/USD&#39;s Post-NFP, CPI D
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex md:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  AUD/USD
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="self-end !text-black-900_b2 tracking-[0.32px]">
                                  Ahead Of Next US Data Dump US Dollar Buying Fades
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] md:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                          <div className="flex sm:flex-col justify-between items-center pr-[5px] gap-5 py-[5px] bg-blue-50 flex-1">
                            <div className="flex sm:flex-col items-center gap-6 py-2">
                              <Img
                                src="images/img_email_row_check.svg"
                                alt="emailrowcheck"
                                className="h-[22px] w-[22px] sm:w-full"
                              />
                              <div className="flex items-center gap-1 flex-wrap">
                                <Heading size="xl" as="h6" className="!text-gray-900_02">
                                  EUR/USD{" "}
                                </Heading>
                                <Text as="p" className="self-end">
                                  -
                                </Text>
                                <Text size="s" as="p" className="!text-black-900_b2 tracking-[0.32px]">
                                  US Dollar Bulls Could Not Maintain Traction
                                </Text>
                              </div>
                            </div>
                            <Text as="p" className="mr-[11px] sm:mr-0 tracking-[-0.14px] text-right !font-medium">
                              10:10 AM - Apr 25
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading
                        size="xl"
                        as="h6"
                        className="flex justify-center items-center h-[48px] px-[35px] py-[13px] sm:px-5 !text-blue-A200 bg-blue-50"
                      >
                        See more Insights...
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-[15%] md:w-full mt-14 ml-6 gap-[18px] md:ml-0">
                    <Img
                      src="images/img_frame_16_1.png"
                      alt="image"
                      className="h-[196px] w-full md:h-auto object-cover"
                    />
                    <Button
                      color="orange_A200"
                      size="sm"
                      shape="round"
                      className="sm:px-5 tracking-[1.60px] uppercase min-w-[180px]"
                    >
                      Subscribe
                    </Button>
                    <Button
                      color="blue_gray_900_01"
                      size="sm"
                      variant="outline"
                      shape="round"
                      className="sm:px-5 tracking-[1.60px] uppercase min-w-[180px]"
                    >
                      LOGIN
                    </Button>
                  </div>
                </div>
              </div> */}