import api from "../../services/axiosInstance";

export const fetchUsersAPI = async (page = 1,search = "") => {
  const limit = 10;
  const skip = (page - 1) * limit;

  if(search){
    const response = await api.get(`/users/search?q=${search}&limit=${limit}&skip=${skip}`)
    return response.data
  }
  const response = await api.get(`/users?limit=${limit}&skip=${skip}`);
  return response.data;
};
