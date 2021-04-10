import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Title} from "../common/Copmonents/title/Title";

export const Contacts = () => {
    return <div className={style.contactBlock}>
        <div className={`${styleContainer.container} ${style.contactContainer}`}>
            <Title title={"Contacts"}/>
                <form className={style.contacts}>
                    Name: <input type="text" name="name" placeholder="name"/>
                    Email: <input type="email" name="email" placeholder="email"/>
                    <textarea name="comment" cols="40" rows="3"></textarea>
                    <button type="submit" className={style.submitBtn}>Отправить</button>
                </form>


        </div>
    </div>
}
