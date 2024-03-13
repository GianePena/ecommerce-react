import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<>
    <ul>
        <li className="items"><a className="itemsLinks"href="#">Niños</a></li>
        <li className="items"><a className="itemsLinks"href="#">Mujeres</a></li>
        <li className="items"><a className="itemsLinks"href="#">Hombres</a></li>
    </ul>
    <CartWidget />
</>
);