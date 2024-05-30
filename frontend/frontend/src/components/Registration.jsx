import { useState } from "react";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    fetch("/api/auth/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.status == 201) alert("Вы зарегистрировались");
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
        backgroundColor: "#CBBFBB",
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
        Зарегистрироваться
      </button>
      
    </form>
  );
}
