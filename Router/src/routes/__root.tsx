import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/users" className="nav-link">Users</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  ),
});
