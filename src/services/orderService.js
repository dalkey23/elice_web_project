import Order from "../db/models/orderModel";
//import 주문정보 from "../"

//배송지정보,주문정보 저장
export const postOrder = async (req, res) => {
  const { name, phoneNumber, address, requirement, products, total } = req.body;

  try {
    await Order.create({
      name,
      phoneNumber,
      address,
      requirement,
      products,
      total,
      userId: _id,
    });
  } catch (error) {
    throw new Error(error);
  }

  res.send("디비에 배송지 정보 저장완료");
};

//사용자 주문조회(사용자가)

export const getOrder = async (req, res) => {
  const orderList = await Order.find({ userId });

  res.send(1);
};

export const deleteOrder = async (req, res) => {
  res.send(1);
};
