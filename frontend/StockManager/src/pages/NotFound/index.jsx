const NotFound = () => {
    return (
        <div style={{ height: "calc(100vh - 60px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}> 
            <h1 style={{fontSize: "150px", color: "#26748A"}}>404</h1>
            <p style={{fontSize: "25px", color: "#26748A"}}>Essa página não existe.</p>
        </div>
    );
}
 
export default NotFound;