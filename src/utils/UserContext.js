import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Nikita Dewangan",
    email: "nikita.dewangan@gmail.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
