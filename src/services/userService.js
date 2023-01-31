import User from "../db/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//회원가입
export const postJoin = async (req, res) => {
  const { name, email, password, password2, phoneNumber, address } = req.body;

  //이메일 중복확인
  const user = await User.findByEmail(email);
  if (user) {
    throw new Error("이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.");
  }
  //패스워드가 같은지 확인
  if (password !== password2) {
    throw new Error("패스워드가 일치하지 않습니다.");
  }
  //패스워드 해쉬화
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400);
  }
};

//로그인
export const postLogin = async (res, req) => {
  const { email, password } = req.body;

  //DB에 있는 사용자 인지 확인
  const user = await User.findByEmail(email);
  if (!user) {
    throw new Error("해당 이메일은 가입한 사용자가 아닙니다.");
  }

  //비밀번호 확인
  //1번째는 프론트에서 가져온 비밀번호, 2번째는 db비밀번호
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }
  const token = jwt.sign({ userId: user._id });
  return token;
};
