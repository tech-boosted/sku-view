import React from 'react';
// import Table from './Table/Table';
import InsightsTable from './Table/InsightsTable';
import SkuPlatformWise from './TableMetaData/SkuPlatformWise.json';

const Insights = () => {
    var skuColumns = SkuPlatformWise.columns;
    var customClass = SkuPlatformWise.class;

    return (
        <div>
            {/* <Table
                customTableClass={SkuPlatformWise.class}
                columns={SkuPlatformWise.columns}
            /> */}

            <InsightsTable
                columns={skuColumns}
                customClass={customClass}
            />
        </div>
    )
}

export default Insights;