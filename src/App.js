import { MyProvider } from "./context";
import Main from "./components/Main";

import "./styles/styles.css"

const App = () => {
    return (
        <MyProvider>
            <Main />
        </MyProvider>
    )
}

export default App;