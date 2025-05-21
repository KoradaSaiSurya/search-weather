// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Register from './Register';
// import Login from './Login';
// import Todo from './Todo';
// import ProtectedRoute from './ProtectedRoute';

// const App = () => {
//   return (
    
//       <Routes>
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/todo"  element={ <ProtectedRoute> <Todo /> </ProtectedRoute> }
//         />
//       </Routes>
  
//   );
// };

// export default App;



import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤️ Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;




