import { createContext } from "react";


export const UserContext = createContext();


export const UserProvider = ({ children }) => {



  const data = {
    id: 123,
    name: 'Richard Allcca',
    email: 'richard_allcca_llano@htomail.com'
  };

  return (
    <UserContext.Provider value={ data }>
      { children }
    </UserContext.Provider>
  );

};