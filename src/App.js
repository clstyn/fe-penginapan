import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  <Router>
    <AuthContextProvider>
      <DestinationsContextProvider>
        <Routes>
          {user == null ? (
            <>
              <Route path="/*" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home1 />} />
              <Route path="/places" element={<Home />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/recommend" element={<Recommend />} />
              <Route path="/about" element={<About />} />
            </>
          )}
          {/* <Route path="/" element={<Home1 />} />
          <Route path="/places" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommend" element={<Recommend />} /> */}
        </Routes>
      </DestinationsContextProvider>
    </AuthContextProvider>
  </Router>;
}

export default App;
