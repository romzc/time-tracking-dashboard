import Ellipsis from '../images/icon-ellipsis.svg'

const Card = (props) => {
    const {title} = props.item
    const { option } = props

    let hours
    let type
    let prevHours

    if( option.daily ) {
        hours = props.item.timeframes.daily.current
        prevHours = props.item.timeframes.daily.previous
        type = "daily"
    }
    else if ( option.weekly ) {
        hours = props.item.timeframes.weekly.current
        prevHours = props.item.timeframes.weekly.previous
        type = "weekly"
    }
    else if( option.monthly ) {
        hours = props.item.timeframes.monthly.current
        prevHours = props.item.timeframes.monthly.previous
        type = "monthly"
    }
    

    return (
        <section className="card">
            <div className="card-container">
                <div className="card--job-icon">
                    <h3 className="card--job">{title}</h3>
                    <img src={Ellipsis}  className="card--icon-ellipsis"/>
                </div>
                <div className = "card--week">
                    <h2 className="card--time">{hours}hrs</h2>
                    <small className="card--week-time">Last {type} - {prevHours}hrs</small>
                </div>
            </div>   
        </section>
    )
}

export default Card