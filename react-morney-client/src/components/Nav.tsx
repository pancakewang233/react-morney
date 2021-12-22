import styled from "styled-components";
import { NavIcon } from "./navIcon/NavIcon";
import { NavLink } from "react-router-dom";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      padding: 10px;
      > .selected{
        color: red;
      }
    }
  }
`;
const linkList = [
  { path: "/money", name: <NavIcon title={"记账"} name={'money'}/> },
  { path: "/tags", name: <NavIcon title={"标签"} name={'tag'}/> },
  { path: "/statistics", name: <NavIcon title={"统计"} name={'statistic'}/> },
];
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        {linkList.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={({isActive}) => (isActive ? "selected" : '')}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
};

export { Nav };
