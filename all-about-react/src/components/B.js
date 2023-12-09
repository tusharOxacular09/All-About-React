import { C } from "./C";

function B({value}) {
  return (
    <>
      <p className="border-2 border-red-500 p-4 rounded-lg m-2 inline-block">B coomponent's Value : {value}</p>
      <C value = {value + 9}/>
    </>
  );
}

export { B };
