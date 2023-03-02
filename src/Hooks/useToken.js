import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken);
        }
      });
  }, [email]);
  return [token];
};

export default useToken;
