import React, { useState } from 'react';
import Menu from "./Menu/Menu";
import './App.css';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const App = () => {
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        { value: "Главная", href: '/main', icon: "AddIcCall" },
        { value: "Главная", href: '/main', icon: "anchor" },
        { value: "Главная", href: '/main', icon: "anchor" }
    ];

    return (
        <div className='app'>
            <nav>
                <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                </div>
            </nav>
            <main>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
            </main>
            <Menu active={menuActive} setActive={setMenuActive} header={"Burger menu"} items={items} />
        </div>
    );
};

export default App;
