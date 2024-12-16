import s from "./Main.module.css"

export const Main = () => {
    return (
        <>
            <div className={s.divImg}>
                <img src="/images/Background.png" alt="" />
            </div>
            <h1>О компании</h1>
            <div className={s.line}></div>
            <div className={s.divFlex}>
                <div className={s.text}>
                    <p>ООО "INTER металлургический
                        завод" входит в Группу «Объединенные
                        машиностроительные заводы»,
                        акционером которой является АО
                        «Газпромбанк».
                        Предприятие создано в результате
                        структурной перестройки
                        завода «INTER» на базе
                        литейного, кузнечно-прессового,
                        модельного и механического цехов.</p>
                    <p>ООО "INTER металлургический
                        завод" обладает современными
                        технологиями, обеспечивающими
                        индивидуальное и мелкосерийное
                        производство поковок.
                        Изготовление продукции
                        осуществляется согласно
                        предъявляемым требованиям
                        Заказчиков, начиная с разработки
                        технологии и заканчивая поставкой
                        потребителю.</p>
                </div>
                <div className={s.flexCard}>
                    <div className={s.card}>
                        <img src="/images/Image.png" alt="" />
                        <span>История предприятия</span>
                    </div>
                    <div className={s.card}>
                        <img src="/images/Image (1).png" alt="" />
                        <span>Цели и задачи предприятия</span>
                    </div>
                    <div className={s.card}>
                        <img src="/images/Image (2).png" alt="" />
                        <span>Кузнечно-прессовое производство</span>
                    </div>
                    <div className={s.card}>
                        <img src="/images/Image (3).png" alt="" />
                        <span>Кольцепрокатный стан</span>
                    </div>
                    <div className={s.card}>
                        <img src="/images/Image (4).png" alt="" />
                        <span>Документы</span>
                    </div>
                    <div className={s.card}>
                        <img src="/images/Image (5).png" alt="" />
                        <span>Термическая обработка</span>
                    </div>
                    <div className={s.card}>
                        <img src="/images/Image (6).png" alt="" />
                        <span>Лицензии и сертификаты</span>
                    </div>
                    <div className={s.cardEnd}>
                        <img src="/images/Image (7).png" alt="" />
                        <span>Механическая обработка</span>
                    </div>
                </div>
            </div>
            <div className={s.photo}>
                <div className={s.lineS}></div>
                <h1>Фотогалерея</h1>
                <div className={s.lineS}></div>
            </div>
            <div className={s.imgFlex}>
                <img src="/images/Link.png" alt="" />
                <img src="/images/Image (8).png" alt="" />
                <img src="/images/Image (9).png" alt="" />
                <img src="/images/Image (10).png" alt="" />
            </div>
        </>
    )
}