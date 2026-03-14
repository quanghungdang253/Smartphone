+cú pháp npm install --save <pakage> (cú pháp phiên bản cũ V5 )
đầy là cú pháp thêm pakage vào phần dependencies của file package.json
+cú pháp mới nhất để thêm một package vào dependencies là [npm install <namepackage> ]



**1. Quy tắc đặt tên thư mục**
🔹 Viết thường (lowercase) hoặc kebab-case (chữ thường, dấu - giữa các từ).
🔹 Không sử dụng khoảng trắng, có thể dùng gạch ngang (-) hoặc gạch dưới (_).
🔹 Đặt tên theo chức năng, rõ ràng và dễ hiểu.


Cách đặt tên	Ví dụ đúng	        Ví dụ sai
 camelCase	     myFolder	         MyFolder
 kebab-case	     my-folder	         My-Folder
 snake_case	     my_folder	         My_Folder





 2. Thư mục chính trong dự án ReactJS
📂 1. src/ (Mã nguồn chính của ứng dụng)
Chứa toàn bộ mã nguồn ReactJS.
Bên trong thư mục src/, cần chia nhỏ thành các thư mục con như components/, pages/, assets/...
📂 2. components/ (Chứa các thành phần giao diện tái sử dụng)
Dùng PascalCase hoặc kebab-case nếu chia nhỏ từng component thành thư mục.
Mỗi component có thể có file .jsx, .css riêng.
✔ Ví dụ đúng:

css
Copy
Edit
components/
 ├── Header/
 │   ├── Header.jsx
 │   ├── Header.css
 ├── Footer/
 │   ├── Footer.jsx
 │   ├── Footer.css
❌ Ví dụ sai:

css
Copy
Edit
Components/
 ├── header/
 │   ├── header.jsx
📂 3. pages/ (Chứa các trang chính của ứng dụng)
Nếu dự án có nhiều trang, đặt mỗi trang trong thư mục riêng.
Tên thư mục có thể viết thường hoặc kebab-case.
✔ Ví dụ đúng:

arduino
Copy
Edit
pages/
 ├── home/
 │   ├── Home.jsx
 ├── about/
 │   ├── About.jsx
📂 4. assets/ (Chứa hình ảnh, icon, fonts, CSS chung)
Không nên lưu trữ file quá lớn.
✔ Ví dụ đúng:

Copy
Edit
assets/
 ├── images/
 ├── icons/
 ├── fonts/
 ├── styles/
📂 5. hooks/ (Chứa các custom hooks)
Các file hook nên bắt đầu bằng use.
✔ Ví dụ đúng:

Copy
Edit
hooks/
 ├── useAuth.js
 ├── useFetchData.js
📂 6. utils/ (Chứa các hàm tiện ích)
Đặt tên file theo camelCase.js hoặc kebab-case.js.
✔ Ví dụ đúng:

Copy
Edit
utils/
 ├── formatDate.js
 ├── calculateTotal.js
📂 7. services/ (Chứa các API request)
Tên file có thể kết thúc bằng Service hoặc Api.
✔ Ví dụ đúng:

Copy
Edit
services/
 ├── productApi.js
 ├── userService.js
📂 8. store/ (Chứa Redux hoặc Context API)
✔ Ví dụ đúng:

Copy
Edit
store/
 ├── actions/
 ├── reducers/
 ├── store.js
📌 3. Ví dụ cấu trúc thư mục chuẩn trong ReactJS
css
Copy
Edit
📦 my-react-app
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 Header
 ┃ ┃ ┃ ┗ 📜 Header.jsx
 ┃ ┃ ┣ 📂 Footer
 ┃ ┃ ┃ ┗ 📜 Footer.jsx
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.jsx
 ┃ ┃ ┣ 📜 About.jsx
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📜 useAuth.js
 ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📜 formatDate.js
 ┃ ┣ 📂 services
 ┃ ┃ ┗ 📜 productApi.js
 ┃ ┣ 📂 store
 ┃ ┃ ┗ 📜 store.js
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
✅ Tóm tắt cách đặt tên thư mục ReactJS
1️⃣ Thư mục chung: camelCase hoặc kebab-case
2️⃣ Component: PascalCase (VD: Header/, Footer/)
3️⃣ Hooks: useCamelCase.js (VD: useAuth.js)
4️⃣ Utils: camelCase.js (VD: formatDate.js)
5️⃣ API Services: camelCase.js hoặc PascalCase.js (VD: userService.js, ProductApi.js)








// ============================================đặt tên file =====================
 1. Quy tắc chung
🔹 Tránh viết hoa toàn bộ (VD: ❌ NAVBAR.JSX).
🔹 Không dùng khoảng trắng, sử dụng dấu gạch ngang (-) hoặc gạch dưới (_) nếu cần.
🔹 Phù hợp với chức năng của file để dễ tìm kiếm.
🔹 Sử dụng phần mở rộng hợp lý (.jsx, .tsx, .js, .ts).

📌 2. Cách đặt tên file theo loại
1️⃣ File Component (UI)
 1 . Dùng PascalCase (chữ cái đầu mỗi từ viết hoa).
 2 .  camelCase
Sử dụng: Được sử dụng phổ biến cho tên biến, hàm, hook, và đôi khi là tên file.
Đặc điểm: Chữ cái đầu tiên viết thường, các từ tiếp theo viết hoa.
Ứng dụng: Thường dùng cho các hàm, biến, hoặc hook, nhưng đôi khi cũng dùng cho file chứa các hàm tiện ích.
 3 .  kebab-case
