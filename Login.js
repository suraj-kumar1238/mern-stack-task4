const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    console.log(res.data);

    // token save karo
    localStorage.setItem("token", res.data.token);

    alert("Login Successful");
  } catch (err) {
    console.log(err);
  }
};