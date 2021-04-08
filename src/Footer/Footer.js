import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Element} from "./element/Element";

export const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className={style.title}>Хазан Алексей</h2>
            <div className={style.content}>
<Element/>
<Element/>
<Element/>
<Element/>

            </div>
            <h3>все права защищены © 2020</h3>

        </div>
    </div>
}
