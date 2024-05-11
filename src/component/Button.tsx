
type BtnProps = {
    text: string;
    onClick: (val: string) => void;
};

export const Button = ({text, onClick}: BtnProps) => {
    return (
        <button className="btn btn-prime" type='button' onClick={() => onClick(text)} >{text}</button>
    );
};

