import "./nav-style.css";

export default function Nav() {
  return (
    <>
      <label>
        <input type="checkbox" />
        <span class="menu"></span>
        <ul>
          <li>
            <a href="#" title="homepage">
              Home
            </a>
          </li>
          <li>
            <a href="#" title="saved employees">
              Employees
            </a>{" "}
          </li>
          <li>
            <a href="#" title="contact us">
              Contact
            </a>{" "}
          </li>
        </ul>
      </label>
    </>
  );
}