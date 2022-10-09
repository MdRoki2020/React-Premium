import React, { Suspense } from 'react'
import Dashboard from '../components/pages/Dashboard'
import MasterLayout from '../components/pages/MasterLayout'

const DashboardLayout = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense>

          <Dashboard />

        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default DashboardLayout
