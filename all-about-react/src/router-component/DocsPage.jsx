import React from "react";
import { useLocation } from "react-router-dom";

const DocsPage = () => {
  const location = useLocation();

  return (
    <div>
      {location.state && (
        <div>
          <p>Name {location.state.name}</p>
          <p>Age {location.state.age}</p>
        </div>
      )}
    </div>
  );
};

export default DocsPage;
