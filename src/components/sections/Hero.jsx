import { useToast } from "../../hooks/useToast";
import Toast from "../ui/Toast";
import Button from "../ui/Button";

export default function Hero() {
  const { currentToast, showNotification, hideNotification } = useToast();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="font-bold text-4xl text-center dark:text-white">
        Learn <span className="text-cyan-400">React</span> easy!
      </h1>
      <p className=" text-center max-w-96 md:max-w-120 text-lg sm:text-xl text-gray-800 dark:text-gray-200">
        Explore different hooks, components, and modern React patterns through
        simple examples and interactive practice.
      </p>
      {/* specifying props */}
      <div className="flex flex-row items-center gap-4">
        <Button
          text={"Explore docs"}
          style={
            "px-4 py-1 rounded-lg text-white bg-cyan-400 cursor-pointer hover:bg-cyan-500 transition-colors"
          }
          func={() => {
            showNotification("error");
          }} // arrow function
        ></Button>
        <Button
          text={"Surprise me!"}
          style={
            "px-4 py-1 rounded-lg text-white bg-cyan-400 cursor-pointer hover:bg-cyan-500 transition-colors"
          }
          func={() => {
            showNotification("development");
          }} // arrow function
        ></Button>
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
  );
}
