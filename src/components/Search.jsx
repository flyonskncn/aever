import Hamburger from "../assets/Hamburger.png"
import search from '../assets/Search.png'
const Search = () => {
  return (
    <div className="flex items-center w-[1053px] h-[56px] bg-[#F2F1F1] border-[2px] border-[#828FBB] rounded-full px-4 py-2 ">
     <img src={Hamburger}/>
      <input
        type="text"
       
        className="flex-1 outline-none px-2"
      />
     
      <img src={search}/>
    </div>
  );
};

export default Search;
