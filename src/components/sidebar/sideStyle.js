import styled from "styled-components";

export const SidebarComponent = styled.aside`
  background: grey; 
  width: 250px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

.logo {
  width: 120px; 
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  width: 100%; 
  padding: 0;
}

  li {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2B929;
  border-radius: 10px; 
  height: 45px; 
  font-size: 16px; 
  color: #000; 
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 

&:hover {
  background-color: #d9a719; 
}

a {
  color: inherit; 
  text-decoration: none; 
  display: flex;
  align-items: center;
  justify-content: center;
}
}

.icone {
  margin-right: 10px;
}
`;

