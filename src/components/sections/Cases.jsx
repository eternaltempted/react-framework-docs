import { useState } from "react";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

import { useToast } from "../../hooks/useToast";

export default function Cases() {
  const { currentToast, showNotification, hideNotification } = useToast();
  const btnStyle =
    "bg-green-200 px-2 py-1 rounded-lg text-black hover:bg-green-300 cursor-pointer";
  // current value stored in state
  //        v
  //    [count,

  // function used to update the state
  //                 v
  //              setCount] = useState(0);

  // initial value passed into the state
  //                                 v
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Unknown");
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <section className="py-20" id="cases">
        <div className="text-center py-2">
          <h2 className="font-bold dark:text-white text-4xl py-2">
            React Use Cases
          </h2>
          <p className="text-xl dark:text-gray-200 text-gray-600">
            Explore practical examples of React hooks, state management, and
            interactive UI behavior.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center py-2 gap-4">
          {/* useState with count */}
          <div className="p-4 bg-green-100  rounded-lg shadow-md max-w-75">
            <h3 className="font-medium">useState() with count</h3>
            <p className="py-2 text-center">
              Count: <span className="font-bold">{count}</span>
            </p>
            <div className="flex flex-row justify-center gap-2">
              <Button
                func={() => setCount(count + 1)}
                text={"+1"}
                style={btnStyle}
              ></Button>

              <Button
                func={() => {
                  setCount(0);
                  showNotification("updated");
                }}
                text={"Reset"}
                style={btnStyle}
              ></Button>

              <Button
                func={() => setCount(count - 1)}
                text={"-1"}
                style={btnStyle}
              ></Button>
            </div>
          </div>

          <div className="p-4 bg-green-100 rounded-lg shadow-md max-w-75">
            <h3 className="font-medium text-center">useState() with forms</h3>
            <p className="py-2 text-center flex justify-center gap-1">
              Your name:
              <span className="font-bold">
                {!name.trim() ? "Unknown" : name }
              </span>
            </p>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  setName(inputValue);
                  setInputValue("");
                  inputValue.trim() === ""
                    ? showNotification("error")
                    : showNotification("updated");
                }}
                className="flex flex-row justify-center gap-2"
              >
                <input
                  className="border border-gray-400 rounded-md px-2 py-1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  maxLength={16}
                />
                <Button type="submit" style={btnStyle} text={"Set"}></Button>
              </form>
            </div>
          </div>
        </div>
        {currentToast && (
          <Toast
            type={currentToast.type}
            title={currentToast.title}
            message={currentToast.message}
            onClick={hideNotification}
          ></Toast>
        )}
      </section>
    </>
  );
}
