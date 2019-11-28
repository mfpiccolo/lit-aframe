import { virtual } from 'haunted'
import { html } from 'lit-html'

const ToggleRotatingButton = virtual((toggleRotating, rotating) => {
  const text = rotating ? 'Pause' : 'Resume'

  return html`
    <a-plane
      id="add-sphere"
      position="0 -0.17 -2.2"
      color="#0D4F8B"
      opacity="0.7"
      height="0.25"
      width="0.9"
      shader="flat"
      @click=${() => toggleRotating()}
      ><a-entity
        text="value: ${text} Rotation; align: center;"
        scale="2 2 2"
      ></a-entity
    ></a-plane>
  `
})

export default ToggleRotatingButton
