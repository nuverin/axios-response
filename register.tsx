import { Box, FormControl, Input, InputGroup, Stack, Heading, Avatar, FormLabel, Button, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
const register = () => {

    const [inputedData, setInputedData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [valid, setValid] = useState(false)
    const [validMatch, setValidMatch] = useState(false)
    const router = useRouter()

    
    const handleCreateData = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch('/api/post/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: inputedData.username,
                email: inputedData.email,
                password: inputedData.password
            })
        })
        return await router.push("/login")
    }
  return (
    <>
        <Box boxSize="lg" bg="whiteAlpha.100" mt="5" mx="auto" p="4"
        color="aquamarine" >
            <Stack display="flex" justifyContent="center" alignContent="center">
                <Avatar colorScheme="cyan" mx="auto"/>
                <Heading fontSize="lg" textAlign="center">Sign in</Heading>
            </Stack>
            <form onSubmit={handleCreateData}>
                <Stack mt="5" spacing={3}>
                
                    <FormControl >
                        <FormLabel>username</FormLabel>
                        <InputGroup>
                            <Input type="text" placeholder='username'
                            onChange={(e) => {
                                setInputedData({...inputedData, username: e.target.value})
                            }}/>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                    <FormLabel>email</FormLabel>
                        <InputGroup>
                            <Input type="text" placeholder='email'
                            onChange={(e) => {
                                setInputedData({...inputedData, email: e.target.value})
                            }}/>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                     <FormLabel>password</FormLabel>
                        <InputGroup>
                            <Input type="text" placeholder='password'
                            onChange={(e) => {
                                setInputedData({...inputedData, password: e.target.value})
                            }}/>
                        </InputGroup>
                    </FormControl>
                 </Stack>
                    <Button type='submit' my="5">
                        signup
                    </Button>
            </form>
            
        
        </Box>
    </>
  )
}

export default register