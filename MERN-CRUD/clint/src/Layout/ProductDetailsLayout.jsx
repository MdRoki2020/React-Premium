import React, { Suspense } from 'react'
import MasterLayout from '../components/pages/MasterLayout'
import ProductDetails from '../components/pages/ProductDetails'

const ProductDetailsLayout = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense>
            <ProductDetails />
        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default ProductDetailsLayout
