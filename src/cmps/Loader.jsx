export function Loader() {
    return (
        <div className="loader-container">
            <img className="loader" src={require('../assets/img/loading.gif')} loading="lazy"/>
        </div>
    )
}