async function tryTill(todo, till, maxTries = 10) {
  if (!todo) {
    throw new Error("todo is required");
  }
  if (!till || typeof till !== "function") {
    throw new Error("till is required and must be a function");
  }
  let calls = 0;
  const tryIfTill = async () => {
    if (till()) {
      return await todo();
    }
    return false;
  };
  do {
    const res = await tryIfTill();
    if (res || res === 0) {
      return res;
    }
    calls++;
  } while (calls < maxTries);
  return Promise.reject(
    new Error(`tryTill was unable to complete "todo" in ${maxTries} calls`)
  );
}
export default tryTill;
