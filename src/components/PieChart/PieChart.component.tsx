import { ResponsivePie } from '@nivo/pie'
import React, { SFC } from 'react'
import { PieChartProp } from './index'
import {
    ChartContainer,
    Description,
    PieChartContainer
} from './PieChart.styles'

const PieChart: SFC<PieChartProp> = ({ chartData = [] }) => (
    <ChartContainer>
        <PieChartContainer>
            <ResponsivePie
                data={chartData}
                margin={{
                    top: 40,
                    right: 80,
                    bottom: 120,
                    left: 80
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors="purple_blue_green"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                enableRadialLabels={false}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </PieChartContainer>
        <Description>Detalle de Ordenes</Description>
    </ChartContainer>
)

export default PieChart
