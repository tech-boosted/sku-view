import React from "react";
import Container from "../../elements/container/container";

import SkuBar from "../SkuBar/SkuBar";
import SkuTable from "../SkuTable/SkuTable";

import SkuPie from "../SkuPie/SkuPie";

const Home = () => {
    return (
        <div>
            <div>
                <Container title="Total Business Performance">
                    <div>
                        <SkuBar />
                    </div>
                </Container>
                <Container title="SKU Platform Wise">
                    <div>
                        <SkuTable />
                    </div>
                </Container>
            </div>
            <div>
                <Container title="Advertising Performance by Campaign Type">
                    <SkuPie />
                </Container>
            </div>
        </div>
    )
}

export default Home;