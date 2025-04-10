import { createFileRoute, Link } from "@tanstack/react-router";
import users from "../../users.json";

export const Route = createFileRoute("/users/")({
  component: Index,
});

function Index() {
  return (
    <table>
      <thead>
        <tr>
          <th>User name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <Link to={user.id}>details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
