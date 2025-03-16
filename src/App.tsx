import Home from "./pages/Home";
import About from "./pages/About";
import Video from "./pages/Video";

function App() {
    return (
        <>       
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="video">
                <Video />
            </section>
        </>
    );
}

export default App;