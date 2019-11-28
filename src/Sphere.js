import { virtual } from 'haunted'
import { html } from 'lit-html'

const Sphere = virtual(position => {
  return html`
    <a-sphere position=${position} radius="1.25" color="#EF2D5E"></a-sphere>
  `
})

export default Sphere
