import { B } from "./B";

function A({value}) {
  return (
    <div>
      <p className="border-2 border-blue-500 p-4 rounded-lg m-2 inline-block">A coomponent's Value : {value}</p>
      <B value={value + 1} />
    </div>
  );
}

export { A };
