import Cases from "./components/sections/Cases";
import Features from "./components/sections/Features";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

export default function App() {
  return (
    <>
      <div className="dark:bg-[#252525]">
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
        <Cases></Cases>
      </div>
    </>
  );
}
