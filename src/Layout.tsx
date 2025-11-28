// import './Layout.module.css';
// import styles from './Layout.module.css';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Footer/> */}
        </>
    );
}