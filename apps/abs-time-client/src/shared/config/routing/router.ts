// @/app/routing
import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { authRoute, mainRoute, tabsRoute, todoRoute } from 'shared/config/routing/routes'

// 1. Define routes
const routes = [
	{ path: '/', route: mainRoute },
	{ path: '/auth', route: authRoute },
	{ path: '/tabs', route: tabsRoute },
	{ path: '/tabs/todos', route: todoRoute },
]

// 2. Create router
export const router = createHistoryRouter({
	routes,
})

const isSsr = false
// 3. Create history
const history = isSsr ? createMemoryHistory() : createBrowserHistory()

// 4. Attach it to router
router.setHistory(history)
