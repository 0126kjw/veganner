import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insight from "./pages/insight/Insight";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import View from "./pages/postView/PostView";
import Map from "./pages/map/Map";
import data from "../src/assets/data-analysis/json/seoul.json";
import ResitemDetail from "./components/Map/ResitemDetail";
import List from "./pages/list/List";
import Kakao from "./pages/login/Kakao";
import AddPost from "./pages/addPost/Addpost";
import EditPost from "./pages/editPost/EditPost";
import ChartView from "./components/chart/ChartView";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/board" element={<List />} />
          <Route path="/board/:postId" element={<View />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="board/:postId/edit" element={<EditPost />} />
          {/* <Route path="/edit" element={<EditPost />} /> */}
          <Route path="/explore" element={<Map />} />
          <Route
            path="/explore/detail/:id"
            element={<ResitemDetail detail={data.data} />}
          />
          <Route path="/auth/kakao/callback" element={<Kakao />} />
          <Route path="/chart" element={<ChartView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
