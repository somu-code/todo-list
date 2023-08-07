import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState } from "./store/atom/TextState";
import { charCountState } from "./store/selector/charCountState";

function App() {
  return (
    <>
      <TextInput />
      <CharacterCounter />
      <h1>Hello, world</h1>
    </>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <br />
      <p>Echo: {text}</p>
    </div>
  );
}

function CharacterCounter() {
  const count = useRecoilValue(charCountState);
  return <p>Character Count: {count}</p>;
}

export default App;
