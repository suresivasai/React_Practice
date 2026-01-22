function Condition(props){
        return(
            props.logged ? <h4 className="heading">Hello {props.username}</h4 > : <h4 className="heading1">Please Login</h4>
        );
}
export default Condition