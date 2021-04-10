import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"

import photoimg from "../assets/img/myphoto.jpeg"
export const Main=()=>{
    const photo = {
        backgroundImage: 'url(' + photoimg + ')',
    };
    return <div className={style.mainBlock}>
        <div className={styleContainer.container}>
            <div className={style.text}>
                <h1> Hi, I am
                <span> Alexey Khazan </span>  </h1>
                <p>I am a React developer. I can provide clean code and pixel perfect design. I also make website  more interactive with web animations.</p>
            </div>
            <div style={photo} className={style.photo}>

            </div>


        </div>


    </div>
}
