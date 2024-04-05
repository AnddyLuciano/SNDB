import React from "react";
import { Button, ButtonProps } from "@package/components/inputs/Button";

export const ControlListFooter = ({
    hideBack,
    hideSubmit,
    hideFooter,
    CancelBtn,
    SubmitBtn,
}: ControlListFooterProps) => {
    return hideFooter !== true ? (
        <>
            {hideSubmit !== true && <Button {...SubmitBtn} />}
            {hideBack !== true && <Button {...CancelBtn} />}
        </>
    ) : (
        <></>
    );
};

export type ControlListFooterProps = {
    hideBack?: boolean;
    hideSubmit?: boolean;
    hideFooter?: boolean;
    SubmitBtn?: Omit<ButtonProps, "onClick">;
    CancelBtn?: Omit<ButtonProps, "onClick">;
};
