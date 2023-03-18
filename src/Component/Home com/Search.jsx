
// 12345
 


// p


import React, { useState } from "react";

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Text,
  Button,
  Heading,
  Flex,
  Image,
  Avatar
} from "@chakra-ui/react";

import { SearchIcon } from '@chakra-ui/icons'
const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
   const [showModal, setShowModal] = useState(false);



  let timeoutId;

const handleChange = (e) => {
  const { value } = e.target;
  
  function delayedSearch(value) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      getSearch(value);
      
      setShowModal(true);
    }, 2000);
  }

  function getSearch(value) {
    fetch(
      `https://wild-rose-cape-buffalo-kit.cyclic.app/restaurants?resName_like=${value}`
    )
      .then((res) => res.json())
      .then((data) => setSuggestions(data.slice(0, 10)))
      .catch((err) => console.log(err));
  }

  setQuery(value );
  delayedSearch(value);
  
};

  return (
    <Box
    bgImage="https://im1.dineout.co.in/images/uploads/misc/2021/Mar/31/oldherobannerwebfinal_bau.jpg"
      bgSize="cover"
      height="300px"
      textAlign="center"
      paddingTop="100px"
      marginBottom='50px'
    >
      <Heading fontSize="3xl" fontWeight="bold" color="white">
         It's Now Safe To  <Heading as="span" color="#FF645A">Crave!</Heading>
       </Heading>
       <Box ml='75px' mr='75px' h='60px' bg='white' borderRadius='lg'>
       <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          
          children={<SearchIcon color="#FF645A" boxSize={6} mt='18px' />}
        />
        <Input type="text" placeholder="Search"  h='60px' onChange={handleChange} />
        <Button bg='#FF645A' color='white' h='50px' m='5px' w='130px'>Search</Button>
      </InputGroup>
       
       </Box>
      

       
            
              {/* <Box border="1px solid #ccc" borderRadius="md" bg="white"  
              // w="50%" marginLeft="20%"
               boxShadow='0 0 10px black'
              //  overflow='hidden'
               
                 
               
              > */}
              <Box
        border="1px solid #ccc"
        borderRadius="md"
        bg="white"
        boxShadow="0 0 10px black"
        position="relative"
        zIndex="1"
        marginTop="-1px"
        maxHeight="250px"
        overflowY="auto"
      >
                
                <List  >
                  {suggestions.map((item) => (
                    <ListItem
                     
                      key={item.id}
                      px={4}
                      py={2}
                      _hover={{ background: "#f5f5f5" }}
                      onClick={() => {
                        setQuery(item.resName);
                        // setShowModal(false);
                      }}
                    >
                      <Flex>
                      
                      <Avatar  size='md' src={item.image} />
                      <Text>{item.resName}</Text>
                      </Flex>
                      
                    </ListItem>
                  ))}
                </List>

                
                
              </Box>
             
             </Box>
  );
};

export default Search;


// ppppp



// import { useState } from "react";
// import {
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverBody,
//   List,
//   ListItem,
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";

// function Search() {
//   const [searchValue, setSearchValue] = useState("");
//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchValue(value);

//     // Here you can make an API call or search through your data to get search suggestions
//     // For this example, we'll just use a static list of search suggestions
//     setSearchSuggestions(["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"].filter((suggestion) =>
//       suggestion.toLowerCase().includes(value.toLowerCase())
//     ));
//   };

//   return (
//     <InputGroup>
//       <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
//       <Input type="text" placeholder="Search" value={searchValue} onChange={handleSearchChange} />

//       <Popover isOpen={searchSuggestions.length > 0}>
//         <PopoverTrigger>
//           <></>
//         </PopoverTrigger>
//         <PopoverContent width="100%">
//           <PopoverBody p="0">
//             <List bg="white" border="1px solid" borderColor="gray.200" borderRadius="md" boxShadow="md" maxH="300px" overflowY="scroll">
//               {searchSuggestions.map((suggestion) => (
//                 <ListItem key={suggestion} py="2" px="4" _hover={{ bg: "gray.100" }}>
//                   {suggestion}
//                 </ListItem>
//               ))}
//             </List>
//           </PopoverBody>
//         </PopoverContent>
//       </Popover>
//     </InputGroup>
//   );
// }
// export default Search;



















