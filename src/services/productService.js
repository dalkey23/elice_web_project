import Product from "../db/models/productModel";



//카테고리 상품리스트 전체 보여주기 (포스트맨 작동함)

export const inCategoryAll = async (req, res, next) => {
  const some = req.params.id;
  const serchAll = await Product.find({ categoryId: some });
  res.json({ serchAll });
};

//상품  한개 조회(포스트맨 작동함)
export const findOneProduct = async (req, res, next) => {
  const productName = req.params.name;
  const serchOne = await Product.findOne({ productName });

  // if (req.query.edit) {
  //   res.send("req.query.edit");
  //   return;
  // }
  res.json({ serchOne });
};

//상품등록(포스트맨 작동함)
export const addProduct = async (req, res, next) => {
  const { productName, categoryId, manufacturer, shortDesc, detailDesc,
    imgUrl, totalstocks, price, searchKeywords } = req.body;

  try {
    //   if (!productName || !categoryId || !price) {
    //     throw new Error("필수항목을 입력해 주세요");
    //   }

    // db 상품데이터 생성
    await Product.create({
      productName, categoryId, manufacturer, shortDesc, detailDesc,
      imgUrl, totalstocks, price, searchKeywords
    });

    res.send("상품생성을 완료하였습니다.");
  } catch (err) {
    next(err);
  };

};

//상품수정 (포스트맨 작동함)
export const editProduct = async (req, res, next) => {
  const { productName, categoryId, manufacturer, shortDesc,
    detailDesc, imgUrl, totalstocks, price, searchKeywords } = req.body;
  const { id } = req.params;
  try {
    let searchForEdit = await Product.findOne({ id });
    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!searchForEdit) {
      const err = "해당 상품이 없습니다. 정확한 상품명을 다시 한번 확인해 주세요.";
      return { err };
    }
    // if (!productName || !categoryId || !price)
    //   throw new Error('필수값은 반드시 입력해 주셔야 합니다.');
    await searchForEdit.updateOne({
      productName, categoryId, manufacturer, shortDesc,
      detailDesc, imgUrl, totalstocks, price, searchKeywords,
    });
    // const updated = Product.findOne({ id });

    return res.send('상품수정을 완료하였습니다.')
    // res.write("<script>alert('상품수정 완료')</script>");
  } catch (error) {
    return error;
  }
};

//id로 상품을 찾아서 삭제 (포스트맨 작동함)

export const deleteProduct = async (req, res, next) => {

  try {
    const { id } = req.params;
    const delOne = await Product.findOne({ id });


    if (!delOne) throw new Error("상품이 존재하지 않습니다.");

    await Product.deleteOne({ id });
    // alert("상품이 삭제되었습니다.")

    // 삭제후 다시 업데이트된 상품리스트를 보내줌.
    // res.redirect("/Products")    
    res.send("삭제완료");
  } catch (err) {
    next(err);
  }
}