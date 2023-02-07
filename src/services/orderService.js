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
  //토큰에 맞는 유저 찾기
  const user = await User.findOne({ userId });

  try {
    const id = user._id; // 유저 objectId
    //Order에 user가 id 인 사람
    const orderPerson = await Order.findOne({ user: id });
    //OrderPerson의 주문 상품들 보내주기
    res.status(200).json(orderPerson.products);
  } catch (error) {
    res.status(400).Error(error);
  }
};

export const deleteOrder = async (req, res) => {
  res.send(1);
};
