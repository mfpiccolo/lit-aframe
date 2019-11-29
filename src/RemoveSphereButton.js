import { virtual } from 'haunted'
import { html } from 'lit-html'

const RemoveSphere = virtual(removeSphere => {
  return html`
    <a-plane
      id="add-sphere"
      position="0 0.55 -2.2"
      color="#0D4F8B"
      opacity="0.7"
      height="0.25"
      width="0.9"
      shader="flat"
      @click=${() => removeSphere()}
      ><a-entity
        text="value: Remove Sphere; align: center;"
        scale="2 2 2"
      ></a-entity
    ></a-plane>
  `
})

export default RemoveSphere
