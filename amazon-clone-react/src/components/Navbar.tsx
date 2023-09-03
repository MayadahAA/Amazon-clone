import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <nav className="bg-gray-900 m-auto px-2 py-2 text-white flex">
          <ul className="flex items-center justify-between w-full">
            <li>
              <img src="" alt="Amazon Logo" />
            </li>
            <li>
              <p>Delilver to</p>
              <img src="" alt="" />
              <h3>Saudi Arabia</h3>
            </li>
            <li>
              <label></label>
              <input type="text" placeholder="Search" />
            </li>
            <li>
            </li>
            <li>
            <Link to={'/login'}>
              <button>Acount</button>
              </Link>
            </li>
            <li>
                <Link to={'/cart'}>

              <button>
                <img src="" alt="Cart" />
              </button>
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
