import { createEl } from '../../tools'
import client from '../../../assets/images/support/client.svg'

export const renderUserMessage = text => {
  const chatBox = createEl({ css: 'chat-box' })

  chatBox.innerHTML = `
  <p class='chat-text'>${text}</p>
    <img class='chat-logo' src='${client}' alt='client'>
  `

  return chatBox
}
