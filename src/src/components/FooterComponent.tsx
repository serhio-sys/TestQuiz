const FooterComponent = (props:any) => {
    return (
        <footer className='footer'style={{background:props.color}}>
            <div className='footer-command'>
              <img className='golem' src='comand-logo.png'/>
              <div className='footer-text'> © 2023 HOHMA TEAM</div>
            </div>
            <div className='footer-social'>
              <div className='footer-social-block'>  
                <img className='footer-icon' src='phone.png'/>
                <div className='footer-text'>+380993333390</div>
              </div>
              <div className='footer-social-block'>  
                <img className='footer-icon' src='mail.png'/>
                <div className='footer-text'>suportppfkquiz@gmail.com</div>
              </div>
            </div>
          </footer>
    )
}

export default FooterComponent