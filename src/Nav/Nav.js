import style from "./Nav.module.css"

export const Nav=()=>{
    return <header className={style.nav}>
        <a href="">Главная</a>
        <a href="">Скилы</a>
        <a href="">Проекты</a>
        <a href="">Контакты</a>
    </header>
}
