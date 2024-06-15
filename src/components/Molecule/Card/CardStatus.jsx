export default function CardStatus({ children }) {
    const getColor = () => {
        if(children === "Alive") {
            return "green";
        } else if (children === "Dead") {
            return "red";
        } else {
            return "purple";
        }
    };

    return <span style={{ color: getColor(), fontWeight: "bold" }}>{children}</span>;
};