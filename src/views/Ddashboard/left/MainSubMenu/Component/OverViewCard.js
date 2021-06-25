import { useEffect, useState } from 'react'
import { Users, DollarSign, TrendingUp } from 'react-feather'

import {
    Row,
    Col
} from 'reactstrap'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'
const OverViewCard = ({ kFormatter }) => {
    const [data, setData] = useState({
        profit:
        {
            series: [
                {
                    name: 'Profit',
                    data: [28, 40, 36, 52, 38, 60, 55]
                }
            ],
            analyticsData: {
                profit: 92600
            }
        },
        product:
        {
            series: [
                {
                    name: 'Product',
                    data: [0, 33, 36, 52, 95, 44, 67]
                }
            ],
            analyticsData: {
                profit: 300
            }
        }

    })
    return (
        <>
            <Col md='6' xs='12'>
                {/* <OverViewCard kFormatter={kFormatter} /> */}
                <StatsWithAreaChart
                    icon={<DollarSign size={21} />}
                    color='primary'
                    // stats={kFormatter('98')}
                    stats={kFormatter(data.profit.analyticsData.profit)}

                    statTitle='Total Profit'
                    series={data.profit.series}
                    type='area'
                />
            </Col>
            <Col md='6' xs='12'>
                {/* <OverViewCard kFormatter={kFormatter} /> */}
                <StatsWithAreaChart
                    icon={<TrendingUp size={21} />}
                    color='primary'
                    // stats={kFormatter('98')}
                    stats={kFormatter(data.product.analyticsData.profit)}

                    statTitle='Total Product Sold'
                    series={data.product.series}
                    type='area'
                />
            </Col>
        </>

    )
}

export default OverViewCard
