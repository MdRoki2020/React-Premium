import React, { Suspense } from 'react'
import FoodEdit from '../components/pages/FoodEdit'
import MasterLayout from '../components/pages/MasterLayout'

const FoodEditLayout = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense>

          <FoodEdit />

        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default FoodEditLayout
