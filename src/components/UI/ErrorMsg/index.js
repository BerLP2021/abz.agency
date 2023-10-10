import { Suspense, lazy } from "react";
import Spinner from "../Spinner";

const Msg = lazy(() => import("./ErrorMsg"));
export default function ErrorMsg() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Msg />
    </Suspense>
  );
}
