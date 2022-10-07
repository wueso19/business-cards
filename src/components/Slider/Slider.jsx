const Slider = () => {
  return (
    <div className="flex w-full h-full items-center justify-center pt-6 ">
      <div className="flex w-5/6 h-5/6">
        <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-5 bg-1"></div>
        <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-5 bg-2"></div>
        <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-5 bg-3"></div>
        <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-5 bg-4"></div>
        <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-5 bg-5"></div>
      </div>
    </div>
  );
};
export default Slider;
