import React, { createContext, useState, useContext } from "react";

type UserType = {
  user: {
    username: string;
  } | null;
  setUser: React.Dispatch<React.SetStateAction<{ username: string }>> | null;
};

const UserContext = createContext<UserType>({
  user: null,
  setUser: null,
});

function UserProvider({ children }: { children: JSX.Element[] }) {
  const defaultUser = { username: "" };
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

function UserInfo() {
  const { user } = useUser();
  if (!user) return <div>사용자 정보가 없습니다.</div>;
  return <div>{user.username}</div>;
}

function Authenticate() {
  console.log("Authenticate 렌더링");
  const { setUser } = useUser();
  const onClick = () => {
    if (!setUser) return;
    setUser({ username: "velopert" });
  };
  return <button onClick={onClick}>사용자 인증</button>;
}

export default function App() {
  return (
    <UserProvider>
      <UserInfo />
      <Authenticate />
    </UserProvider>
  );
}
