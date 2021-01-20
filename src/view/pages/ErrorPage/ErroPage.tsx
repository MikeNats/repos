import React from "react";
import { HVCenter } from "../../common/Layout";
import Alert from "@material-ui/lab/Alert";

const ErrorPage: React.FC = () => {
  return (
    <HVCenter>
      <Alert severity="error">Oops somthing went wrong!</Alert>
    </HVCenter>
  );
};

export default React.memo(ErrorPage);
