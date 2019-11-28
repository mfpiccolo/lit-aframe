import { virtual } from 'haunted'
import { html } from 'lit-html'

const AddSphereButton = virtual(addSphere => {
  return html`
    <a-plane
      id="add-sphere"
      position="0 0.9 -2.2"
      color="#0D4F8B"
      opacity="0.7"
      height="0.25"
      width="0.9"
      shader="flat"
      @click=${() => addSphere()}
      ><a-entity
        text="value: Add Sphere; align: center;"
        scale="2 2 2"
      ></a-entity
    ></a-plane>
  `
})

export default AddSphereButton
