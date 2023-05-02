import {
  Box,
  Flex,
  Button,
  Stack,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./Context";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Login from "./Login";
import "./HomeNavbar.css";

export default function HomeNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { city, setcity } = useContext(MyContext);

  return (
    <div id="MainDiv" style={{ fontFamily: "arial, sans-serif" }}>
      <Box
        //** Navbar Background
        bg="#FFFFFF"
        px={9}
        width={["100%"]}
        height="75px"
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <HStack w="42%">
              <img
                className="logoImg"
                src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
              />
            </HStack>
          </Link>

          {/* <div class="searchBar ">
              {/* <span class="search1" > */}
          {/* <svg class='locIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 13">
                  <path fill="#666" fill-rule="nonzero" d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z">
                  </path>
                </svg>
                <select name="" id="select_location">
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                </select> */}
          {/* </span> */}
          {/* <input class ="searchInp" placeholder="Location" type='text' /> */}
          {/* </div>  */}

          <div className="location_section">
            <svg
              class="locIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 10 13"
            >
              <path
                fill="#666"
                fill-rule="nonzero"
                d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z"
              ></path>
            </svg>
            <select
              name=""
              id="select_location"
              onChange={(e) => setcity(e.target.value)}
            >
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bengaluru</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button
                  fontSize="sm"
                  className="btnRes"
                  bg="#FFFFFFff"
                  _hover={{ color: "#FF645A" }}
                >
                  <NavLink to="/">
                    {" "}
                    <p>Home</p>
                  </NavLink>
                </Button>

                <Button
                  fontSize="sm"
                  className="btnRes"
                  bg="#FFFFFFff"
                  _hover={{ color: "#FF645A" }}
                >
                  <NavLink to="/restaurent">
                    <p>Book A Table</p>
                  </NavLink>
                </Button>
                <Button
                  fontSize="sm"
                  className="btnRes"
                  bg="#FFFFFFff"
                  _hover={{ color: "#FF645A" }}
                >
                  <NavLink to="/restaurent">
                    {" "}
                    <p>Dineout Pay</p>
                  </NavLink>
                </Button>

                <Button
                  fontSize="sm"
                  className="btnRes"
                  bg="#FFFFFFff"
                  _hover={{ color: "#FF645A" }}
                >
                  <NavLink to="/restaurent/event">
                    <p>Events</p>
                  </NavLink>
                </Button>

                <Button
                  fontSize="sm"
                  className="btnRes"
                  bg="#FFFFFFff"
                  _hover={{ color: "#FF645A" }}
                >
                  <a href="https://www.dineout.co.in/blog/">
                    <p>Blog</p>
                  </a>
                </Button>
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={onOpen}
                backgroundColor="#FF645A"
                _hover={{ bg: "#f30f00", color: "#FFFFFF" }}
                color="white"
                variant="solid"
                size={["sm", "md"]}
                id="loginBtn"
              >
                Login
              </Button>
            </Stack>
          </Flex>

          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Home">
                    {" "}
                    <p>Home</p>
                  </a>
                </Button>
                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Home">
                    {" "}
                    <p>Home</p>
                  </a>
                </Button>

                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Home">
                    {" "}
                    <p>Home</p>
                  </a>
                </Button>
                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Home">
                    {" "}
                    <p>Home</p>
                  </a>
                </Button>
                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Home">
                    {" "}
                    <p>Home</p>
                  </a>
                </Button>

                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Book_A_Table">
                    <p>Book A Table</p>
                  </a>
                </Button>

                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Dineout_Pay">
                    {" "}
                    <p>Dineout Pay</p>
                  </a>
                </Button>

                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Events">
                    <p>Events</p>
                  </a>
                </Button>

                <Button onClick={isOpen ? onClose : onOpen}>
                  <a href="#Blog">
                    <p>Blog</p>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}