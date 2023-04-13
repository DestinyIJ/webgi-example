import { useRef } from "react";
import { Navbar, Jumbotron, SoundSection, DisplaySection, WebGiViewer, Loader } from "./components";

function App() {
  const webGiViewerRef = useRef()

  const contentRef = useRef()

  const handlePreview = () => {
    webGiViewerRef.current.triggerPreview()
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} className="content">
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      
      <WebGiViewer contentRef={contentRef} ref={webGiViewerRef} />
    </div>
  );
}

export default App;
