import Product from "../db/models/productModel";



//카테고리 상품리스트 전체 보여주기 (포스트맨 작동함)
export const showAllProducts = async (req, res, next) => {  
  // if (req.query.write) {
  //   res.json();
  //   return;
  // }
  //조건이 db참조해서 카테고리id로 카테고리 상품을 모두 찾아 보여줌.


// ------> 카테고리 전부 가져오는 부분구현해라


  const allProduct = req.params.id;
  const serchAll = await Product.find({categoryId:allProduct});
  
    // if (req.query.edit) {
    //   res.send("req.query.edit");
    //   return;
    // }
  res.json ({ serchAll });
  };
// const categories = req.get(categoryId)
// const d = Product.filter(Product.categoryId) 
//     return result.map((
//       { productName, categoryId, manufacturer, shortDesc, detailDesc,
//       imgUrl, totalstocks, price, searchKeywords }) => () );
//  } 
//   const productsList = await Product.findAll(categoryId);
//   res.send( `${productsList}`);

//상품  한개 조회(포스트맨 작동함)
export const findOneProduct = async (req, res, next) => {
  const  productName  = req.params.name;
  const serchOne = await Product.findOne({ productName });

  // if (req.query.edit) {
  //   res.send("req.query.edit");
  //   return;
  // }
  res.json ({ serchOne });
  };

//상품등록(포스트맨 작동함)
export const addProduct = async (req, res, next) => {
  const { productName, categoryId, manufacturer, shortDesc, detailDesc,
     imgUrl, totalstocks, price, searchKeywords } = req.body;

  try {
  //   if (!productName || !categoryId || !detailDesc || !imgUrl || !price) {
  //     throw new Error("필수항목을 입력해 주세요");
  //   }

    // db 상품데이터 생성
    await Product.create({
      productName, categoryId, manufacturer, shortDesc, detailDesc, 
      imgUrl, totalstocks, price, searchKeywords });

    res.send("생성완료");
    } catch (err) {
    next(err);
    };

};
//상품수정
//id로 게시글 수정하는 코드를 작성중
export const editProduct = async (req, res, next) => {
  const  productName  = req.params.name;
  let serchForEdit = await Product.findOne({ productName });
 
  try {
    const { productName, categoryId, manufacturer, shortDesc, 
        detailDesc, imgUrl, totalstocks, price, searchKeywords } = req.body;
// db에서 찾지 못한 경우, 에러 메시지 반환
    if (!serchForEdit) {
      const errorMessage = "해당 상품이 없습니다. 정확한 상품명을 다시 한번 확인해 주세요.";
      return { errorMessage };
    }
    await Product.updateOne({
      productName, categoryId, manufacturer, shortDesc, 
        detailDesc, imgUrl, totalstocks, price, searchKeywords
    });
    res.write("<script>alert('상품수정 완료')</script>");
  } catch (error) {
    return error;

// const editId  = req.params.name;
// await Product.findOne({id})  
    }
  };
//        await Product.updateOne({ id }, 
//         { productName, categoryId, manufacturer, shortDesc, 
//           detailDesc, imgUrl, totalstocks, price, searchKeywords })} 
//   catch (err) {
//         next(err);
//       };

//   // if (!id) throw new Error("해당 상품이 존재하지 않습니다.");

//     res.redirect(`/products/${Product.id}`);
//   // if (req.query.edit) {
//   //   res.json();
//   //   return;
//   // }
// res.json(serchtOne);
//     }

//id로 상품을 찾아서 삭제 (포스트맨 작동함)

export const deleteProduct = async (req, res, next) => {

  try {
    const { id } =req.params;
    const delOne = await Product.findOne({ id });


    if (!delOne) throw new Error("상품이 존재하지 않습니다.");

    await Product.deleteOne({id});
    // alert("상품이 삭제되었습니다.")

// 삭제후 다시 업데이트된 상품리스트를 보내줌.
// res.redirect("/Products")    
    res.send("삭제완료");
  } catch (err) {
    next(err);
  }}