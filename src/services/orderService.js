import Order from "../db/models/orderModel";
import User from "../db/models/userModel";
//import 주문정보 from "../"

//배송지정보,주문정보 저장
export const postOrder = async (req, res) => {
  const { name, phoneNumber, address, requirement, products, total } = req.body;
  //토큰의 유저 아이디 불러오기
  const userId = req.currentUserId;
  const user = await User.findOne({ userId });

  try {
    await Order.create({
      name,
      phoneNumber,
      address,
      requirement,
      products,
      total,
      user,
    });
  } catch (error) {
    throw new Error(error);
  }

  res.send("디비에 배송지 정보 저장완료");
};

//사용자 주문조회(사용자가)

export const getOrder = async (req, res) => {
  //토큰의 유저 아이디 불러오기
  const userId = req.currentUserId;
  const user = await User.findOne({ userId });

  res.send(1);
};

export const deleteOrder = async (req, res) => {
  res.send(1);
};
