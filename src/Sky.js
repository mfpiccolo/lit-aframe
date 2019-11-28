import { virtual } from 'haunted'
import { html } from 'lit-html'

const Sky = virtual(() => {
  return html`
    <a-sky id="targets" color="#ECECEC"></a-sky>
  `
})

export default Sky
