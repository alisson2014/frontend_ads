export default function CardStatus({ children }) {
    const getColor = () => {
        if(children === "Alive") {
            return "rgb(85, 204, 68)";
        } else if (children === "Dead") {
            return "rgb(214, 61, 46);";
        } else {
            return "purple";
        }
    };

    return <span style={{ color: getColor(), fontWeight: "bold" }}>{children}</span>;
};