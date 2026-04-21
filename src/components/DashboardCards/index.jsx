import { TallerCard, TestCard } from "./style"

export default function DashBoardCards() {
    return(
        <>
        <TestCard $colSpan={3} $rowSpan={4} />
        <TallerCard />
        </>
    )
} 