import React, { useContext, useState } from "react"
import { Box, Heading, Text, Avatar, Stack, FormControl, InputGroup, Input, Button  } from "@chakra-ui/react"
import Link from "next/link"
import axios from "axios"
import AuthContext from '../context/authprovider'
const login = () => {
    const { setAuth } = useContext(AuthContext)
    const [inputedData, setInputedData] = useState({
        email: "",
        password : ""
    })
    const [success, setSuccess] = useState(false);


    const handleSubmit = async(e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post("/api/post/getdata", 
                JSON.stringify({
                    email: inputedData.email,
                    password :inputedData.password
                }),
                {
                    headers: {'Content-Type': "aplication/json"},
                    withCredentials: true
                }
                )
            setAuth({
                email: inputedData.email,
                password :inputedData.password
            })
            setSuccess(true)
        } catch(err){
            console.log(err)
        }
        
    }
    return (
        <>
            {success ? (
                <Box boxSize="lg" bg="whiteAlpha.100" mt="5" mx="auto" p="4"
                color="aquamarine">
                    <Heading>Kamu sudah login</Heading>
                    <Link href="/">
                        <Text >Go To Home...</Text>
                    </Link>
                </Box>
            ) : (
                <Box boxSize="sm" bg="whiteAlpha.100" mt="5" mx="auto" p="4"
                color="aquamarine">
                     <Stack display="flex" justifyContent="center" alignContent="center">
                        <Avatar colorScheme="cyan" mx="auto"/>
                        <Heading fontSize="lg" textAlign="center">Sign in</Heading>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                        <Stack mt="3" spacing="4">
                            <FormControl>
                                <Input type="email" placeholder="email"
                                onChange={(e) => setInputedData({...inputedData, email: e.target.value})}/>
                            </FormControl>
                            <FormControl>
                                <Input type="password" placeholder="password"
                                onChange={(e) => setInputedData({...inputedData, password: e.target.value})}/>
                            </FormControl>
                        </Stack>
                        <Button type='submit' my="5">
                            signin
                        </Button>
                    </form>
                    <Stack>
                        <Text>Dont have an account?</Text>
                        <Link href="/register">
                            <Text>Sign up</Text>
                        </Link>
                    </Stack>
                </Box>
            )}
        </>
    )
}
export default login