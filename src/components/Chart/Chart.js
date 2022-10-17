import './Chart.css'
import ChartBar from './ChartBar';

const Chart = props => {
    return (
        <>
            {props.dataPoints.map(chartBar => {
                return <ChartBar
                    key={chartBar.label}
                    chartBar={chartBar}
                    maxValue={null}
                />
            })}
        </>
    )
}

export default Chart;