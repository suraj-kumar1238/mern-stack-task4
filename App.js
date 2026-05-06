const handleSubmit = async () => {
  try {
    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data);
    alert(data.message);
  } catch (err) {
    console.log("Error:", err);
    alert("Server not responding");
  }
};