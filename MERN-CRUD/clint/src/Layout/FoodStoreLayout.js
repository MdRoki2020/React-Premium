import React, { Suspense } from 'react'
import FoodStore from '../components/pages/FoodStore'
import MasterLayout from '../components/pages/MasterLayout'

const FoodStoreLayout = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense>
            <FoodStore />
        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default FoodStoreLayout
