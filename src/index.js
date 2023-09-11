// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Company from "./Company";
import Nav from "./Nav";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
    <>
    <Nav />
    <Company />
  </>
  // </StrictMode>
);
