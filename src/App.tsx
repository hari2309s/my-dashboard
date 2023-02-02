import React from "react";

const Notes = React.lazy(() => import("notes/App"));

const App = () => {
  return (
    <div>
      Hallo!
      <React.Suspense fallback="loading component...">
        <Notes />
      </React.Suspense>
    </div>
  );
};

export default App;
