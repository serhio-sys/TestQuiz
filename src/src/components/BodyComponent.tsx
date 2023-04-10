import { BodyProps } from "../@types/interfaces"

const BodyComponent = ({start}:BodyProps) => {
    
    
    return(
    <div className='fullscreen'>
        <div className='fullscreen-hello'>
        <h2>Ласкаво просимо до нашої вікторини!</h2>
        <h1 className="fullscreen_title">Вікторина - Коледж та Полтавщина</h1>
        <hr className="fullscreen-line"/>
        <div className='fullscreen-hello-text'>
            Ви отримаєте п’ять запитань, які ми випадковим чином відібрали з десяти можливих. Кожен студент нашого освітнього закладу, ба навіть кожен полтавець без заминки відповість на ці питання. Цікаво - а чи впораєтесь ви?
            <br/>
            Навчання в Полтавському політехнічному фаховому коледжі є надзвичайно цікавим, а вікторина - це відмінний спосіб дізнатись про коледж ще більше, бо після кожної відповіді ми розкажемо вам якийсь цікавий факт, що стосується заданого питання.
            <br/>
            Ми віримо, що ви зможете відповісти на всі запитання правильно. Тож не гайте часу і почніть вікторину, щоб дізнатись багато нового й цікавого про про Полтаву та один з її найкращих освітніх закладів!
        </div>
            <div className='fullscreen-btn' onClick={start}>
                <span className="wave-btn__text">Розпочати</span>
                <div className="wave-btn__waves"></div>    
            </div>
        </div>
    </div>
    )
}
export default BodyComponent