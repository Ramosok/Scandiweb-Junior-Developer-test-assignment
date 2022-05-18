import { Link } from "react-router-dom";
import { memo } from "react";

import { ROUTE_NAMES } from "../../../../Routers/routeNames";

export const LinkItems = memo(({ name }) => {
  const nameLink = name.toUpperCase();
  return (
    <div>
      <Link to={ROUTE_NAMES[nameLink]}>{name}</Link>
    </div>
  );
});
