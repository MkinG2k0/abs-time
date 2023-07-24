import compose from 'compose-function'
import { WithAntd } from 'core/providers/with-antd'
import { WithLayout } from 'core/providers/with-layout'
import { WithTheme } from 'core/providers/with-theme'

import { WithStore } from './with-store'
import { WithPersist } from './with-persist'

export const withProviders = compose(WithStore, WithPersist, WithAntd, WithTheme, WithLayout)
