import s from "./Contact.module.css"

export const Contact = () => {
    return (
        <>
            <div className={s.topFlex}>
                <div className={s.lineF}></div>
                <h2>контакты</h2>
                <div className={s.lineS}></div>
            </div>
            <div className={s.botFlex}>
                <div className={s.flex}>
                    <div className={s.div}>
                        <span>Контакты</span>
                    </div>
                </div>
                <div className={s.info}>
                    <h3>Контакты</h3>
                    <div className={s.main}>
                        <div className={s.text}>
                            <span>Адрес месторасположения:</span><br />
                            <span>Контактный номер телефона:</span>
                        </div>
                        <div className={s.text}>
                            <span>г. Москва. ул. Угрешская 14 с.1</span><br />
                            <span>+79152154112</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}