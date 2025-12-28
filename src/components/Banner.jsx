function Banner() {
  return (
    <div
      className="h-[35vh] md:h-[85vh] bg-cover bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url(https://images8.alphacoders.com/999/999107.jpg)`,
      }}
    >
      {/* Solid overlay like your previous banner */}
      <div className="w-full bg-blue-900/80 p-6 md:p-6 flex justify-center items-end">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center drop-shadow-lg">
          Avengers Endgame
        </h1>
      </div>
    </div>
  );
}

export default Banner;
