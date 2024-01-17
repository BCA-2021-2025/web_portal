import { Outlet } from "react-router-dom";
import TopMenu from "../../../components/layout/TopMenu";

export default function Index() {
    return (
        <>
            <TopMenu/>
            <Outlet/>
        </>
    )
}