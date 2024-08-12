import video from "../data/video.js";
import Header from "./Header"
import Votes from "./Votes"
import Comments from "./Comments"


function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header data={video}/>
      <Votes data={video} />
      <Comments data={video} />
    </div>
  );
}

export default App;
