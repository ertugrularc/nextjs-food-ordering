import { Campaigns } from '@/components/Campaigns'
import Carousel from '@/components/layout/Carousel'
import MenuWrapper from '@/components/product/MenuWrapper'
import React from 'react'
import About from '@/components/About'
import Reservation from '@/components/Reservation'
import Customers from '@/components/customers/Customers'

const Index = ({ categoryList,productList }) => {
  return (
    <React.Fragment >
      <Carousel/>
      <Campaigns/>
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About/>
      <Reservation/>
      <Customers/>
    </React.Fragment>
  )
  
}


export default Index