import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #666;
`;

function EmptyProduct({ name }) {
  return (
    <Wrapper>
      <Title>📦 Hiện tại chưa có sản phẩm</Title>
      <Text>
        Danh mục <b>{name}</b> hiện chưa có dữ liệu sản phẩm.  
        Vui lòng quay lại sau hoặc xem các sản phẩm khác.
      </Text>
    </Wrapper>
  );
}

export default EmptyProduct;