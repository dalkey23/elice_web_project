import Order from "../db/models/orderModel";
//import 주문정보 from "../"

//배송지정보,주문정보 저장
export const postOrder = async (req, res) => {
  const { name, phoneNumber, address, requirement, product, total } = req.body;

  try {
    await Order.create({
      name,
      phoneNumber,
      address,
      requirement,
      product,
      total,
    });
  } catch (error) {
    throw new Error(error);
  }

  res.send("디비에 배송지 정보 저장완료");
};
