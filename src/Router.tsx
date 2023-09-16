import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostListView from "./pages/PostListView.tsx";
import PostDetailView from "./pages/PostDetailView.tsx";
import PostCreateView from "./pages/PostCreateView.tsx";
import PostUpdateView from "./pages/PostUpdateView.tsx";
import SignUpView from "./pages/SignUpView.tsx";
import LoginView from "./pages/LoginView.tsx";
import ProfileView from "./pages/ProfileView.tsx";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<PostListView />} />
                <Route path={'/:id'} element={<PostDetailView />} />
                <Route path={'/new'} element={<PostCreateView />} />
                <Route path={'/update/:id'} element={<PostUpdateView />} />
                <Route path={'/signup'} element={<SignUpView />} />
                <Route path={'/login'} element={<LoginView />} />
                <Route path={'/profile'} element={<ProfileView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;