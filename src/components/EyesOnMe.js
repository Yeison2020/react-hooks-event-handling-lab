// Code EyesOnMe Component Here

function EyesOnMe() {
  function handleFocus() {
    console.log("Focus");
  }

  function handleBlur() {
    console.log("Blur");
  }
  return (
    <>
      <button onBlur={handleBlur} onFocus={handleFocus}>
        Eyes on me
      </button>
    </>
  );
}

export default EyesOnMe;
