import './Form.css';

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="fname">Book Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
      </div>

      <select id="country" name="country">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default Form;
