import { configureStore } from '@reduxjs/toolkit'
import { enhanceReduxMiddleware } from 'kepler.gl/middleware'
import keplerGlReducer from 'kepler.gl/reducers'

import mapboxReducer, { initialMapStyles } from './lib/slices/mapbox'

const initializedKeplerGlReducer = keplerGlReducer.initialState({
  mapStyle: { styleType: initialMapStyles[0].id },
  mapState: { latitude: 35.658517, longitude: 139.70133399999997 }, // NOTE: 渋谷駅座標
  zoom: 13,
})

const store = configureStore({
  reducer: {
    mapbox: mapboxReducer,
    keplerGl: initializedKeplerGlReducer,
  },
  middleware: [...enhanceReduxMiddleware()],
  devTools:
    process.env.NODE_ENV == 'production'
      ? false
      : {
          actionsBlacklist: [
            '@@kepler.gl/MOUSE_MOVE',
            '@@kepler.gl/UPDATE_MAP',
            '@@kepler.gl/LAYER_HOVER',
          ],
        },
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
