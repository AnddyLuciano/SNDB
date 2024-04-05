import { ControlListProps } from "@package/components/control/ControlList";
import { useMemo } from "react";

export const useSearchFormItem = () => {
    return useMemo((): ControlListProps => {
        return {
            data: {
                forms: [
                    {
                        type: "text",
                        name: "inputSearchJob",
                        placeholder: "Search Job Here",
                    },
                    {
                        type: "text",
                        name: "inputSearchCompany",
                        placeholder: "Search By Company",
                    },
                    {
                        type: "text",
                        name: "inputSearchLocation",
                        placeholder: "Search By Location",
                    },
                ],
                hideBack: true,
                SubmitBtn: {
                    type: "submit",
                    value: "Search",
                },
            },
            onSubmit: (values) => {
                console.log(values);
                alert(JSON.stringify(values));
            },
        };
    }, []);
};
