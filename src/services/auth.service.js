import axiosInstance from "../utils/axiosInstance";

const AuthService = {
  /**
   * Login user and store token
   */
  login: async (data) => {
    const response = await axiosInstance.post("/auth/login", data);
    if (response.data.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      if (response.data.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
    }
    return response.data;
  },

  /**
   * Register new user
   */
  register: async (data) => {
    const response = await axiosInstance.post("/auth/signup", data);
    return response.data;
  },

  /**
   * Logout user by removing tokens
   */
  logout: () => {
    localStorage.removeItem("accessToken");
  },
};

export default AuthService;

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const userData = await AuthService.login({ email, password });
    console.log("User logged in:", userData);
  } catch (err) {
    setError("Invalid email or password");
  } finally {
    setLoading(false);
  }
};
