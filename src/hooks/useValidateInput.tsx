import _ from "lodash";

export const useValidateInput = () => {
    return ({ condition, errorMessage }: Props) => {
        const hasError = !condition;

        return {
            hasError,
            message: errorMessage,
        };
    };
};

type Props = {
    condition: boolean;
    errorMessage: string;
};

export const emailValidation = ({ value }: { value: string }) => {
    const hasError = !/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

    return {
        hasError,
        message: "Veuillez saisir une adresse e-mail valide",
    };
};
