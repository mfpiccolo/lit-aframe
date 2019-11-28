import { virtual } from 'haunted'
import { html } from 'lit-html'

const ClearSpheres = virtual(clearSpheres => {
  return html`
    <a-plane
      id="add-sphere"
      position="0 0.35 -2.2"
      color="#0D4F8B"
      opacity="0.7"
      height="0.25"
      width="0.9"
      shader="flat"
      @click=${() => clearSpheres()}
      ><a-entity
        text="value: Clear Spheres; align: center;"
        scale="2 2 2"
      ></a-entity
    ></a-plane>
  `
})

export default ClearSpheres
