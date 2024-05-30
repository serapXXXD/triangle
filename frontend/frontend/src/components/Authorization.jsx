import { useState } from "react";

export default function Authorization() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    fetch("/api/auth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.status == 200) alert("Вы залогинились");
      else {
        alert(`Ошибка ${response.status}!`);
      }
    });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 10,
        backgroundColor: "#61988E",
      }}
    >
      <input
        type="username"
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Войти
      </button>
    </form>
  );
}
