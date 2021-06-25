import { useEffect, useState } from 'react'
import axios from 'axios'
import { Package } from 'react-feather'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const OrdersReceived = ({ kFormatter, warning }) => {
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
                sales: "92600"
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
                sales: "300K"
            }
        }

    })

  const options = {
    chart: {
      id: 'revenue',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      show: false
    },
    colors: [warning],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100]
      }
    },

    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: { show: false }
    }
  }

  useEffect(() => {
    axios.get('/card/card-statistics/orders').then(res => setData(res.data))
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Package size={21} />}
      color='warning'
      stats={kFormatter(data.product.analyticsData.sales)}
      statTitle='Nos Products'
      options={options}
      series={data.product.series}
      type='area'
    />
  ) : null
}
export default OrdersReceived
