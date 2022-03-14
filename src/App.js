import "./App.css";
import React, { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import Popup from "./components/UI/popup/popup";
import Button from "./components/UI/button";
import { BsPlus } from "react-icons/bs";
import Discussions from "./components/discussions/discussions";

function App() {
  const [active, setActivity] = useState(false);

  return (
    <Fragment>
      {createPortal(
        <Popup
          active={active}
          handleClose={() => {
            setActivity(false);
          }}
          title="Discussions"
        >
          <Discussions />
        </Popup>,
        document.getElementById("popup-root")
      )}
      <div className={`bottom-right ${active && "hidden"}`}>
        <Button
          label={<BsPlus />}
          className="open_btn"
          onClick={() => {
            setActivity(true);
          }}
        />
      </div>
    </Fragment>
  );
}

export default App;
