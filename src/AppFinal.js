import Header from "./components/header";
import App from "./App";

const AppFinal = () => {

    var lowmode = false

    return (
        <div style={{marginTop: "100px"}}>
            <Header lowMode={lowmode}></Header>
            <App lowMode={lowmode}/>
        </div>
    )
}

export default AppFinal;