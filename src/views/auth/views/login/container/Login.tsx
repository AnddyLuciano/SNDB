import { useState } from "react";
import { Button } from "../../../../../components/Button";
import { CheckboxInput } from "../../../../../components/CheckboxInput";
import { PasswordInput } from "../../../../../components/PasswordInput";
import { TextInput } from "../../../../../components/TextInput";
import { useRecoilFormDataState } from "../../../../../hooks/useRecoilFormDataState";
import "../css/login.css";
import { useFetchUser } from "../hooks/useFetchUser";
const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { formData, setFormData } = useRecoilFormDataState();
    const loginMutation = useFetchUser();

    const handleOnClick = () => {
        setIsLoading(true);
        const mutate = loginMutation({
            data: { email: formData.email, password: formData.password },
        }).then((data) => {
            setIsLoading(false);
            console.log(data);
        });
    };
    return (
        <main className="login-layout h-screen flex items-center justify-center text-black p-0">
            <div className="form max-w-screen-sm w-full min-w-max px-10 h-full bg-white flex flex-col items-center justify-center gap-10">
                <div className="sndb-logo-text flex items-center justify-center w-full">
                    <img src="/public/Logo Sa.svg" alt="logo" width={55} />
                    <h2 className="font-semibold text-4xl text-[#1A283F]">S N D B</h2>
                </div>
                <div className="form-box flex flex-col gap-5 w-full">
                    <TextInput
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="user@country.com"
                        icon="fa-solid fa-envelope text-[rgb(161_161_170)]"
                        validateInput="email"
                    />
                    <PasswordInput
                        id="password"
                        name="password"
                        label="Mot de passe"
                        placeholder="••••••••••"
                        icon="fa-solid fa-key text-[rgb(161_161_170)]"
                    />
                    <CheckboxInput id="remember" name="remember" label="Se souvenir de moi" />
                    <Button
                        label="Se connecter"
                        // hoverColor="#aaaa46"
                        className="border-2 border-[#0b0e3e] bg-[#0b0e3e]"
                        onClick={handleOnClick}
                        isLoading={isLoading}
                    />
                    <div className="or-box flex items-center justify-center">
                        <span className="border-t flex-1"></span>
                        <p className="px-2">OU</p>
                        <span className="border-t flex-1"></span>
                    </div>
                    <div className="auth2 flex items-center justify-center gap-3">
                        <div className="auth2-icon-box px-5 py-2 border-2 rounded-md border-zinc-400 hover:border-[#1A283F] hover:cursor-pointer">
                            <img src="/public/apple.png" alt="freepik-google" width={25} />
                        </div>
                        <div className="auth2-icon-box px-5 py-2 border-2 rounded-md border-zinc-400 hover:border-[#1A283F] hover:cursor-pointer">
                            <img src="/public/google.png" alt="freepik-google" width={25} />
                        </div>
                        <div className="auth2-icon-box px-5 py-2 border-2 rounded-md border-zinc-400 hover:border-[#1A283F] hover:cursor-pointer">
                            <img src="/public/facebook.png" alt="freepik-google" width={25} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-box flex flex-col justify-center max-md:hidden">
                <div className="text-start w-1/2 px-8 max-lg:w-full max-lg:px-5 max-lg:max-w-screen-sm">
                    <h1 className="text-4xl text-[#1A283F] font-bold max-lg:my-2">
                        Un hub centralisé sur la plateforme{" "}
                        <span className="text-[#FEBB8E]">SNDB!</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni
                        corrupti delectus, suscipit vitae aspernatur libero nobis cum inventore
                        provident.
                    </p>
                </div>
                <img
                    src="/public/—Pngtree—a woman wearing vr headset_7649433.png"
                    alt="pngtree-woman-wearing-vr"
                    className="pngtree mx-auto w-[40%] min-w-[25rem]"
                />
                <div className="flex flex-col items-end max-lg:hidden">
                    <h1 className="text-4xl text-white font-bold w-1/2">
                        Suivez les performances en temps réel avec{" "}
                        <span className="text-[#FEBB8E]">SNDB!</span>
                    </h1>
                    <p className="w-1/2 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni
                        corrupti delectus, suscipit vitae aspernatur libero nobis cum inventore
                        provident.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Login;
