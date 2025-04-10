


import React, { useState } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
// đây là thư viện dùng để xử lý các thao tác bất đồng bộ
function Index(props) {
    const [value , setValue] = useState();
    const fetchProduct = createAsyncThunk('product/fetchAll', async () => {
        const res  = await fetch('https://jsonplaceholder.typicode.com/posts');
        setValue(res);
        return res;

    })
    return (
        <div>
                
            
        </div>
    );
}

export default Index;