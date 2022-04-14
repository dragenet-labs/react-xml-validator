import {Alert, Checkbox, Flex, Grid, Text} from "@chakra-ui/react";
import {useState} from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const Result = ({result}) => (<>
    <ResultHeader/>
    {result.filter(item => !item.isValid).map(item => <ResultItem key={item.nbr} item={item}/>)}
</>)

const ResultHeader = () => (
    <Grid templateColumns="repeat(4, 1fr)" gap="8px" w="100%" padding="12px 16px">
        <Text textAlign="left">Line</Text>
        <Text textAlign="center">Value</Text>
        <Text textAlign="right">Status</Text>
        <Text textAlign="right">Viewed</Text>
    </Grid>
)

const ResultItem = ({item}) => {
    const [isMarkedAsRead, setMarkAsRead] = useState(false);
    return (
        <StyledAlert status={item.isValid ? 'success' : 'error'} justifyContent="space-between" isRead={isMarkedAsRead}>
            <Grid templateColumns="repeat(4, 1fr)" gapRow="8px" gapColumn="16px" w="100%">
                <Text textAlign="left">{item.nbr}</Text>
                <Text textAlign="center">{item.value}</Text>
                <Text textAlign="right"
                      color={isMarkedAsRead ? 'gray.500' : 'red'}>{'INVALID'}</Text>
                <Flex justifyContent="flex-end">
                    <Checkbox colorScheme="blackAlpha" borderColor="black"
                              onChange={(e) => setMarkAsRead(e.target.checked)}/>
                </Flex>
            </Grid>
        </StyledAlert>

    )
}

const StyledAlert = styled(Alert)`
  ${({isRead}) => isRead && css`
    color: var(--chakra-colors-gray-500) !important;
    background-color: var(--chakra-colors-gray-100);
  `};
`