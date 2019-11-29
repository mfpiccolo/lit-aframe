import { component, useState, useEffect } from 'haunted'
import { html } from 'lit-html'

import Sky from './Sky.js'
import ButtonPannel from './ButtonPannel.js'
import RotatingSpheres from './RotatingSpheres.js'
import useInterval from './useInterval.js'

const getRandom = (min, max) => Math.random() * (max - min) + min
const randomPosition = () =>
  `${getRandom(10, -10)} ${getRandom(5, -3)} ${getRandom(-5, -15)}`

const App = () => {
  const [positions, setPositions] = useState([randomPosition()])
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const [rotating, setRotating] = useState(true)

  useInterval(() => {
    if (!rotating) return
    const { x, y, z } = rotation
    setRotation({ x: x + 0.3, y: y + 0.3, z: z + 0.3 })
  }, 20)

  const addSphere = () => setPositions([...positions, randomPosition()])
  const removeSphere = () => {
    const newPositions = [...positions]
    newPositions.splice(positions.length - 1)
    setPositions(newPositions)
  }
  const clearSpheres = () => setPositions([])
  const toggleRotating = () => setRotating(!rotating)

  return html`
    <a-scene>
      <!-- Can't move this to a component and I don't know why ??? -->
      <a-entity camera look-controls wasd-controls>
        <a-entity
          cursor="fuse: false"
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.0009; radiusOuter: 0.006"
          material="color: black; shader: flat"
        >
        </a-entity>
      </a-entity>

      ${ButtonPannel(
        addSphere,
        removeSphere,
        clearSpheres,
        toggleRotating,
        rotating
      )}
      ${Sky()} ${RotatingSpheres(positions, rotation)}
    </a-scene>
  `
}

customElements.define('my-app', component(App, { useShadowDOM: false }))
