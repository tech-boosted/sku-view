import React from "react";
import Container from "../../elements/container/container";

import SkuTable from "../SkuTable/SkuTable";
import './Home.css';
import SkuPie from "../SkuPie/SkuPie";

const Home = () => {
    return (
        <div className="container home-root">
            <div className="home-table">
                <Container>
                    <div className="table-root">
                        <SkuTable />
                    </div>
                </Container>
            </div>
            <div className="home-bar-chart">
                <Container>
                    <SkuPie />
                </Container>
            </div>
        </div>
    )
}

export default Home;