
import jwt from "jsonwebtoken";
const generateTOken = (_id) => {
  return jwt.sign(
    {
      _id,
    },
    process.env.jwt_Secert,
    { expiresIn: "30d" }
  );
};
export default generateTOken;
