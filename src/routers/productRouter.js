

import express from "express";
import { Product } from "../models/productModel";
const router = Router();
const productRouter = express.Router();

// 경로를 설정하자. 
// list - /products/
// post - /products?write=true



router.get('/', async (req, res, next) => {
    if (req.query.write) {
      res.render('products/edit');
      return;
    }
    const products = await Product.find(); // 게시글 목록 
    res.render('products/list', { products });
  });
  
  router.get('/:shortId', async (req, res, next) => {
    const { shortId } = req.params;
    const post = await Product.findOne({shortId})// shortId 로 게시글 찾기
    
    if (req.query.edit) {
      res.render('products/edit', { post });
      return;
    }
    
    res.render('products/view', { post });
  });
  
  router.post('/', async (req, res, next) => {
    const { title, content } = req.body;
    
    try {
      if ( !productName || !categoryId || !detailDesc || !imgUrl || !price ) {
        throw new Error('제목과 내용을 입력해 주세요');
      }
      
      // 서버에 postReqest를 보내서 브라우저에서 CREATE 작업을 수행
      // 게시글 생성
      const postReqest = await Product.create({title : title, content : content})
      res.redirect(`/products/${postReqest.shortId}`);
    } catch (err) {
      next(err);

    }
});



productRouter.post("/edit", changeUser);

export default productRouter;
