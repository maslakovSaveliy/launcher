import { combine } from '@lmpx/styled'
import { baseStyles } from './base.styles'
import { shapeStyles } from './shape.styles'
import { appearanceStyles } from './appearance.styles'
import { transitionStyles } from './transition.styles'

export const styles = combine(baseStyles, shapeStyles, appearanceStyles, transitionStyles)
