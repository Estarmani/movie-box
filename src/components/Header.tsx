
const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-4 pl-10 pr-10 shadow-2xl flex justify-between items-center">
      <h1 className="text-2xl font-bold">DEMO Streaming</h1>
      <div>
        <button className="mr-4">Log in</button>
        <button className="bg-gray-700 px-4 py-2 rounded">Start your free trial</button>
      </div>
    </div>
  );
};

export default Header;