import styled from "styled-components";

const DashboardCard = styled.div`
    border-radius: 15px;
    border: 4px solid var(--clr-red-1000);
    background-color: var(--clr-neutral-100);
`

export const TestCard = styled(DashboardCard)`
    grid-column: span ${props => props.$colSpan};
    grid-row: span ${props => props.$rowSpan};
`

export const TallerCard = styled(DashboardCard)`
    grid-column: 4;
    grid-row: 1 / 5;
`
