import Dropzone from "react-dropzone";
import {Box, Flex, Input} from "@chakra-ui/react";

export const FileDnD = ({onUpload, ...props}) => (
    <Dropzone onDrop={onUpload}>
        {({getRootProps, getInputProps}) => (
            <Box border="3px solid" borderColor="teal" borderRadius="16px" {...props}>
                <Input {...getInputProps()} w="100%" h="100%" display="block" visibility="hidden"/>
                <Flex {...getRootProps()} w="100%" h="100%" justifyContent="center" alignItems="center">
                    Drop file or click and select
                </Flex>

            </Box>
        )}
    </Dropzone>
)