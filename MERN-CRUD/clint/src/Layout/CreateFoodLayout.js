import React, { Suspense } from 'react'
import CreateFood from '../components/pages/CreateFood'
import MasterLayout from '../components/pages/MasterLayout'

const CreateFoodLayout = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense>
            <CreateFood/>
        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default CreateFoodLayout
