import useHttp from "../hooks/useHttp";

const useUserService = () => {
  const { request, loading, error, clearError } = useHttp();

  const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";

  const getUsers = async (url = _apiBase + `/users?page=1&count=6`) => {
    return await request(url);
  };

  const getUser = async (id, url = _apiBase + `/users/${id}`) => {
    return await request(url);
  };

  const getPositions = async () => {
    return await request(_apiBase + "/positions");
  };

  const getToken = async () => {
    return await request(_apiBase + "/token");
  };

  const postUser = async (formData, token) => {
    return await request(_apiBase + "/users", "POST", formData, {
      'Token': token,
    });
  };

  return {
    getUsers,
    getUser,
    getPositions,
    getToken,
    postUser,
    loading,
    error,
    clearError,
  };
};

export default useUserService;
