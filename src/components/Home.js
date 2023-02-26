import React from 'react'
import Card from './Card'
import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'
import MyTable from './MyTable/MyTable'

import SkuPlatformWise from './MetaData/SkuPlatformWise.json';
import AdvCampaignPerformance from './MetaData/AdvCampaignPerformance.json';
import SalesByCategory from './MetaData/SalesByCategory.json';
import SalesByBrand from './MetaData/SalesByBrand.json';
import TopSellers from './MetaData/TopSellers.json';
import WorstSellers from './MetaData/WorstSellers.json';

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

      <div className='columns'>
        <div className='column'>
          <Card title={AdvCampaignPerformance.title}>
            <MyTable
              customTableClass={AdvCampaignPerformance.class}
              columns={AdvCampaignPerformance.columns}
            />
          </Card>
        </div>
        <div className='column'>
          <Card title={SalesByCategory.title}>
            <MyTable
              customTableClass={SalesByCategory.class}
              columns={SalesByCategory.columns}
            />
          </Card>
        </div>
      </div>


      <div className='block'>
        <Card title={SalesByBrand.title}>
          <MyTable
            customTableClass={SalesByBrand.class}
            columns={SalesByBrand.columns}
          />
        </Card>
      </div>

      <div className='columns'>
        <div className='column'>
          <Card title={TopSellers.title}>
            <MyTable
              customTableClass={TopSellers.class}
              columns={TopSellers.columns}
            />
          </Card>
        </div>
        <div className='column'>
          <Card title={WorstSellers.title}>
            <MyTable
              customTableClass={WorstSellers.class}
              columns={WorstSellers.columns}
            />
          </Card>
        </div>
      </div>

      <div className='block'>
        <Card title={SkuPlatformWise.title}>
          <MyTable
            customTableClass={SkuPlatformWise.class}
            columns={SkuPlatformWise.columns}
          />
        </Card>
      </div>
    </div>
  )
}

export default Home
