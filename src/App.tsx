import ReactQueryWrapper from "./Provider";
import Router from "./Router.tsx";

const App = () => {
    return (
        <ReactQueryWrapper>
            <Router />
        </ReactQueryWrapper>
    );
};

export default App;