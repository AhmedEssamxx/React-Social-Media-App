import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from '../../components/rightbar/rightbar';
import Feed from '../../components/feed/feed';
import "./Home.css"

export default function Home() {
  return (
    <>
<Topbar />
<div className="homeContainer">
<Sidebar />
<Feed />
<Rightbar />
</div>
  </>
  );
}
