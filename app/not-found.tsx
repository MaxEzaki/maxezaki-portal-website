import Card from "./_components/card";
import { Suspense } from "react";

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <Card type="404" />
    </Suspense>
  );
}
