import { atom, useRecoilState } from "recoil";

export const useRecoilFormDataState = () => {
    const [formData, setFormData] = useRecoilState(formDataState);
    const [formDataError, setFormDataError] = useRecoilState(formDataErrorState);

    return {
        formData,
        formDataError,
        setFormData,
        setFormDataError,
    };
};

const formDataState = atom({
    key: "formDataState",
    default: {} as Record<string, any>,
});

const formDataErrorState = atom({
    key: "formDataErrorState",
    default: {} as Record<string, any>,
});
