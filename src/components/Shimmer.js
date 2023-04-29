export const Shimmer = () => {
  return (
    <div className="restaurantContainer">
      {Array(10)
        .fill("")
        .map((val, index) => (
          <div key={index + val} className="shimmer_container">
            <div className="shimmer card">
              <div className="shimmer image_box"></div>
            </div>
            <div style={{ backgroundColor: "white" }}>
              <div className="shimmer title-line"></div>
              <div className="shimmer content-line"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
