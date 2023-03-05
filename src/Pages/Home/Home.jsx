import Header from '../../components/header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./home.css"
// import axios from "axios"


function Home() {
  //DECLARE ALL POSTS HERE
  // const [Posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async ()=> {
  //   const res = await axios.get("/Posts")
  //   console.log(res)
  // }
  // fetchPosts()
  // }, []) 

  return (
    // DO NOT REMOVE THE <></> AS IT WILL PREVENT 
    // REACT TO WORK EFFICIENTLY, YOU WONT BE ABLE TO ADD MULTIPLE COMPONENTS
    
    <>
    <Header/>
    <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home
