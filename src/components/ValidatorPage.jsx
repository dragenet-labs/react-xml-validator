import {useState} from "react";
import {FileDnD} from "./FileDnD";
import {parseFile} from "../utils/parseFile";
import {Flex, Heading} from "@chakra-ui/react";
import {Result} from "./Result";

function App() {
    const [lines, setLines] = useState([])

    const handleNewFile = (files) => {
        const file = files[0];
        const reader = new FileReader()

        reader.onload = () => {
            setLines(parseFile(reader.result))
        }
        reader.readAsText(file)
    }

    return (
        <Flex alignItems="center" flexDirection="column" w="100vw">
            <Flex alignItems="center" flexDirection="column" padding={4} w={['95vw', '80%']} maxW="1000px">
                <Heading mb={4}>XML Validator</Heading>
                {/*<input type='file' accept="application/xml" onChange={handleNewFile}/>*/}
                <FileDnD w="100%" h="200px" mb={4} onUpload={handleNewFile}/>
                <Result result={lines}/>
            </Flex>
        </Flex>
    );
}

export default App;

