import styled from "styled-components";

const getColor = (status) => {
    switch (status) {
      case 'Alive':
        return 'rgb(85, 204, 68)';
      case 'Dead':
        return 'rgb(214, 61, 46)';
      default:
        return 'purple';
    }
};
  
const StatusSpan = styled.span`
    color: ${(props) => getColor(props.status)};
    font-weight: bold;
`;
  

export default function CardStatus({ children }) {
    return <StatusSpan status={children}>{children}</StatusSpan>;;
};