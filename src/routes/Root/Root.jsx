import { NavLink, Outlet } from "react-router-dom"
import s from "./Root.module.css"

export const Root = () => {
    return (
        <>
            <div className={s.div}>
                <nav className={s.headerNav}>
                    <NavLink to={"/"}>Главная</NavLink>
                    <NavLink to={"Company"}>О компании</NavLink>
                    <NavLink to={"Vac"}>Вакансии</NavLink>
                    <NavLink to={"Contact"}>Контакты</NavLink>
                </nav>
            </div>
            <div className={s.container}>
                <Outlet />
            </div>
        </>
    )
}