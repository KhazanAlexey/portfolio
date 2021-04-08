import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const Main=()=>{
    return <div className={style.mainBlock}>
        <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi there</span>
                <h1>  I am Alexey  </h1>
                <p>Привет меня заоут Алексей и ту главцн тсста ктоырй я пришуь жто дв</p>

            </div>
            <div className={style.photo}>

            </div>


        </div>


    </div>
}
