import { useEffect, useState } from "react";

import Button from "../ui/Button";

import { TOAST_TYPES } from "../ui/Toast/Toast.config";
import { useGlobalToast } from "../../hooks/useGlobalToast";

const btnStyle =
  "bg-cyan-200 px-2 py-1 rounded-lg text-black hover:bg-green-300 cursor-pointer";

function Timer({ showNotification }) {
  const [countdown, setCountdown] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCountdown((countdown) => countdown + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="p-4 bg-cyan-100 rounded-lg shadow-md max-w-96">
      <h3 className="font-medium text-center">useEffect() with timers</h3>
      <div className="py-4 text-center">
        <p className="font-bold text-xl">{countdown}</p>
      </div>

      <div className="flex flex-wrap flex-row gap-2 justify-center">
        <Button
          style={btnStyle}
          text="Start"
          func={() => {
            setIsRunning(true);
          }}
          disabled={isRunning}
        ></Button>
        <Button
          style={btnStyle}
          text="Stop"
          func={() => setIsRunning(false)}
        ></Button>
        <Button
          text="Reset"
          style={btnStyle}
          func={() => {
            setIsRunning(false);
            setCountdown(0);
            showNotification(TOAST_TYPES.UPDATED);
          }}
        ></Button>
      </div>
    </div>
  );
}

function Counter({ showNotification }) {
  // current value stored in state
  //        v
  //    [count,

  // function used to update the state
  //                 v
  //              setCount] = useState(0);

  // initial value passed into the state
  //                                 v
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-cyan-100  rounded-lg shadow-md max-w-75">
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
            showNotification(TOAST_TYPES.UPDATED); // UPDATED
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
  );
}

function Form({ showNotification }) {
  const [name, setName] = useState("Unknown");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-4 bg-cyan-100 rounded-lg shadow-md max-w-75">
      <h3 className="font-medium text-center">useState() with forms</h3>
      <p className="py-2 text-center flex justify-center gap-1">
        Your name:
        <span className="font-bold">{!name.trim() ? "Unknown" : name}</span>
      </p>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setName(inputValue);
            setInputValue("");
            inputValue.trim() === ""
              ? showNotification(TOAST_TYPES.DELETED)
              : showNotification(TOAST_TYPES.OFFLINE);
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
  );
}

export default function Cases() {
  const { showNotification } = useGlobalToast();

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

          <Counter showNotification={showNotification} />
          <Form showNotification={showNotification} />
          <Timer showNotification={showNotification}></Timer>
        </div>
      </section>
    </>
  );
}
