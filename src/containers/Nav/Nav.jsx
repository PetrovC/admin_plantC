import { useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import classNames from "classnames";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Nav.scss';

const NavItem = ({to, title, onClick}) =>
    <li><NavLink to={to} onClick={onClick}>{title}</NavLink></li>;

const NavItemMenu = ({to, title, children, onClick}) => {
    const match = useMatch(to);

    const [isOpen, setIsOpen] = useState(match);

    return <li>
        <div className={classNames('has-sub-menu',  {'active': match})}
             onClick={() => setIsOpen(isOpen => !isOpen)}>
            <span>{title}<ArrowDropDownIcon /></span>
            <ul className={classNames('sub-menu', { 'open' : isOpen })}>
                { children.map((child, i) =>
                    <NavItem key={i} { ...child } onClick={onClick} />
                ) }
            </ul>
        </div>
    </li>;
}
const Nav = ({navLinkClicked}) => {
    // liste à mettre à jour

    const [menuItems, setMenuItems] = useState([
        { title: 'Accueil', to: './Pages/admin/Home/Home' },
        { title: 'Missons', to: './Pages/admin/Missions/Missions'},
        { title: 'Agenda', to: './Pages/admin/Agenda/Agenda' },
        { title: 'Tâches', to: './Pages/admin/Agenda/Tache' },
        { title: "Ajout d'un bénéficiaire", to: './Pages/admin/Beneficiaire/Inscriptions' }
    ]);

    return (
        <nav >
            <ul>
                { menuItems.map((menu, i) =>
                    menu.children
                        ? <NavItemMenu key={i} {...menu} onClick={navLinkClicked} />
                        : <NavItem key={i} {...menu} onClick={navLinkClicked} />
                ) }
            </ul>
        </nav>
    );
};
export default Nav;
