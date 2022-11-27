import React from 'react';
import '../Styling/style.css';

const SideNav = () => {
    return (
        <>
            {/* SIDENAV SECTION */}
            <div className="sideNav">
                <div className="spacebetween">
                    <div className="trademates">
                        <i class="fa-solid fa-chart-simple"></i>
                        <p>TRADEMATES</p>
                    </div>
                    <div className="navlist">
                        <ul>
                            <li><i class="fa-solid fa-square-poll-vertical"></i><a href="/market">Market</a></li>
                            <li><i class="fa-solid fa-cubes"></i><a href="/dashboard">Dashboard</a></li>
                            <li><i class="fa-solid fa-wallet"></i><a href="/portfolio">Portfolio</a></li>
                            <li><i class="fa-solid fa-newspaper"></i><a href="/news">News</a></li>
                        </ul>
                    </div>
                </div>
                <div className="paraBox">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/bulb-book-6754086-5558497@0.png?w=0&h=700&f=png" alt="" />
                    <div className="tradingTips">
                        <h4>Trading learning tips</h4>
                        <p>you can do basic trading easily</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav

