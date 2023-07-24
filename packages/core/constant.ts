export const SEC = 1000
export const MIN = 60 * SEC
export const SPLIT_MIN_TIME = (Number(process.env.SPLIT_MIN_TIME) || 4) * SEC
export const SPLIT_MAX_TIME = (Number(process.env.SPLIT_MAX_TIME) || 6) * SEC
export const INTERVAL_FETCH = (Number(process.env.INTERVAL_FETCH) || 12) * SEC
