import style from "./Contact.module.scss"


export const Contact = (props) => {
    return <div className={style.miContactInfoblock}>
        <span className={style.miContactInfoblockIcon}>
            {props.icon}
        </span>
        <div className={style.miContactInfoblockContent}>
            <h6>{props.title}</h6>
            <p>
                <a href={props.link}>{props.data}</a>
            </p>
        </div>
    </div>
}


