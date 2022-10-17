import './ChartBar.css'

const ChartBar = props => {
    const chartBar = props.chartBar;
    const barFillHeight = (props.max > 0)
        ? Math.round((chartBar.value / chartBar.maxValue) * 100) + '%'
        : '0%';
    const fillStyle = { height: barFillHeight }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={fillStyle}></div>
            </div>
            <div className='chart-bar__label'></div>
        </div>
    )
}

export default ChartBar;