import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostListView from "./pages/PostListView.tsx";
import PostDetailView from "./pages/PostDetailView.tsx";
import PostCreateView from "./pages/PostCreateView.tsx";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<PostListView />} />
                <Route path={'/:id'} element={<PostDetailView />} />
                <Route path={'/new'} element={<PostCreateView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;