import Order from "../db/models/orderModel";

// 관리자페이지 (필요없을듯)
export const getAdmin = async (req, res) => {
  res.send("admin page");
};
//주문관리 (총 주문건 조회)
export const handleOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
    return orders;
  } catch (error) {
    throw new Error(error);
  }
};
//주문 상태관리
export const handleChange = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    const user = await Order.findOne({ orderId });
    await user.updateOne({ orderStatus });

    res.status(200).json("1");
  } catch (error) {
    throw new Error(error);
  }
};
//주문취소

export const handleDelete = async (req, res) => {
  try {
    const { orderId } = req.params;
    await Order.deleteOne({ orderId });
    res.status(200).json("삭제완료");
  } catch (error) {
    throw new Error(error);
  }
};

//카테고리 추가
export const addCategory = async (req, res) => {
  res.send("카테고리 추가");
};

//카테고리 수정
export const editCategory = async (req, res) => {
  res.send("카테고리 수정");
};

//카테고리 삭제
export const deleteCategory = async (req, res) => {
  res.send("카테고리 삭제");
};
