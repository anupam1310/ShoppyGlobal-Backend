import { registerUser,loginUser } from "../Controller/user.controller.js";

function userRouter(app) {
    app.post('/register', registerUser);
    app.post('/login', loginUser);
}

export default userRouter;