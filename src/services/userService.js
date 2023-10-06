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
      // Token:
        // "eyJpdiI6IlRXUUdcLzBzdDVcL2Q5YTFYTzZJVHhUUT09IiwidmFsdWUiOiJFazVpemQ5WnlURlhRWkc3THc4cmZKVG5cL2E4XC9JVCtRaXNlMW00TExTU3FuWkJEWG1KVGQ1d1JiK25NSVZZaUJUY3crN2xET0tZNkpMR0VZcGlLOHpBPT0iLCJtYWMiOiJlZDE2NmVhNGJiNWE5MTdjMjgwYTEyODdmNzRlNDNkODRiY2E4M2Q3ZjM4YjQ4YWFkYmYyMmM2YWRlMTkyODNiIn0=",
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
