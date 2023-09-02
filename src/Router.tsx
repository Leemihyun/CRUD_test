import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostListView from "./pages/PostListView.tsx";
import PostDetailView from "./pages/PostDetailView.tsx";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<PostListView />} />
                <Route path={'/:id'} element={<PostDetailView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;