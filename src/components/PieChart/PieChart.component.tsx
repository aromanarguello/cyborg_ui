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
                animate={true}
                innerRadius={0.6}
                colors="blues"
                padAngle={0.5}
                cornerRadius={5}
                radialLabelsLinkColor="inherit"
                radialLabelsLinkStrokeWidth={3}
                radialLabelsTextColor="inherit:darker(1.2)"
            />
        </PieChartContainer>
        <Description>Detalle de Ordenes</Description>
    </ChartContainer>
)

export default PieChart
