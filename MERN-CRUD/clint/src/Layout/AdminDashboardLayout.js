import React, { Suspense } from 'react'
import MainDashboard from '../components/pages/MainDashboard'
import MasterLayout from '../components/pages/MasterLayout'

const AdminDashboardLayout = () => {
  return (
    <MasterLayout>
        <Suspense>

          <MainDashboard />

        </Suspense>
      </MasterLayout>
  )
}

export default AdminDashboardLayout
