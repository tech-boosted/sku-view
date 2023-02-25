import React from 'react'
import Card from './Card'
import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'
import SkuTable from './SkuTable/SkuTable'

const Home = () => {
  return (
    <div>
      <div className='columns'>
        <div className='column'>
          <Card title='Total Business Performance'>
            <BarChart />
          </Card>
        </div>
        <div className='column'>
          <Card title='Advertising Performance by Campaign Type'>
            <PieChart />
          </Card>
        </div>
      </div>

      <div className='block'>
        <Card title='SKU Platform Wise'>
          <SkuTable />
        </Card>
      </div>
    </div>
  )
}

export default Home
