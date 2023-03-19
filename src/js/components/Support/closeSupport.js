export const closeSupport = (chatWrapper, supportLogo, supportWrapper) => {
  document.addEventListener('click', e => {
    if (!e.composedPath().includes(chatWrapper) && !e.composedPath().includes(supportLogo)) {
      chatWrapper.style.display = 'none'
      supportWrapper.style.display = 'block'
    }
  })
}
