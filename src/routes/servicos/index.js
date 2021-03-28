import React from "react";

import ProductDetailPage from "components/pages/ProductDetail";

import { useScrolltoTop } from "hooks/scroll";

const ProductDetail = () => {
  useScrolltoTop();
  return <ProductDetailPage />;
};

export default ProductDetail;
