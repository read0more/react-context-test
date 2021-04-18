import React, { createContext, useState, useContext } from "react";

type UserType = {
  username: string;
};

type UserUpdateType = React.Dispatch<React.SetStateAction<UserType>> | null;

const UserContext = createContext<UserType>({ username: "" });
const UserUpdateContext = createContext<UserUpdateType>(null);

function UserProvider({ children }: { children: JSX.Element[] }) {
  const defaultUser = { username: "" };
  const [user, setUser] = useState<UserType>(defaultUser);
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

function useUserUpdate() {
  return useContext(UserUpdateContext);
}

function UserInfo() {
  const user = useUser();
  if (!user) return <div>사용자 정보가 없습니다.</div>;
  return <div>{user.username}</div>;
}

function Authenticate() {
  console.log("Authenticate 렌더링");
  const setUser = useUserUpdate();
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
