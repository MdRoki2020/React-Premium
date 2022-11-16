import React, { Suspense } from 'react'
import MasterLayout from '../components/pages/MasterLayout'
import Player from '../components/pages/Player'

const PlayerLayout = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense>
            <Player />
        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default PlayerLayout
