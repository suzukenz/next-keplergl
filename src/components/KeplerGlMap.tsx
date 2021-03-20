import 'mapbox-gl/dist/mapbox-gl.css'

import KeplerGl from 'kepler.gl'
import { useSelector } from 'react-redux'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'

import { selectMapboxInfo } from '~/lib/slices/mapbox'

import TokenError from './TokenError'

const Map: React.FC = () => {
  const { apiAccessToken, mapStyles } = useSelector(selectMapboxInfo)
  if (!apiAccessToken) {
    return <TokenError />
  }
  return (
    <div
      style={{
        height: '92.5%', // TODO: tailwindcssに寄せたい(flexだとkepler.glのスタイルが崩れるので困っている)
      }}
      className="absolute w-full"
    >
      <AutoSizer>
        {({ height, width }) => (
          <KeplerGl
            id="MyMap"
            mapboxApiAccessToken={apiAccessToken}
            mapStylesReplaceDefault={true}
            mapStyles={mapStyles}
            width={width}
            height={height}
          />
        )}
      </AutoSizer>
    </div>
  )
}

export default Map
