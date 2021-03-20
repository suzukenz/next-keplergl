import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mapboxJapanStyle, MapStyle } from '~/lib/mapStyles'
import { RootState } from '~/store'

interface MapboxState {
  apiAccessToken: string
  mapStyles: MapStyle[]
}

export const initialMapStyles = [mapboxJapanStyle] as const

const initialState: MapboxState = {
  apiAccessToken: '',
  mapStyles: [...initialMapStyles],
}

const mapboxSlice = createSlice({
  name: 'mapbox',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.apiAccessToken = action.payload
    },
  },
})

export const selectMapboxInfo = (state: RootState): MapboxState => state.mapbox

export const { setAccessToken } = mapboxSlice.actions

export default mapboxSlice.reducer
