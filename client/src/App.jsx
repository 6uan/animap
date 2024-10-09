import Header from "./components/Header";
import ZooMap from "./components/ZooMap";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      element: <ZooMap />,
    },
  ];

  const element = useRoutes(routes);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      {element}
    </div>
  );
}

export default App;
