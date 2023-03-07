import React from 'react'
import Card from './Card'
import MyBarChart from './Charts/MyBarChart'
// import BarChart from './Charts/BarChart'
// import PieChart from './Charts/PieChart'
import MyPieChart from './Charts/MyPieChart'
import Table from './Table/Table'

import SkuPlatformWise from './TableMetaData/SkuPlatformWise.json';
import AdvCampaignPerformance from './TableMetaData/AdvCampaignPerformance.json';
import SalesByCategory from './TableMetaData/SalesByCategory.json';
import SalesByBrand from './TableMetaData/SalesByBrand.json';
import TopSellers from './TableMetaData/TopSellers.json';
import WorstSellers from './TableMetaData/WorstSellers.json';
import AreaChart from './Charts/AreaChart'
import LineChart from './Charts/LineChart'
import PeriodDropDown from './PeriodDropDown'
import DoughnutChart from './Charts/DoughnutChart'

const Dashboard = () => {
  return (
    <div>
      <PeriodDropDown />
      <div className='columns'>
        <div className='column'>
          <Card title='Total Business Performance'>
            <MyBarChart />
          </Card>
        </div>

        <div className='column'>
          <Card title='Sales By Product'>
            <AreaChart />
          </Card>
        </div>
      </div>

      <div className='columns'>
        <div className='column is-4'>
          <Card title='Advertising Performance by Campaign Type'>
            <MyPieChart />
          </Card>
        </div>

        <div className='column'>
          <Card title='Sales By Category'>
            <LineChart />
          </Card>
        </div>
      </div>


      <div className='columns'>
        <div className='column is-8'>
          <Card title={AdvCampaignPerformance.title}>
            <Table
              customTableClass={AdvCampaignPerformance.class}
              columns={AdvCampaignPerformance.columns}
            />
          </Card>
        </div>

        <div className='column'>
          <Card title='Sales By Group'>
            <DoughnutChart />
          </Card>
        </div>
      </div>

      {/*       <div className='column'>
          <Card title={SalesByCategory.title}>
            <Table
              customTableClass={SalesByCategory.class}
              columns={SalesByCategory.columns}
            />
          </Card>
        </div>

      <div className='block'>
        <Card title={SalesByBrand.title}>
          <Table
            customTableClass={SalesByBrand.class}
            columns={SalesByBrand.columns}
          />
        </Card>
      </div> */}

      {/*       <div className='columns'>
        <div className='column'>
          <Card title={TopSellers.title}>
            <Table
              customTableClass={TopSellers.class}
              columns={TopSellers.columns}
            />
          </Card>
        </div>
        <div className='column'>
          <Card title={WorstSellers.title}>
            <Table
              customTableClass={WorstSellers.class}
              columns={WorstSellers.columns}
            />
          </Card>
        </div>
      </div>

      <div className='block'>
        <Card title={SkuPlatformWise.title}>
          <Table
            customTableClass={SkuPlatformWise.class}
            columns={SkuPlatformWise.columns}
          />
        </Card>
      </div> */}
    </div>
  )
}

export default Dashboard
