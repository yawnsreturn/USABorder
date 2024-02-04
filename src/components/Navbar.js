import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                BOT
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                /home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                /team
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://discord.gg/usab"
                target="_blank"
              >
                /server
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
