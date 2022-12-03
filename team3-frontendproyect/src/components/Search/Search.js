import "bootstrap/dist/css/bootstrap.css"

function Search() {
    return (
        <div className="input-group">
            <input className="form-control" type="text"  placeholder="Que deseas ver"></input>
            <button className="btn btn-outline-primary">Buscar</button>
        </div>
      );
}



export default Search;