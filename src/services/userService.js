import User from "../db/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//회원가입
export const postJoin = async (req, res) => {
  const { name, email, password, password2, phoneNumber, address } = req.body;

  //이메일 중복확인
  const user = await User.findOne({ email });
  if (user) {
    throw new Error("이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.");
  }
  // //패스워드가 같은지 확인

  // if (password !== password2) {
  //   throw new Error("패스워드가 일치하지 않습니다.");
  // }

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
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("해당 이메일은 가입한 사용자가 아닙니다.");
  }

  //비밀번호 확인
  //1번째는 프론트에서 가져온 비밀번호, 2번째는 db비밀번호
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }
  // 로그인 성공 -> JWT 웹 토큰 생성
  const secretKey = process.env.JWT_SECRET_KEY || "secret-key";

  // jwt 토큰에 유저 아이디 담기
  const token = jwt.sign({ userId: user._id }, secretKey);

  return { token };
};

//마이 페이지
export const seeMyPage = async (res, req) => {
  const { id } = req.params;
  res.send("mypage");
};

//회원 정보 수정
export const changeUser = async (req, res) => {
  res.send("1");
};

//로그아웃
// jwt를 이용해 토큰 제거 하는게 쉽지않음 일단 보류

export const logOut = async (req, res) => {
  return res.cookies.set("token");
};
