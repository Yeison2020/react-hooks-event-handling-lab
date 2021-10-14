// Code Keypad Component Here

function Keypad() {
  function handleClick(e) {
    console.log("Enter Password Changed:", e.target.value);
  }
  return (
    <div>
      <form>
        <label>Enter Your Password</label>
        <br />
        <input
          onChange={handleClick}
          type="password"
          name="password"
          placeholder="Enter password..."
        />
        <br />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Keypad;
