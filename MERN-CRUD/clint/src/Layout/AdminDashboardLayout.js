import React, { Suspense } from 'react'
import AdminDashboard from '../components/pages/AdminDashboard'
import MasterLayout from '../components/pages/MasterLayout'

const AdminDashboardLayout = () => {
  return (
    <MasterLayout>
        <Suspense>

          <AdminDashboard />

        </Suspense>
      </MasterLayout>
  )
}

export default AdminDashboardLayout
