/* eslint-disable no-unused-vars */
import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: true,
  logoDecal: './three.png',
  fullDecal: './three.png',
})

export default state
