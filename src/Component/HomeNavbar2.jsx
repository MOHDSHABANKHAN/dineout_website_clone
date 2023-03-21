import React, { useState, useEffect } from "react";

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

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
  } from '@chakra-ui/react'

  import {
    HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
  import {NavLink, Link } from "react-router-dom";
  import { useContext } from "react";
import { MyContext } from "./Context";
  import "./HomeNavbar.css";
  
  export default function HomeNavbar() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const { city, setcity,user, setUser } = useContext(MyContext);
    let { isOpen, onOpen, onClose } = useDisclosure();
    let { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
    let { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3 } = useDisclosure();

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [username, setUserName] = useState("");
    const [userphone, setUserPhone] = useState("");
    // const navigator = useNavigate();
    const handleSubmit = () => {
      if (userphone.length !== 10){
        alert("Please Enter Valid Mobile No");
        
      }
      // else navigator("/otp");
      else console.log("Valid Mobile No");
      setUser(username);
      onClose();
      handleOpen();
    };
    //  console.log(username);
    //  console.log(user);
    // OTP Code

    const [enter, setEnter] = useState("");
    const [otp, setOtp] = useState("");

    const newOtp = () => {
        setOtp(Math.floor(Math.random() * 10000) +1);
    }

    useEffect(() => {
        newOtp();
    }, []) 

    const handleOpen =()=>{
        onOpen2();
        alert("Your OTP is " + otp);
        console.log(otp)
    }

    const handleSubmit2 = () => {
        if (enter == otp){
            onClose2();

        }
        else alert("Wrong OTP entered. Please Try Again!");
    };


    // Return Statement
    return (
      <div id="MainDiv" style={{fontFamily: "arial, sans-serif"}}>
        <Box
        //** Navbar Background
          bg='#FFFFFF'
          px={9}
          width={["100%"]}
          height='75px'
          
        >
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"} >
          <Link to="/"><HStack w="42%">
              <img 
              className="logoImg"
              src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
              />
            </HStack></Link>

            <div class="searchBar ">
                <svg class='locIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 13">
                  <path fill="#666" fill-rule="nonzero" d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z">
                  </path>
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
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}} >
                    <NavLink to="/">
                      {" "}
                      <p>Home</p>
                    </NavLink>
                  </Button>
  
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <NavLink to="/restaurent">
                      <p>Book A Table</p>
                    </NavLink>
                  </Button>
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                  <NavLink to="/restaurent">
                      {" "}
                      <p>Dineout Pay</p>
                      </NavLink>
                  </Button>
  
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                  <NavLink to="/restaurent/event">
                      <p>Events</p>
                    </NavLink>
                  </Button>
  
                  <Button fontSize='sm' className="btnRes" bg='#FFFFFFff' _hover={{color: '#FF645A'}}>
                    <a href="https://www.dineout.co.in/blog/">
                      <p>Blog</p>
                    </a>
                  </Button>
                </HStack>
              </HStack>
            </Flex>
  
            
            {/* Login BUTTON */}


            {
          user.length=="" ?
          <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button
                  backgroundColor="#FF645A"
                  _hover={{ bg: "#f30f00", color: "#FFFFFF" }}
                  color="white"
                  variant="solid"
                  size={["sm", "md"]}
                  id="loginBtn"
                  onClick={onOpen}
                >
                 {
                  user.length=="" ?   "Login" : user
                 } 
                </Button>
              </Stack>
            </Flex> :
                    <div className="account_section">
                    <div className="userInititals">
                      <p>{user}</p>
                    </div>
                    <select name="" id="select_account" onChange={()=>{setUser("")}}>
                      <option value="Account">My Account </option>
                      <option value="Profile">Profile</option>
                      <option value="Coupon">History</option>
                      <option value="Logout">Logout</option>
                    </select>
                  </div>
               
        }

            {/* Login BUTTON Modal*/}
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color='#FF645A' fontWeight='bold'>Log In / Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    {/* <FormLabel>Enter Mobile number or Email</FormLabel> */}
                    <Input ref={initialRef} placeholder='Enter Mobile number or Email' type="text"
                      
                      onChange={(e) => setUserPhone(e.target.value)}/>
                  </FormControl>

                  <FormControl mt={4}>
                    {/* <FormLabel>Last name</FormLabel> */}
                    <Input onChange={(e) => setUserName(e.target.value)} placeholder='Enter name' />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button bg='#FF645A' color="white" p='20px 200px' borderRadius='none' _hover={{bg: '#f30f00'}}
                  onClick={() => handleSubmit()}
                  >
                    Continue
                  </Button>
                </ModalFooter>
                <div class="_2NTob">
                  <span class="orLogin">Or login via</span>
                </div>
                <div class="fbGmail">
                  <img src="data:image/png;base64,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" />
                  <img  style={{width: '180px', height: '40px', padding: '5px 10px'}} src="data:image/jpeg;base64,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" />
                </div>
              </ModalContent>
        
            </Modal>
            
            {/* Otp BUTTON Modal*/}
            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen2}
        onClose={onClose2}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='#FF645A' fontWeight='bold'>Log In / Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>Enter Mobile number or Email</FormLabel> */}
              <Input placeholder='Enter the OTP sent to your mobile no' type="number"
                
                onChange={(e) => setEnter(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <p style={{color:'rgb(43, 232, 232)', fontSize: '13px'}}>A One Time Password(OTP) has been sent to your phone, please enter it here to log in</p>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg='#FF645A' color="white" p='20px 200px' borderRadius='none' _hover={{bg: '#f30f00'}}
            onClick={() => handleSubmit2()}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
        
      </Modal>


            {/* Responsive Short Navbar */}
            <IconButton
              size={"md"}
              icon={isOpen3  ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen3 ? onClose3 : onOpen3}
            />
            {isOpen3 ? (
              <Box pt='15rem' bg='red' display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  
                  <Button
                    onClick={isOpen3 ? onClose3 : onOpen3}
                  >
                    <a href="#Home">
                      {" "}
                      <p>Home</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen3 ? onClose3 : onOpen3}
                  >
                    <a href="#Book_A_Table">
                      <p>Book A Table</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen3 ? onClose3 : onOpen3}
                  >
                    <a href="#Dineout_Pay">
                      {" "}
                      <p>Dineout Pay</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen3 ? onClose3 : onOpen3}
                  >
                    <a href="#Events">
                      <p>Events</p>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen3 ? onClose3 : onOpen3}
                  >
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
  