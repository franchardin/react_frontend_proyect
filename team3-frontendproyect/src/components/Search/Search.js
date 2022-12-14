import "bootstrap/dist/css/bootstrap.css"
import "./Search.css"

function Search() {
    return (
        <div className="form-group">
            <input className="form-control" type="text"  placeholder="Que deseas ver"></input>
            <button className="btn btn-outline-primary">Buscar</button>
        </div>
      );
}



export default Search;