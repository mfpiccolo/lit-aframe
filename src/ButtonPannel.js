import { virtual } from 'haunted'
import { html } from 'lit-html'

import AddSphereButton from './AddSphereButton.js'
import ClearSpheresButton from './ClearSpheresButton.js'
import ToggleRotatingButton from './ToggleRotatingButton.js'

const ButtonPannel = virtual(
  (addSphere, clearSpheres, toggleRotating, rotating) => {
    return html`
      ${AddSphereButton(addSphere)} ${ClearSpheresButton(clearSpheres)}
      ${ToggleRotatingButton(toggleRotating, rotating)}
    `
  }
)

export default ButtonPannel
