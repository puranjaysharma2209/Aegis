import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function MaintenanceTicketsPage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Aegis</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="self-end">
          <div className="h-[1080px] relative">
            <div className="justify-center h-[1080px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 shadow-xs absolute">
              <div className="flex justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[18px] m-auto bg-white-A700 shadow-xs absolute">
                <div className="flex flex-col w-[84%] md:w-full mt-[11px] mr-[17px] md:mr-0">
                  <div className="h-[62px] ml-1 md:ml-0 relative">
                    <div className="h-[40px] w-[39%] left-[21%] top-[15%] m-auto border-blue_gray-400 border border-solid absolute rounded-[20px]" />
                    <header className="flex justify-center items-center w-full left-0 bottom-0 right-0 top-0 p-[11px] m-auto bg-blue_gray-900_01 shadow-md absolute rounded-lg">
                      <div className="flex md:flex-col justify-between items-center w-[89%] md:w-full mr-2 gap-5">
                        <div className="flex sm:flex-col justify-between items-center w-[40%] md:w-full gap-5 md:p-5">
                          <Img
                            src="images/img_path.svg"
                            alt="path_one"
                            className="h-[19px] w-[20px] sm:w-full sm:h-auto"
                          />
                          <div className="h-[40px] w-[89%] relative">
                            <Img
                              src="images/img_search.svg"
                              alt="search_one"
                              className="h-[18px] w-[18px] left-[2%] top-1/4 m-auto absolute"
                            />
                            <Input
                              name="search"
                              placeholder={`Portfolio, Locations, etc ...`}
                              value={searchBarValue}
                              onChange={(e) => setSearchBarValue(e)}
                              suffix={
                                searchBarValue?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue("")} /> : null
                              }
                              className="flex items-center justify-center w-full h-[40px] left-0 bottom-0 right-0 top-0 px-[35px] m-auto sm:px-5 text-blue_gray-400 font-poppins text-base border-blue_gray-400 border border-solid absolute rounded-[20px]"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center items-end w-[25%] md:w-full md:p-5">
                          <Img
                            src="images/img_check_square.svg"
                            alt="checksquare_one"
                            className="h-[20px] w-[19px] mb-[5px]"
                          />
                          <Img
                            src="images/img_calendar.svg"
                            alt="calendar_one"
                            className="h-[20px] mb-[5px] ml-[37px]"
                          />
                          <Img src="images/img_mail.svg" alt="mail_one" className="h-[18px] mb-[5px] ml-8" />
                          <Img src="images/img_bell.svg" alt="bell_one" className="h-[20px] mb-[5px] ml-[27px]" />
                          <div className="flex flex-col items-end mb-1 ml-14">
                            <Text size="s" as="p" className="!text-gray-500_03 text-right">
                              Ram Pal
                            </Text>
                            <Text size="xs" as="p" className="mt-[-1px] !text-orange-A200 text-right">
                              JUNIPER SOLAR
                            </Text>
                          </div>
                          <Img
                            src="images/img_oval_34x34.png"
                            alt="oval_one"
                            className="h-[34px] w-[34px] ml-[11px] rounded-[50%]"
                          />
                        </div>
                      </div>
                    </header>
                  </div>
                  <div className="flex md:flex-col items-start w-[98%] md:w-full mt-[29px] gap-2">
                    <div className="md:p-5 flex-1">
                      <div className="flex flex-col gap-5">
                        <div className="flex sm:flex-col items-center w-[35%] md:w-full">
                          <Text size="2xl" as="p" className="self-start !text-blue_gray-900">
                            Maintenance Tickets
                          </Text>
                          <div className="h-full w-px sm:w-full sm:h-px ml-2.5 sm:ml-0 bg-gray-500_02" />
                          <Img
                            src="images/img_home.svg"
                            alt="home_one"
                            className="self-start h-[15px] sm:w-full sm:h-auto ml-[19px] sm:ml-0"
                          />
                          <Img
                            src="images/img_chevrons_right.svg"
                            alt="chevronsright"
                            className="h-[8px] sm:w-full sm:h-auto ml-3.5 sm:ml-0"
                          />
                          <Text size="s" as="p" className="ml-[11px] sm:ml-0 !text-deep_purple-A200">
                            Card
                          </Text>
                          <Img
                            src="images/img_chevrons_right.svg"
                            alt="chevronsright"
                            className="h-[8px] sm:w-full sm:h-auto ml-3 sm:ml-0"
                          />
                          <Text size="s" as="p" className="ml-[11px] sm:ml-0 !text-blue_gray-900">
                            Card Actions
                          </Text>
                        </div>
                        <div className="flex md:flex-col justify-between items-center ml-[53px] gap-5 md:ml-0">
                          <div className="flex md:flex-col w-[67%] md:w-full gap-[97px]">
                            <div className="flex justify-end items-center w-full bg-blue_gray-100_01 rounded-[17px]">
                              <Text size="md" as="p" className="!text-black-900_99">
                                Plant Location
                              </Text>
                              <div className="h-full w-px ml-[9px] bg-black-900_99" />
                              <Text size="md" as="p" className="self-start ml-[46px] !text-black-900_99">
                                Gurugram, India
                              </Text>
                              <Img
                                src="images/img_vector.svg"
                                alt="plant_location"
                                className="h-[35px] w-[35px] ml-[49px]"
                              />
                            </div>
                            <div className="flex justify-between w-full pl-5 gap-5 bg-blue_gray-100_01 rounded-[17px]">
                              <div className="flex justify-center items-center w-[72%]">
                                <Text size="md" as="p" className="!text-black-900_99">
                                  Plant ID
                                </Text>
                                <div className="h-full w-px ml-[53px] bg-gray-500" />
                                <Text size="md" as="p" className="ml-[30px] !text-black-900_99">
                                  330MW-JSW-PL
                                </Text>
                              </div>
                              <Img src="images/img_vector.svg" alt="vector_one" className="h-[35px] w-[35px]" />
                            </div>
                          </div>
                          <Text as="p" className="self-end !text-blue_gray-900 text-right">
                            Logged in from:
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_juniper_logo_1.png"
                      alt="juniperlogoone"
                      className="w-[11%] md:w-full md:h-auto mt-[23px] object-cover"
                    />
                  </div>
                  <div className="flex md:flex-col items-center mt-4 ml-1.5 gap-3 md:ml-0">
                    <Img src="images/img_vector_green_400.svg" alt="vector_one" className="h-[35px] w-[35px]" />
                    <div className="md:p-5 flex-1">
                      <div className="flex flex-col items-start">
                        <div className="flex self-stretch justify-end p-1 z-[1] bg-gradient rounded-[10px]">
                          <Heading size="md" as="h1" className="mr-[591px] md:mr-0 !text-gray-500_7c text-center">
                            43 issues - click to expand
                          </Heading>
                        </div>
                        <Button className="flex items-center justify-center h-[40px] mt-[-40px] px-[35px] sm:px-5 text-white-A700 text-center text-[25px] font-semibold bg-green-400 min-w-[290px] rounded-[10px]">
                          RESOLVED
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center mt-[21px] ml-1.5 md:ml-0">
                    <Img src="images/img_vector_red_a700.svg" alt="vector_three" className="h-[35px] w-[35px]" />
                    <Button className="flex items-center justify-center h-[40px] ml-3 px-[35px] sm:ml-0 sm:px-5 text-white-A700 text-center text-[25px] font-semibold bg-red-A700 min-w-[290px] rounded-[10px]">
                      CRITICAL
                    </Button>
                    <Text size="s" as="p" className="self-end !text-teal-400">
                      <span className="text-gray_800">Down</span>
                      <span className="text-teal-400">&nbsp;</span>
                      <span className="text-green_800">5.2%</span>
                      <span className="text-blue_gray-900">vs last 7 days</span>
                    </Text>
                  </div>
                  <div className="h-[219px] mt-[-2px] ml-[53px] md:ml-0 relative">
                    <Img
                      src="images/img_image_12.png"
                      alt="imagetwelve_one"
                      className="h-[25px] bottom-[11%] right-[40%] m-auto object-cover absolute"
                    />
                    <div className="w-full h-full left-0 bottom-0 right-0 top-0 p-[5px] m-auto border-black-900_87 border border-solid absolute rounded-[10px]">
                      <div className="flex flex-col mb-[13px]">
                        <div className="flex md:flex-col justify-between ml-[21px] gap-5 md:ml-0">
                          <div className="flex sm:flex-col justify-center items-start md:p-5">
                            <Heading as="h2" className="mt-[3px]">
                              Date of detection
                            </Heading>
                            <div className="flex justify-center items-center ml-[13px] sm:ml-0">
                              <Heading as="h3" className="self-end">
                                Defect Type
                              </Heading>
                              <Img src="images/img_image_2.png" alt="imagetwo_one" className="w-[35px] object-cover" />
                            </div>
                            <Heading as="h4" className="mt-[3px] ml-[39px] sm:ml-0">
                              Panel ID
                            </Heading>
                          </div>
                          <div className="flex md:flex-col justify-center items-start w-[59%] md:w-full md:p-5">
                            <div className="flex justify-center items-center gap-[3px]">
                              <Heading as="h5">Eff % | Loss %</Heading>
                              <Img
                                src="images/img_image_2.png"
                                alt="imagethree_one"
                                className="w-[35px] object-cover"
                              />
                            </div>
                            <Heading as="h6" className="mt-[5px] ml-[45px] md:ml-0">
                              Image
                            </Heading>
                            <div className="flex justify-center mt-1 ml-[25px] gap-[5px] md:ml-0">
                              <Heading as="h5">Assigned to</Heading>
                              <Img
                                src="images/img_vector.svg"
                                alt="vector_five"
                                className="self-start h-[25px] w-[25px]"
                              />
                            </div>
                            <div className="flex justify-between mt-0.5 ml-[51px] gap-5 md:ml-0 flex-1">
                              <Heading as="h5" className="self-start">
                                Action
                              </Heading>
                              <Heading as="h5" className="self-end">
                                <span className="text-gray-500_03">Loss [</span>
                                <span className="text-black-900_99">kWh | $]</span>
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col items-center w-[86%] md:w-full">
                          <div className="w-[17px] md:p-5">
                            <div className="flex flex-col bg-blue_gray-100_01 rounded-lg">
                              <Img
                                src="images/img_vector_gray_700.svg"
                                alt="vector_seven"
                                className="h-[17px] md:w-[17px] rounded-tl-lg rounded-tr-lg"
                              />
                              <Img
                                src="images/img_rectangle_709.svg"
                                alt="image_one"
                                className="h-[44px] mt-2.5 rounded-lg"
                              />
                              <Img
                                src="images/img_vector.svg"
                                alt="vector_nine"
                                className="h-[17px] md:w-[17px] mt-[72px] rounded-bl-lg rounded-br-lg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col ml-[17px] gap-1.5 md:p-5 md:ml-0 flex-1">
                            <div className="flex flex-col gap-1">
                              <div className="flex md:flex-col justify-center flex-1">
                                <Text as="p" className="self-end mt-0.5">
                                  14/01/2024
                                </Text>
                                <Text as="p" className="self-end">
                                  Diode fault
                                </Text>
                                <Text as="p" className="self-end">
                                  B120S0008P
                                </Text>
                                <div className="flex self-end justify-between gap-5 flex-1">
                                  <Text as="p">53%</Text>
                                  <Text as="p">33%</Text>
                                </div>
                                <Img
                                  src="images/img_heat_map_1.png"
                                  alt="image"
                                  className="self-start md:w-full md:h-auto ml-24 md:ml-0 object-cover"
                                />
                              </div>
                              <div className="flex md:flex-col justify-center flex-1">
                                <Text as="p" className="self-end">
                                  14/01/2024
                                </Text>
                                <div className="flex self-end justify-between mt-0.5 gap-5 flex-1">
                                  <Text as="p">Dendritic crack</Text>
                                  <Text as="p">B120S0008P</Text>
                                </div>
                                <div className="flex self-end justify-between w-[21%] md:w-full gap-5">
                                  <Text as="p">53%</Text>
                                  <Text as="p">33%</Text>
                                </div>
                                <Img
                                  src="images/img_heatindex_1.png"
                                  alt="heatindexone"
                                  className="self-start md:w-full md:h-auto ml-24 md:ml-0 object-cover"
                                />
                              </div>
                              <div className="flex md:flex-col justify-between items-center gap-5 flex-1">
                                <div className="flex self-end justify-between w-[26%] md:w-full gap-5">
                                  <Text as="p">14/01/2024</Text>
                                  <Text as="p">PID</Text>
                                </div>
                                <div className="flex sm:flex-col justify-center w-[55%] md:w-full">
                                  <Text as="p" className="self-end">
                                    B052S0012P
                                  </Text>
                                  <div className="flex self-end justify-between mt-0.5 gap-5 flex-1">
                                    <Text as="p">72%</Text>
                                    <Text as="p">10%</Text>
                                  </div>
                                  <Img
                                    src="images/img_maptouristyness.png"
                                    alt="maptouristyness"
                                    className="self-start sm:w-full sm:h-auto ml-[98px] sm:ml-0 object-cover"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-col justify-center flex-1">
                                <Text as="p" className="self-end mt-0.5">
                                  22/01/2024
                                </Text>
                                <Text as="p" className="self-end">
                                  Cell overheat
                                </Text>
                                <Text as="p" className="self-end">
                                  B035S0130P
                                </Text>
                                <div className="flex self-end justify-between gap-5 flex-1">
                                  <Text as="p">78%</Text>
                                  <Text as="p">2.5%</Text>
                                </div>
                                <Img
                                  src="images/img_image_5.png"
                                  alt="imagefive_one"
                                  className="self-start md:w-full md:h-auto ml-[92px] md:ml-0 object-cover"
                                />
                              </div>
                            </div>
                            <div className="flex sm:flex-col justify-between w-[83%] md:w-full gap-5">
                              <Text as="p">22/01/2024</Text>
                              <Text as="p">Glass crack</Text>
                              <Text as="p">B035S0130P</Text>
                              <div className="flex justify-between w-[18%] sm:w-full gap-5">
                                <Text as="p">78%</Text>
                                <Text as="p">2.5%</Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-[9%] md:w-full ml-11 gap-1 md:p-5 md:ml-0">
                            <Button className="flex items-center justify-center h-[28px] w-full px-[34px] sm:px-5 text-black-900 text-center text-[15px] bg-cyan-100 rounded-[14px]">
                              Ajay
                            </Button>
                            <Button className="flex items-center justify-center h-[28px] w-full px-[34px] sm:px-5 text-black-900 text-center text-[15px] bg-teal-100_99 rounded-[14px]">
                              Ajay
                            </Button>
                            <Button className="flex items-center justify-center h-[28px] w-full px-8 sm:px-5 text-black-900 text-center text-[15px] bg-indigo-A100_99 rounded-[14px]">
                              Arpit
                            </Button>
                            <Button className="flex items-center justify-center h-[28px] w-full px-[23px] sm:px-5 text-black-900 text-center text-[15px] bg-teal-A700_99 rounded-[14px]">
                              Sundar
                            </Button>
                            <Button className="flex items-center justify-center h-[28px] w-full px-8 sm:px-5 text-black-900 text-center text-[15px] bg-indigo-A100_99 rounded-[14px]">
                              Arpit
                            </Button>
                          </div>
                          <div className="flex flex-col items-center ml-[41px] gap-[7px] md:p-5 md:ml-0">
                            <Text size="md" as="p">
                              Check insulation
                            </Text>
                            <div className="flex justify-center items-center">
                              <Img src="images/img_image_4.png" alt="imagefour_one" className="w-[30px] object-cover" />
                              <Text size="md" as="p" className="self-end underline italic">
                                Raise warranty claim
                              </Text>
                            </div>
                            <Text size="md" as="p">
                              Replace module
                            </Text>
                            <div className="flex justify-center items-center">
                              <Img
                                src="images/img_image_4.png"
                                alt="imagefour_three"
                                className="w-[30px] object-cover"
                              />
                              <Text size="md" as="p" className="self-end underline italic">
                                Raise warranty claim
                              </Text>
                            </div>
                            <Text size="md" as="p">
                              Replace module
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-start mt-[19px] ml-[3px] gap-[15px] md:ml-0">
                    <Img src="images/img_vector_yellow_a700.svg" alt="vector_eleven" className="h-[35px] w-[35px]" />
                    <Button className="flex items-center justify-center h-[40px] px-6 sm:px-5 text-lime-900 text-center text-[25px] font-semibold bg-yellow-A700 min-w-[290px] rounded-[10px]">
                      EARLY DETECTION
                    </Button>
                    <Text size="s" as="p" className="mt-[15px] !text-red-A700_01">
                      <span className="text-gray_800">Up</span>
                      <span className="text-red-A700_01">14</span>
                      <span className="text-red-A700">%</span>
                      <span className="text-blue_gray-900">vs last 7 days</span>
                    </Text>
                  </div>
                  <div className="h-[219px] ml-[53px] md:ml-0 relative">
                    <div className="flex flex-col w-[5%] gap-[39px] bottom-[12%] right-[40%] m-auto absolute">
                      <Img src="images/img_image_7.png" alt="imageseven_one" className="object-cover" />
                      <Img src="images/img_image_12.png" alt="imagenine_one" className="h-[25px] object-cover" />
                      <Img src="images/img_image_11.png" alt="imageeleven_one" className="h-[25px] object-cover" />
                    </div>
                    <div className="w-full h-full left-0 bottom-0 right-0 top-0 p-1 m-auto border-black-900_87 border border-solid absolute rounded-[10px]">
                      <div className="flex md:flex-col justify-between items-center mb-[17px] gap-5">
                        <div className="flex sm:flex-col justify-center items-center w-[37%] md:w-full gap-1 md:p-5">
                          <div className="self-end w-[3%] sm:w-full">
                            <div className="bg-blue_gray-100_01 rounded-lg">
                              <Img
                                src="images/img_vector_gray_700.svg"
                                alt="vector_thirteen"
                                className="h-[17px] w-full md:w-[17px] md:h-auto rounded-tl-lg rounded-tr-lg"
                              />
                              <Img
                                src="images/img_rectangle_709.svg"
                                alt="image_two"
                                className="self-stretch h-[60px] md:h-auto mt-2.5 rounded-lg"
                              />
                              <Img
                                src="images/img_vector.svg"
                                alt="vector_fifteen"
                                className="h-[17px] w-full md:w-[17px] md:h-auto mt-14 rounded-bl-lg rounded-br-lg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col mb-0.5 flex-1">
                            <div className="flex sm:flex-col items-start">
                              <Heading as="h5" className="mt-[3px]">
                                Date of detection
                              </Heading>
                              <div className="flex items-center ml-[13px] sm:ml-0">
                                <Heading as="h5" className="self-end">
                                  Defect Type
                                </Heading>
                                <Img
                                  src="images/img_image_2.png"
                                  alt="imagetwo_three"
                                  className="w-[35px] object-cover"
                                />
                              </div>
                              <Heading as="h5" className="mt-[3px] ml-[39px] sm:ml-0">
                                Panel ID
                              </Heading>
                            </div>
                            <div className="flex justify-between mt-[3px] ml-[13px] gap-5 md:ml-0">
                              <Text as="p">14/01/2024</Text>
                              <Text as="p">Diode fault</Text>
                              <Text as="p">B080S0018P</Text>
                            </div>
                            <div className="flex sm:flex-col justify-between mt-1.5 ml-[13px] gap-5 md:ml-0">
                              <Text as="p">14/01/2024</Text>
                              <div className="flex justify-between w-[65%] sm:w-full gap-5">
                                <Text as="p">Dendritic crack</Text>
                                <Text as="p">B072S0008P</Text>
                              </div>
                            </div>
                            <div className="flex justify-between mt-1.5 ml-[13px] gap-5 md:ml-0">
                              <div className="flex justify-between w-[43%] gap-5">
                                <Text as="p">14/01/2024</Text>
                                <Text as="p">PID</Text>
                              </div>
                              <Text as="p">B052S0012P</Text>
                            </div>
                            <div className="flex justify-between mt-1.5 ml-[13px] gap-5 md:ml-0">
                              <Text as="p">22/01/2024</Text>
                              <Text as="p">Cell overheat</Text>
                              <Text as="p">B035S0130P</Text>
                            </div>
                            <div className="flex justify-between mt-1.5 ml-[13px] gap-5 md:ml-0">
                              <Text as="p">22/01/2024</Text>
                              <Text as="p">Glass crack</Text>
                              <Text as="p">B035S0130P</Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-between items-center w-[58%] md:w-full gap-5 md:p-5">
                          <div className="w-[20%] md:w-full">
                            <div className="flex flex-col items-start">
                              <div className="flex items-center gap-[3px]">
                                <Heading as="h5">Eff % | Loss %</Heading>
                                <Img src="images/img_image_2.png" alt="imagethree" className="w-[35px] object-cover" />
                              </div>
                              <div className="flex justify-between w-[73%] md:w-full mt-0.5 gap-5">
                                <Text as="p">78%</Text>
                                <Text as="p">2.5%</Text>
                              </div>
                              <div className="flex justify-between w-[71%] md:w-full mt-[7px] gap-5">
                                <Text as="p">80%</Text>
                                <Text as="p">1.5%</Text>
                              </div>
                              <div className="flex justify-between w-[69%] md:w-full mt-1.5 gap-5">
                                <Text as="p">72%</Text>
                                <Text as="p">10%</Text>
                              </div>
                              <div className="flex justify-between w-[73%] md:w-full mt-[7px] gap-5">
                                <Text as="p">78%</Text>
                                <Text as="p">2.5%</Text>
                              </div>
                              <div className="flex justify-between w-[73%] md:w-full mt-[7px] gap-5">
                                <Text as="p">78%</Text>
                                <Text as="p">2.5%</Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-[74%] md:w-full gap-[5px]">
                            <div className="flex md:flex-col">
                              <Heading as="h5" className="self-end">
                                Image
                              </Heading>
                              <div className="flex ml-[25px] gap-[5px] md:ml-0">
                                <Heading as="h5">Assigned to</Heading>
                                <Img
                                  src="images/img_vector.svg"
                                  alt="vector"
                                  className="self-start h-[25px] w-[25px]"
                                />
                              </div>
                              <div className="flex self-start justify-between ml-[51px] gap-5 md:ml-0 flex-1">
                                <Heading as="h5">Action</Heading>
                                <Heading as="h5">
                                  <span className="text-gray-500_03">Loss [</span>
                                  <span className="text-black-900_99">kWh | $]</span>
                                </Heading>
                              </div>
                            </div>
                            <div className="flex justify-between items-center w-[68%] md:w-full gap-5">
                              <div className="flex flex-col self-start gap-[39px]">
                                <Img src="images/img_image_8.png" alt="imageeight_one" className="object-cover" />
                                <Img
                                  src="images/img_image_10.png"
                                  alt="imageten_one"
                                  className="h-[25px] object-cover"
                                />
                              </div>
                              <div className="flex flex-col w-[24%] gap-1">
                                <Button className="flex items-center justify-center h-[28px] w-full px-[34px] sm:px-5 text-black-900 text-center text-[15px] bg-cyan-100 rounded-[14px]">
                                  Ajay
                                </Button>
                                <Button className="flex items-center justify-center h-[28px] w-full px-[34px] sm:px-5 text-black-900 text-center text-[15px] bg-teal-100_99 rounded-[14px]">
                                  Ajay
                                </Button>
                                <Button className="flex items-center justify-center h-[28px] w-full px-8 sm:px-5 text-black-900 text-center text-[15px] bg-indigo-A100_99 rounded-[14px]">
                                  Arpit
                                </Button>
                                <Button className="flex items-center justify-center h-[28px] w-full px-[23px] sm:px-5 text-black-900 text-center text-[15px] bg-teal-A700_99 rounded-[14px]">
                                  Sundar
                                </Button>
                                <Button className="flex items-center justify-center h-[28px] w-full px-8 sm:px-5 text-black-900 text-center text-[15px] bg-indigo-A100_99 rounded-[14px]">
                                  Arpit
                                </Button>
                              </div>
                              <div className="flex flex-col items-end gap-[7px]">
                                <Text size="md" as="p">
                                  Perform crack healing
                                </Text>
                                <div className="flex self-start items-center">
                                  <Img
                                    src="images/img_image_4.png"
                                    alt="imagefour_five"
                                    className="w-[30px] object-cover"
                                  />
                                  <Text size="md" as="p" className="self-end underline italic">
                                    Schedule cleaning
                                  </Text>
                                </div>
                                <Text size="md" as="p">
                                  Perform crack healing
                                </Text>
                                <div className="flex justify-end items-center">
                                  <Img
                                    src="images/img_image_4.png"
                                    alt="imagefour_seven"
                                    className="w-[30px] object-cover"
                                  />
                                  <Text size="md" as="p" className="self-end underline italic">
                                    Check for tree growth
                                  </Text>
                                </div>
                                <Text size="md" as="p">
                                  Perform crack healing
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="flex justify-center items-center w-[96%] mt-[177px] gap-[19px]">
                    <div className="flex sm:flex-col justify-between gap-5 flex-1">
                      <Text size="lg" as="p" className="self-end !text-blue_gray-900">
                        <span className="text-blue_gray-900">COPYRIGHT @ 20</span>
                        <span className="text-blue_gray-900">24</span>
                        <span className="text-blue_gray-900">&nbsp;</span>
                        <span className="text-deep_purple-A200">Vayv</span>
                        <span className="text-blue_gray-900">, All rights Reserved</span>
                      </Text>
                      <div className="flex self-start justify-center items-center mb-1 sm:p-5">
                        <Text size="lg" as="p" className="!text-blue_gray-900">
                          Made with
                        </Text>
                        <Img
                          src="images/img_path_red_a700_01.svg"
                          alt="path_three"
                          className="self-start h-[18px] ml-2.5"
                        />
                        <Text size="lg" as="p" className="ml-[15px] !text-blue_gray-900">
                          in
                        </Text>
                      </div>
                    </div>
                    <Img src="images/img_flag.svg" alt="flag_one" className="h-[18px]" />
                  </footer>
                </div>
              </div>
              <div className="h-[40px] w-[38%] left-[33%] top-[4%] m-auto border-blue_gray-400 border border-solid absolute rounded-[20px]" />
            </div>
            <Sidebar
              width="280px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className="flex-col h-screen top-0 left-0 bottom-0 p-[13px] my-auto bg-blue_gray-900_01 shadow-sm !sticky overflow-auto"
            >
              <div className="flex flex-col self-stretch items-center mb-[214px] gap-[26px]">
                <Img src="images/img_logo.png" alt="logo_one" className="w-[59%] object-cover" />
                <div className="self-stretch">
                  <div className="flex flex-col items-center">
                    <Text size="md" as="p" className="w-[67%] md:w-full !text-white-A700 z-[1] !leading-10">
                      <>
                        {" "}
                        Dashboard
                        <br /> Defect Analytics
                        <br /> Maintenance Tickets{" "}
                      </>
                    </Text>
                    <Menu
                      menuItemStyles={{
                        button: {
                          padding: 0,
                          color: "#999999",
                          fontWeight: 800,
                          fontSize: "14px",
                        },
                      }}
                      className="self-stretch w-full mt-[-122px]"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-5">
                          <div className="w-[7%]">
                            <MenuItem
                              icon={
                                <Img
                                  src="images/img_home_white_a700.svg"
                                  alt="home_three"
                                  className="h-[14px] w-full md:h-auto"
                                />
                              }
                            />
                          </div>
                          <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[5px] mt-1" />
                        </div>
                        <div className="flex flex-col mt-[31px] gap-3">
                          <MenuItem
                            icon={
                              <Img
                                src="images/img_oval.svg"
                                alt="oval_three"
                                className="h-[10px] w-full md:w-[10px] md:h-auto md:w-[10px] md:h-auto"
                              />
                            }
                          />
                          <MenuItem
                            icon={<Img src="images/img_oval.svg" alt="oval_five" className="h-[10px] w-[10px]" />}
                          />
                          <MenuItem>DEFECT MAPS</MenuItem>
                        </div>
                        <div className="mt-[13px]">
                          <div className="flex justify-center items-start gap-2.5">
                            <div className="flex flex-col w-[9%] mt-0.5 gap-[25px]">
                              <MenuItem
                                icon={
                                  <Img src="images/img_mail_white_a700.svg" alt="mail_three" className="h-[16px]" />
                                }
                              />
                              <MenuItem
                                icon={
                                  <Img
                                    src="images/img_path_white_a700.svg"
                                    alt="path_five"
                                    className="h-[16px] w-full md:w-[16px] md:h-auto md:w-[16px] md:h-auto"
                                  />
                                }
                              />
                              <MenuItem
                                icon={
                                  <Img
                                    src="images/img_check_square_white_a700.svg"
                                    alt="checksquare"
                                    className="h-[16px] w-full md:h-auto"
                                  />
                                }
                              />
                              <MenuItem
                                icon={
                                  <Img
                                    src="images/img_calendar_white_a700.svg"
                                    alt="calendar_three"
                                    className="h-[16px]"
                                  />
                                }
                              />
                            </div>
                            <Text size="md" as="p" className="w-[92%] !text-white-A700 !leading-10">
                              <>
                                Thermal IR
                                <br />
                                EL Imaging
                                <br />
                                UVF Imaging
                                <br />
                                PL Imaging
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="mt-1">
                          <div>
                            <div className="flex flex-col items-start gap-4 z-[1]">
                              <Heading size="xs" as="p" className="tracking-[2.00px]">
                                SCHEDULE INSPECTION
                              </Heading>
                              <MenuItem
                                icon={
                                  <Img
                                    src="images/img_layout.svg"
                                    alt="layout_one"
                                    className="h-[16px] w-full md:w-[16px] md:h-auto md:w-[16px] md:h-auto"
                                  />
                                }
                              />
                            </div>
                            <div className="mt-[-15px]">
                              <div className="flex flex-col gap-[21px]">
                                <div className="flex items-start">
                                  <div className="flex flex-col w-[9%] mt-[42px] gap-[26px]">
                                    <MenuItem
                                      icon={
                                        <Img
                                          src="images/img_path_white_a700_18x15.svg"
                                          alt="path_seven"
                                          className="h-[15px]"
                                        />
                                      }
                                    />
                                    <MenuItem
                                      icon={
                                        <Img
                                          src="images/img_path_white_a700_1x16.svg"
                                          alt="path_nine"
                                          className="self-start h-[16px]"
                                        />
                                      }
                                    />
                                    <MenuItem
                                      icon={
                                        <Img
                                          src="images/img_grid.svg"
                                          alt="grid_one"
                                          className="h-[16px] w-full md:w-[16px] md:h-auto md:w-[16px] md:h-auto"
                                        />
                                      }
                                    />
                                    <MenuItem
                                      icon={<Img src="images/img_archive.svg" alt="archive_one" className="h-[16px]" />}
                                    />
                                  </div>
                                  <Text size="md" as="p" className="w-[86%] ml-[11px] !text-white-A700 !leading-10">
                                    <>
                                      Create Flight Plan
                                      <br />
                                      Import
                                      <br />
                                      Card
                                      <br />
                                      Table
                                      <br />
                                      Components
                                    </>
                                  </Text>
                                  <MenuItem
                                    icon={
                                      <Img
                                        src="images/img_path_white_a700_10x5.svg"
                                        alt="path_eleven"
                                        className="h-[5px]"
                                      />
                                    }
                                  />
                                  <div className="flex flex-col mt-0.5 ml-[-4px] gap-[139px] md:gap-[104px] sm:gap-[69px] flex-1">
                                    <MenuItem
                                      icon={
                                        <Img
                                          src="images/img_path_white_a700_10x5.svg"
                                          alt="path_thirteen"
                                          className="h-[5px]"
                                        />
                                      }
                                    />
                                    <MenuItem
                                      icon={
                                        <Img
                                          src="images/img_path_white_a700_10x5.svg"
                                          alt="path_fifteen"
                                          className="h-[5px]"
                                        />
                                      }
                                    />
                                  </div>
                                </div>
                                <MenuItem>INTEGRATIONS</MenuItem>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[139px] mt-[13px] relative">
                          <div className="flex flex-col justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <div className="flex items-start">
                              <MenuItem
                                icon={
                                  <Img
                                    src="images/img_copy.svg"
                                    alt="copy_one"
                                    className="h-[16px] w-full md:w-[16px] md:h-auto md:w-[16px] md:h-auto"
                                  />
                                }
                              />
                              <Text size="md" as="p" className="w-[88%] ml-[11px] !text-white-A700 !leading-10">
                                <>
                                  Inverter Data
                                  <br />
                                  Climate Modelling
                                  <br />
                                  Cleaning Bot
                                </>
                              </Text>
                              <MenuItem
                                icon={
                                  <Img
                                    src="images/img_path_white_a700_10x5.svg"
                                    alt="path_seventeen"
                                    className="h-[5px]"
                                  />
                                }
                              />
                            </div>
                            <div className="flex flex-col w-[8%] md:w-full mt-[-40px] gap-6">
                              <MenuItem
                                icon={<Img src="images/img_file_text.svg" alt="image_four" className="h-[14px]" />}
                              />
                              <MenuItem
                                icon={
                                  <Img
                                    src="images/img_check_circle.svg"
                                    alt="image_five"
                                    className="h-[16px] w-full md:w-[16px] md:h-auto md:w-[16px] md:h-auto"
                                  />
                                }
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start w-[8%] left-0 top-[30%] px-1 m-auto border-white-A700 border border-solid absolute rounded-sm">
                            <div className="h-full w-px bg-white-A700" />
                          </div>
                        </div>
                      </div>
                    </Menu>
                  </div>
                </div>
              </div>
            </Sidebar>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="h-[143px] w-px bg-white-A700" />
              <div className="self-stretch h-[299px] mt-[-143px] bg-white-A700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
