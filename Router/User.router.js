import { registerUser,loginUser } from "../Controller/user.controller.js";
// User routes
function userRouter(app) {
    app.post('/register', registerUser);
    app.post('/login', loginUser);
}

export default userRouter;