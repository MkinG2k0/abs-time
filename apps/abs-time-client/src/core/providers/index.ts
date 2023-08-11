import compose from 'compose-function'

import { WithStore } from './with-store'
import { WithPersist } from './with-persist'

import { WithAntd } from 'core/providers/with-antd'
import { WithLayout } from 'core/providers/with-layout'
import { WithTheme } from 'core/providers/with-theme'

export const withProviders = compose(WithStore, WithPersist, WithAntd, WithTheme, WithLayout)
