import React from 'react'
import Card from './Card'

import MyPieChart from './ChartJS/DefaultPieChart'
import AreaChart from './ChartJS/DefaultAreaChart'

import Table from './Table/Table'

import AdvCampaignPerformance from './TableMetaData/AdvCampaignPerformance.json';

import PeriodDropDown from './PeriodDropDown'
import DashboardItem01 from './DashboardItem01'
import DashboardItem02 from './DashboardItem02'
import DashboardItem03 from './DashboardItem03'


const Dashboard = () => {
  return (
    <div>
      <PeriodDropDown />
      <div className='columns'>
        <div className='column'>
          <Card title='Total Business Performance'>
            <DashboardItem01 />
          </Card>
        </div>

        <div className='column'>
          <Card title='Sales By Group'>
            <DashboardItem02 />
          </Card>
        </div>
      </div>


      <div className='block'>
        <Card title='Sales By Category'>
          <DashboardItem03 />
        </Card>
      </div>

      <div className='columns'>
        <div className='column is-4'>
          <Card title='Advertising Performance by Campaign Type'>
            <MyPieChart />
          </Card>
        </div>

        <div className='column'>
          <Card title={AdvCampaignPerformance.title}>
            <Table
              customTableClass={AdvCampaignPerformance.class}
              columns={AdvCampaignPerformance.columns}
            />
          </Card>
        </div>
      </div>


      <div className='columns'>

        <div className='column'>
          <Card title='Sales By Product'>
            <AreaChart />
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
