import { FinishInterface } from "../@types/interfaces"



const FinishComponent = (props:FinishInterface) => {
    return (
        <div style={{background:"url('../public/finish.png')"}} className='finish'>
              <div className='fullscreen-hello correct-block' style={{background:"#50515C",minWidth:"80vw"}}>
                <div className='result-block'>
                  <div className='text'>Вікторину завершено!</div>
                </div>
                <div className='result'>
                  Кількість правильних відповідей:  {props.correctAnswers}/{props.length}
                </div>
                <div className="result-text">
                  Дякуємо вам за участь в нашій вікторині! Ми сподіваємось, що ви отримали задоволення від гри та дізналися багато цікавого про наш освітній заклад.<br/><br/>
                  Навчаючись в нашому коледжі ви отримаєте багато можливостей для розвитку та кар’єрного зростання. Якщо ви зацікавилися розробкою програмного забезпечення, ми запрошуємо вас до нашого сайту аби дізнатися більше про наш освітній заклад, його спеціальності, насичене студентське життя та новини коледжу.<br/><br/>
                  Якщо ж ви не отримали максимальної кількості балів чи незадоволені своїм результатом - не засмучуйтесь! Ви можете спробувати пройти вікторину ще раз та покращити свій результат. Бажаємо вам успіхів та нехай ваші мрії про престижну професію та успішну кар’єру збудуться!
                </div>
                <div style={{display:'flex',gap:"3em"}}><button onClick={props.replay} className='btn-replay'>Пройти ще раз</button><button className='btn-replay' onClick={()=>{window.location.reload()}}>Повернутись на початок</button></div>
              </div>
          </div>
    )
}

export default FinishComponent