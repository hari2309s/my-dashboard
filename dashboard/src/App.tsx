import React from "react";

const Notes = React.lazy(() => import("notes/App"));

const App = () => {
  return (
    <div>
      Hallo? <Notes />
    </div>
  );
};

export default App;
