# 📊 User Management Dashboard

A modern **Admin Dashboard** built using React, Redux Toolkit, TanStack Table, Tailwind CSS, and shadcn UI to efficiently manage and visualize user data with server-side pagination, search, and client-side filtering.

---

## 📌 Features

- 🔍 Server-side Search
- 📄 Server-side Pagination
- 🚻 Client-side Gender Filter
- 📊 Dynamic Data Table using TanStack Table
- 🧠 Global State Management with Redux Toolkit
- ⚡ Debounced Search for Performance Optimization
- 📦 Modal View for User Details
- ⏳ Skeleton Loading UI
- 🚫 Empty State Handling
- 🎨 Responsive UI using Tailwind CSS + shadcn

---

## 🛠 Tech Stack

| Technology | Usage |
|------------|--------|
| React.js | Frontend Framework |
| Redux Toolkit | Global State Management |
| TanStack Table | Table Rendering |
| Tailwind CSS | Styling |
| shadcn UI | UI Components |
| Axios | API Handling |
| DummyJSON API | Mock Backend |

---

## 🧩 Architecture Overview

This project follows a **feature-based scalable architecture**:
src/
├── app/
│ └── store.js
├── features/
│ └── users/
│ ├── userSlice.js
│ └── userAPI.js
├── components/
│ ├── table/
│ ├── SearchInput.jsx
│ ├── GenderFilter.jsx
│ ├── UserDetailsModal.jsx
│ ├── TableSkeleton.jsx
│ └── EmptyState.jsx
├── hooks/
│ └── useDebounce.js
├── pages/
│ └── Dashboard.jsx
├── services/
│ └── axiosInstance.js
└── utils/
└── tableColumns.js

---

## 🔄 Data Flow
Search Input
↓
Debounced Value
↓
Redux Async Thunk
↓
API Call (Server Pagination)
↓
Redux Store Update
↓
Client-side Gender Filter
↓
TanStack Table Render


---

## 🧠 State Management Strategy

- **Server-side Handling**
  - Pagination
  - Search
- **Client-side Handling**
  - Gender Filter

This hybrid approach ensures:
- Reduced memory usage
- Scalable filtering
- Minimal unnecessary API calls

---

## ⚡ Performance Optimization

- Implemented **Debounced Search** to prevent excessive API calls
- Used **useMemo** for optimized filtering
- Implemented **Skeleton Loading UI** to prevent layout shift

---

## 🚨 Error & Empty State Handling

- Displays loading skeleton during API fetch
- Displays empty state when no data matches search/filter

---

## 📦 Installation & Setup
Clone the repository:

```bash
git clone https://github.com/Abiabi01/User-Management-Dashboard.git
cd User-Management-Dashboard

## Install dependencies:
npm install

Run the Project:
npm run dev
```
📡 API Used

DummyJSON Mock API:

https://dummyjson.com/users

Supports:

Pagination
Search
Mock user data

🧑‍💻 Author
Abirami Rajendran
