import Report from "./sections";
import useQueryData from "./hooks/useQueryData";

function App() {
  const { data } = useQueryData("industry");
  console.log(data);
  return (
    <>
      <Report />
    </>
  );
}

export default App;
