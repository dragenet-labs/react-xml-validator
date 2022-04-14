import {ChakraProvider} from "@chakra-ui/react";
import ValidatorPage from "./components/ValidatorPage";


function App() {
    return (
        <ChakraProvider>
            <ValidatorPage />
        </ChakraProvider>
    );
}

export default App;

