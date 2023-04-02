import cookie from "cookie";
import dbConnect from "../../../util/mongo";
import User from "../../../models/User";

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    const { usernameIn, passwordIn } = req.body;
    console.log(req.body)
    try {
      const userData = await User.findOne({usernameIn,passwordIn});
      console.log(userData);
      if (userData) {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", process.env.TOKEN, {
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
          })
        );
        res.status(200).json("Successful");
      } else {
        res.status(400).json("Wrong Credentials!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;

