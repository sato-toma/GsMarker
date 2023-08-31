import type { NextPage } from 'next';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Regiser: NextPage = () => {
  const [name, setName] = useState('名前');
  const [email, setEmail] = useState('メールアドレス');
  const [password, setPassword] = useState('パスワード');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert('ユーザー登録に失敗');
    }
  };
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="名前"
        />
        <input
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          type="text"
          name="email"
          placeholder="メールアドレス"
        />
        <input
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          type="text"
          name="password"
          placeholder="パスワード"
        />
        <button>登録</button>
      </form>
    </div>
  );
};

export default Regiser;
