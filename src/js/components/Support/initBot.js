import { createEl, find } from '../../tools'
import earphones from '../../../assets/images/support/headset-solid.svg'
import paperPlane from '../../../assets/images/support/paper-plane-solid.svg'
import { closeSupport } from './closeSupport'
import { supportCommunication } from './supportCommunication'

export const initBot = () => {
  const supportWrapper = createEl({ el: 'div', css: 'support-wrapper' })
  const supportLogo = createEl({
    el: 'img',
    css: 'support-logo',
    src: earphones,
    alt: 'support logo',
    title: 'Support',
  })
  const chatWrapper = createEl({ css: 'chat-wrapper' })

  chatWrapper.innerHTML = `
    <div class='chat-context'> </div>
    <div class='chat-form'>
          <textarea class='support-textarea' rows='1' placeholder='Enter some questions'></textarea>
          <img class='sending' src='${paperPlane}' alt='paper-plan'>
    </div>
    `

  supportWrapper.append(supportLogo)
  document.body.append(supportWrapper, chatWrapper)

  const sendingButton = find('.sending')
  const userText = find('.support-textarea')
  const chatContext = find('.chat-context')

  supportLogo.addEventListener('click', () => {
    supportWrapper.style.display = 'none'
    chatWrapper.style.display = 'flex'
    userText.focus()
  })

  userText.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      supportCommunication(chatContext, userText)
    }
  })

  sendingButton.addEventListener('click', () => supportCommunication(chatContext, userText))

  closeSupport(chatWrapper, supportLogo, supportWrapper)
}
