import { Suspense } from "react";
import { LoadingState } from "./LoadingState";

export const GeneralSuspense = ({ children }: GeneralSuspenseProps) => {
    return <Suspense fallback={<LoadingState />}>{children}</Suspense>;
};

type GeneralSuspenseProps = {
    children?: React.ReactElement;
};
