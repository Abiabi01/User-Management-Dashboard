import React from "react";

import api from "../../services/axiosInstance";



export const fetchUsersApi = async (page=1) => {
   return api.get(`/users?page=${page}`);
}