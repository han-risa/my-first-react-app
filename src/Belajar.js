const Tombol = (props) => {
  const handleButtonClick = () => {
    alert(props.pesan);
  }
  return (
      <button onClick={handleButtonClick} style={{ margin: "10px" }}>
        {props.children}
      </button>
    );
} 

const Belajar = () => 
{
  return (
    <div>
      <h1>Belajar React</h1>
      <Tombol pesan="Belajar React">React</Tombol>
      <Tombol pesan="Belajar Javascript">Javascript</Tombol>
    </div>
  );
}

export default Belajar;