Sử dụng: Dùng cho tên thư mục, tên file trong các dự án frontend hoặc backend.
Đặc điểm: Các từ được phân tách bởi dấu gạch ngang (-), tất cả chữ đều viết thường.
Ứng dụng: Rất phổ biến trong việc đặt tên thư mục và file trong các hệ thống Unix/Linux, và khi triển khai các URL trong web.



Tên file trùng với tên Component.
Đuôi .jsx hoặc .tsx (nếu dùng TypeScript).
✔ Ví dụ đúng:

css
Copy
Edit
Header.jsx
ProductList.jsx
UserProfile.tsx (TypeScript)
❌ Ví dụ sai:

css
Copy
Edit
header.jsx   (nên dùng Header.jsx)
productlist.jsx  (nên dùng ProductList.jsx)





File chứa Custom Hook
Dùng camelCase.
Bắt đầu bằng "use".
Đuôi .js hoặc .ts.
✔ Ví dụ đúng:

scss
Copy
Edit
useAuth.js
useFetchData.js
useLocalStorage.ts (TypeScript)
❌ Ví dụ sai:

scss
Copy
Edit
authHook.js  (nên dùng useAuth.js)
fetchdata.js  (nên dùng useFetchData.js)
3️⃣ File chứa các hàm tiện ích (Helper Functions)
Dùng camelCase hoặc kebab-case.
Đuôi .js hoặc .ts.
✔ Ví dụ đúng:

scss
Copy
Edit
formatDate.js
calculateDiscount.js
convertCurrency.ts (TypeScript)
❌ Ví dụ sai:

scss
Copy
Edit
Format_Date.js  (nên dùng formatDate.js)
calculatediscount.js  (nên dùng calculateDiscount.js)
4️⃣ File chứa API Services
Dùng camelCase.
Có thể kết thúc bằng "Service" hoặc "Api".
✔ Ví dụ đúng:

scss
Copy
Edit
userService.js
productApi.js
authApi.ts (TypeScript)
❌ Ví dụ sai:

scss
Copy
Edit
User_Service.js  (nên dùng userService.js)
Productapi.js  (nên dùng productApi.js)
5️⃣ File chứa Redux, Context API
Dùng camelCase.
Có thể kết thúc bằng "Reducer", "Context", "Store".
✔ Ví dụ đúng:

Copy
Edit
authReducer.js
themeContext.js
appStore.js
❌ Ví dụ sai:

scss
Copy
Edit
Auth_Reducer.js  (nên dùng authReducer.js)
Themecontext.js  (nên dùng themeContext.js)
6️⃣ File chứa Constants (Hằng số)
Dùng UPPER_CASE với gạch dưới _.
Đuôi .js hoặc .ts.
✔ Ví dụ đúng:

scss
Copy
Edit
API_ENDPOINTS.js
APP_CONFIG.js
USER_ROLES.ts (TypeScript)
❌ Ví dụ sai:

scss
Copy
Edit
Api_endpoints.js  (nên dùng API_ENDPOINTS.js)
appconfig.js  (nên dùng APP_CONFIG.js)
📌 3. Ví dụ cấu trúc thư mục chuẩn
css
Copy
Edit
📦 my-react-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Header.jsx
 ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📜 useAuth.js
 ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📜 formatDate.js
 ┃ ┣ 📂 services
 ┃ ┃ ┗ 📜 productApi.js
 ┃ ┣ 📂 store
 ┃ ┃ ┗ 📜 authReducer.js
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.js
✅ Tóm tắt quy ước đặt tên file trong ReactJS
Loại file	Cách đặt tên	Ví dụ
Component	PascalCase.jsx	Header.jsx, ProductList.jsx
Custom Hook	camelCase.js (bắt đầu bằng "use")	useAuth.js, useFetchData.js
Helper function	camelCase.js hoặc kebab-case.js	formatDate.js, calculateTotal.js
API Services	camelCase.js (có thể kết thúc bằng "Service" hoặc "Api")	userService.js, productApi.js
Redux, Context	camelCase.js (có thể kết thúc bằng "Reducer", "Context", "Store")	authReducer.js, themeContext.js
Constants	UPPER_CASE.js	API_ENDPOINTS.js, APP_CONFIG.js

+++++++++++++++++++++++

Khi bạn có một file có tên user-profile.js (hoặc user-profile.jsx), tên component trong file đó nên được đặt theo PascalCase. Vì vậy, tên component sẽ là UserProfile.

Quy tắc:
File: user-profile.js (hoặc .jsx)
Component: UserProfile
Ví dụ cụ thể:
Tên file: user-profile.js
Tên component trong file:
jsx
Copy
Edit
// user-profile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      {/* Nội dung của component */}
    </div>
  );
}

export default UserProfile;
Giải thích:
Tên file sử dụng kebab-case (user-profile.js) vì đó là quy tắc phổ biến cho tên file trong các dự án ReactJS.
Tên component sử dụng PascalCase (UserProfile) vì đây là quy tắc tiêu chuẩn trong React để đặt tên cho các component.
Điều này giúp dễ dàng phân biệt component với các file hoặc biến trong dự án và duy trì tính nhất quán trong mã nguồn.

// bóng đổ 
 box-shadow: 0 1px 2px 0 rgba(60,64,67,.1),
              0 2px 6px 2px rgba(60,64,67,.15);