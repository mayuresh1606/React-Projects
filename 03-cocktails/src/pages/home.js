import {Navbar} from '../navbar';
import {Searchbar} from '../searchbar';
import {Cocktails} from '../cocktails';
import {Loading} from '../loading';
import { useGlobalContext } from '../context';

function Home() {
  const{loading} = useGlobalContext();
  return (
    <>
      <Searchbar />
      {loading?<Loading/>:<Cocktails />}
    </>
  );
}

export default Home;
