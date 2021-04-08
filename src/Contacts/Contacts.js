import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const Contacts = () => {
    return <div className={style.contactBlock}>
        <div className={`${styleContainer.container} ${style.contactContainer}`}>
            <h2 className={style.title}>Contscts</h2>
            <div className={style.contacts}>
                <form>
                    name <input type="text" name="name" placeholder="name"/>
                    email <input type="email" name="email" placeholder="name"/>
                    <textarea name="comment" cols="40" rows="3"></textarea>
                    <button>Отправить</button>
                </form>


            </div>
        </div>
    </div>
}
