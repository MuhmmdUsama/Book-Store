import './Bookcard.css';
const Bookcard = () => {
  return (
    <>
      <div className="card">
        <div className='info'>
          <span>Action</span>
          <h2>The Hunger Games</h2>
          <h4>Suzanne Collins</h4>
        </div>
        <input type="button" value="Remove" />
      </div>
    </>
  );
};

export default Bookcard;
