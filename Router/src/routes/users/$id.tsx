import { createFileRoute } from "@tanstack/react-router";
import users from "../../users.json";

export const Route = createFileRoute("/users/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const user = users.find((user) => user.id == id);

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}
