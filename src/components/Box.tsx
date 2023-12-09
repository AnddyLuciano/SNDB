export const Box = (props: BoxProps) => {
    return (
        <div
            className={`border-[1px] border-[#ffffff49] text-[#ebf2f7] rounded-md flex flex-col gap-2 items-start justify-center p-2 ${props.className}`}
        >
            {props.children}
        </div>
    );
};

type BoxProps = {
    children: React.ReactNode;
    className?: string;
};
