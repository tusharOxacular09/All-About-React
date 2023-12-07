import MyComponent from "./components/MyComponent";

function App({abc}) {
  // props
  let a = 10;
  return (
    <div className="text-2xl font-semibold">
        <p>Recived From Index: {abc}</p>
       <MyComponent a={a} subodh = {abc} />
       {/* <p>{a}</p> */}
    </div>
  );
}

export default App;















// function SubApp() {
//   return (
//     <div>
//       <h1 className='text-2xl text-green-700 font-bold'>Hii I am Learning Tushar </h1>
//     </div>
//   );
// }

// export {SubApp};
