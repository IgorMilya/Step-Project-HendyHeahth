import { Configuration, OpenAIApi } from 'openai'
import { renderSupportMessage } from './renderSupportMessage.js'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_SOME_CODE,
})

const openai = new OpenAIApi(configuration)

export async function run(value, context) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'assistant', content: value }],
    max_tokens: 120,
  })

  context.prepend(renderSupportMessage(completion.data.choices[0].message.content))
}
