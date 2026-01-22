import pic from '../assets/mela.jpeg'
function Card(){
    //inline Css styles in React
    const styles ={
        border: "1px solid black",
        color: "black",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "10px",
        width: "60%"
    }
    return(
        <div className='card'>
            <img src={pic} alt='Pic'/>
            <h2>Bro_code</h2>
            <p>Lorem ipsum  Doloribus vero repudiandae quibusdam?</p>
            <button style={styles}>Click me</button>
        </div>
    );
}
export default Card