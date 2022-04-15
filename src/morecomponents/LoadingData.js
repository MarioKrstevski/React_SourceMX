import React, { useEffect, useState } from "react";

function LoadingData() {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = () => {
    setIsLoading(!isLoading);
  }

  return (
    <div>
      {/* Loading Data */}
      {isLoading ? <div>Loading ... </div> : null}
      {isLoading && <div>Loading ... </div>}

      <button disabled={isLoading}  onClick={clickHandler}> {isLoading ? "Loading" : "Load"}</button>
    </div>
  );
}

export default LoadingData;
