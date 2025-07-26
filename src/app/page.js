import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-8">
      <p className="font-fifth text-3xl text-[#685050]">
        Click on the box to open it!
      </p>
      <Carousel />
    </div>
  );
}
