import { Link } from "react-router-dom";
import { memo } from "react";

import { ROUTE_NAMES } from "../../../../Routers/routeNames";

export const LinkItems = memo(({ name }) => {
  return (
    <div style={{ margin: "5px" }}>
      <Link to={ROUTE_NAMES[name.toUpperCase()]}>{name}</Link>
    </div>
  );
});
