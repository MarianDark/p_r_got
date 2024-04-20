import User, { findOne } from "./user.model";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const user = new User(req.body);

    const userExist = await findOne({ email: user.email });
    if (userExist) {
      return new Error("This email has already been used.");
    }
    const userDB = await user.save();
    return res.json({
      status: 201,
      message: `User ${userDB.email} created`,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await findOne({ email: req.body.email });
    console.log(compareSync(req.body.password, userInfo.password));
    if (compareSync(req.body.password, userInfo.password)) {
      userInfo.password = "*************"; // ocultamos el dato password en la respuesta por seguridad
      const token = sign(
        {
          id: userInfo._id,
          email: userInfo.email,
        },
        // eslint-disable-next-line no-undef
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
      );

      return res.status(200).json({
        data: { massage: "ok", user: userInfo, token: token },
      });
    } else {
      return res.json({
        status: 400,
        message: "invalid credentials",
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    return res.status(200).json({
      status: 200,
      message: "Logout successful",
    });
  } catch (error) {
    return next(error);
  }
};

export default { register, login, logout };
