import "./App.css"

import { Header, Footer, Container, Mostpopular, Hero } from "./component/index.js";
const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Hero />
                <Mostpopular />
            </Container>
            {/*<Footer />*/}
        </>
    )
}

export default App;