import { virtual } from 'haunted'
import { html } from 'lit-html'

import Sphere from './Sphere.js'

const RotatingSpheres = virtual((positions, { x, y, z }) => {
  return html`
    <a-entity rotation="${x} ${y} ${z}" position="0 0 -25">
      ${positions.map(position => Sphere(position))}
    </a-entity>
  `
})

export default RotatingSpheres
