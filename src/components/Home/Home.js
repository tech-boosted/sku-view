import React from "react";
import Container from "../../elements/container/container";

import SkuBar from "../SkuBar/SkuBar";
import SkuTable from "../SkuTable/SkuTable";
import './Home.css';
import SkuPie from "../SkuPie/SkuPie";

const Home = () => {
    return (
        <div className="container home-root">
            <div className="home-table">
                <Container title="Total Business Performance">
                    <div className="table-root">
                        <SkuBar />
                    </div>
                </Container>
                <Container title="SKU Platform Wise">
                    <div className="table-root">
                        <SkuTable />
                    </div>
                </Container>
            </div>
            <div className="home-bar-chart">
                <Container title="Advertising Performance by Campaign Type">
                    <SkuPie />
                </Container>
            </div>
        </div>
    )
}

export default Home;