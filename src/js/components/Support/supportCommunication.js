import { renderUserMessage } from './renderUserMessage'
import { run } from './openAI'

export const supportCommunication = (context, text) => {
  if (text.value === 'clear') {
    context.innerHTML = ''
    text.value = ''
  } else {
    context.prepend(renderUserMessage(text.value))
    run(text.value, context)
    text.value = ''
  }
}
