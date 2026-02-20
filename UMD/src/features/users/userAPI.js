import api from "../../services/axiosInstance";

export const fetchUsersAPI = async (page = 1, search = "") => {
  const limit = 10;
  const skip = (page - 1) * limit;
  let url=""
  if (search) {
    url = `/users/search?q=${search}&limit=${limit}&skip=${skip}`;
  } else {
    url = `/users?limit=${limit}&skip=${skip}`;
  }

  const response = await api.get(url);
  return response.data;
  
};
