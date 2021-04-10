import style from "./MyProject.module.css"

export const MyProject = (props) => {
    return <div className={style.project}>
        <div style={props.style} className={style.icon}>
            <a className={style.btn}>View</a>
        </div>
        <div className={style.projectinfo}>
            <h3>{props.title}</h3>
            <span className={style.discription}>disription
                {props.discription}</span>
        </div>

    </div>
}
