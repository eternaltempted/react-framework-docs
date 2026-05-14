import Cases from "./components/sections/Cases";
import Features from "./components/sections/Features";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import { ToastProvider } from "./components/ui/Toast/ToastProvider";

export default function App() {
  return (
    <div className="dark:bg-[#252525]">
      <ToastProvider>
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
        <Cases></Cases>
      </ToastProvider>
    </div>
  );
}
