import { createEl } from '../../tools'
import assistant from '../../../assets/images/support/assistant.svg'

export const renderSupportMessage = text => {
  const chatBox = createEl({ css: 'chat-box' })
  chatBox.classList.add('support')
  chatBox.innerHTML = `
  <img class='chat-logo' src='${assistant}' alt='assistant'>
  <p class='chat-text'>${text}</p>
  `
  return chatBox
}
