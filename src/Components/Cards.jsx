import React from 'react'
import "./Cards.css"

const Cards = () => {
  return (
    <div name="cards" className='Programs'>
        <div className="program">
            <img src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2019/08/27120406/abstract-spam_SL_pic.jpg" alt="" />
            <h1>Email Spam Classifier</h1>
            <p>This should analyse email headers, content, and attachments to detect phishing attempts, malware, and suspicious links</p>
            <button class="shiv1" role="button"><a href="https://mailclassifier-deploy.onrender.com/">Click here</a></button>
        </div>
        <div className="program">
            <img src="https://static.vecteezy.com/system/resources/previews/004/586/124/original/lock-cyber-security-padlock-with-keyhole-icon-made-with-binary-code-protect-and-security-or-safe-concept-illustrates-cyber-data-security-or-information-privacy-idea-illustration-vector.jpg" alt="" />
            <h1>Password Checker</h1>
            <p>This determines about the password whether the password is strong or weak which helps you to create the strong password and keep your account safe.</p>
            <button class="shiv1" role="button"><a href="https://passwordcheckerproject.netlify.app/">Click here</a></button>
        </div>
        <div className="program">
            <img src="https://tse1.mm.bing.net/th?id=OIP.RrCdVxO8DiOhOk13MMpwowHaFD&pid=Api&P=0&h=180" alt="" />
            <h1>
                Keylogger
            </h1>
            <p>Here we provide all the required information to build keylogger and user should take care that not to use it in wrong way only use for study purpose.</p>
            <button class="shiv1" role="button"><a href="https://github.com/shiv3191/IITI-SOC-2024-CyberSuite">Click here</a></button>
        </div>
      
    </div>
  )
}

export default Cards

