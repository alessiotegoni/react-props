import { posts } from "./components/constants";
import Card from "./components/ui/Card/Card";
import "./index.css";
function App() {
  return (
    <div className="hero">
      <header className="">
        <div className="container">
          <h1>il mio blog</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="flex">
            {posts.map(
              (post) => post.published && <Card key={post.id} {...post} />
            )}
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          laborum sed, quas atque perspiciatis ex sint similique veritatis dolor
          voluptatum veniam. Voluptate possimus unde veniam dolorem praesentium,
          quaerat et autem.
        </div>
      </footer>
    </div>
  );
}

export default App;
