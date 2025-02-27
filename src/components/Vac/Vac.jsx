import s from "./Vac.module.css"

export const Vac = () => {
    return (
        <>
            <div className={s.topFlex}>
                <div className={s.lineF}></div>
                <h2>Вакансии</h2>
                <div className={s.lineS}></div>
            </div>
            <div className={s.botFlex}>
                <div className={s.flex}>
                    <div className={s.div}>
                        <span>Вакансии</span>
                    </div>
                </div>
                <div className={s.info}>
                    <h3>Вакансии</h3>
                    <ul className={s.Item}>
                        <li>Специалист по закупкам</li>
                        <li>Менеджер по продажам</li>
                        <li>Специалист по финансовой работе</li>
                        <li>Инженер-технолог (обработка металлов давлением; термическая обработка; металловедение)</li>
                        <li>Специалист по охране труда и экологии</li>
                        <li>Энергетик</li>
                        <li>Диспетчер</li>
                        <li>Слесарь-ремонтник</li>
                        <li>Огнеупорщик</li>
                        <li>Электромонтер по ремонту и обслуживанию электрооборудования</li>
                        <li>Токарь-карусельщик (возможно обучение)</li>
                        <li>Нагревальщик металла (возможно обучение)</li>
                        <li>Дефектоскопист по ультразвуковому контролю</li>
                        <li>Контролер станочных и слесарных работ(возможно обучение)</li>
                        <li>Контролер кузнечно-прессовых работ(возможно обучение)</li>
                        <li>Машинист мостового крана</li>
                    </ul>
                </div>
            </div>
        </>
    )
}