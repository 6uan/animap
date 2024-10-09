import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mx-auto h-20 w-full border-b-2 border-black border-opacity-15 bg-[#5b6f73] px-40">
      <Link to="/">
        <div className="flex h-20 justify-center">
          <div className="bg-a_upper h-20 w-16 bg-[length:92px_92px] bg-center bg-no-repeat" />
          <div className="bg-n_lower h-20 w-14 bg-[length:65px] bg-center bg-no-repeat" />
          <div className="bg-i_lower ml-[-5px] mt-2 h-20 w-10 bg-[length:60px] bg-center bg-no-repeat" />
          <div className="bg-m_lower h-20 w-14 bg-[length:65px] bg-center bg-no-repeat" />
          <div className="bg-a_lower ml-1 mt-1 h-20 w-12 bg-[length:70px] bg-center bg-no-repeat" />
          <div className="bg-p_lower ml-[-3px] h-20 w-14 bg-[length:70px] bg-center bg-no-repeat" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
