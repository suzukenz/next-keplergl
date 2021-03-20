export interface MapStyle {
  id: string
  label: string
  url: string
  icon?: string
  layerGroups?: unknown[]
}

export const mapboxJapanStyle: MapStyle = {
  id: 'mapbox_japan',
  label: 'Mapbox Japan',
  url: 'mapbox://styles/suzukenz/ckltjfpgr22mx18mrkh22tlt2',
  icon: '/mapbox-japan-style-icon.jpeg',
}
