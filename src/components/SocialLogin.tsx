import { Box, Button, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { FaComment, FaGithub } from 'react-icons/fa'

export default function SocialLogin() {
  const kakaoParams = {
    client_id: '5b48d30cd4689e8a3198b979ec33121b',
    redirect_uri: 'http://localhost:3000/social/kakao',
    response_type: 'code',
  }
  const params = new URLSearchParams(kakaoParams).toString()
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text
          textTransform={'uppercase'}
          fontSize={'xs'}
          as='b'
          color='gray.500'
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          as='a'
          href='https://github.com/login/oauth/authorize?client_id=0c80e54ae672b5f74811&scope=read:user,user:email'
          w='100%'
          leftIcon={<FaGithub />}
        >
          Continue with Github
        </Button>
        <Button
          as='a'
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w='100%'
          leftIcon={<FaComment />}
          colorScheme={'yellow'}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  )
}
