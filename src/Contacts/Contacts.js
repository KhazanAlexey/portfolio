import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Title} from "../common/Copmonents/title/Title";
import {Contact} from "./contsct/Contact";
const phone= <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
</svg>
const linked= <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
</svg>
const mail= <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
</svg>

export const Contacts = () => {
    return <div className={style.contactBlock}>
        <div className={`${styleContainer.container} ${style.contactContainer}`}>
            <Title title={"Contacts"}/>
            <div className={style.row}>

                <form className={style.contacts}>
                    Name: <input type="text" name="name" placeholder="name"/>
                    Email: <input type="email" name="email" placeholder="email"/>
                    <textarea name="comment" cols="40" rows="3"/>
                    <button type="submit" className={style.submitBtn}>Отправить</button>
                </form>
                <div className={style.contactphone}>
                    <Contact data={"+375296095081"} link={"tel:+375296095081"} title={"Phone"} icon={phone}/>
                    <Contact data={"Alexey Hazan"} link={"https://www.linkedin.com/in/alexeyhazan/"} title={"Linkedin"} icon={linked}/>
                    <Contact data={"Send"} link={"mailto:Khazanalexey@hotmail.com"} title={"Email"} icon={mail}/>


                </div>

            </div>

        </div>


    </div>
}
