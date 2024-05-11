
type HeaderProps = {
    title: string;
    description: string;
}
export const Header = (props: HeaderProps) => {
    return (
        <h1>
            {props.title}
            {props.description}
        </h1>
    );
};
