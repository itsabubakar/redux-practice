import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import AddPostForm from "./features/post/AddPostForm"
import PostList from "./features/post/PostList"
import Layout from "./components/Layout";
import SinglePostPage from "./features/post/SinglePostPage";
import EditPostForm from "./features/post/EditPostForm";



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PostList />} />

                    <Route path="post">
                        <Route index element={<AddPostForm />} />
                        <Route path=":postId" element={<SinglePostPage />} />
                        <Route path="edit/:postId" element={<EditPostForm />} />
                    </Route>

                </Route>
            </Routes>
        </Router>

    );
}
export default App