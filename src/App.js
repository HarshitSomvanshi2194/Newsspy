// Desc: Main App component
import Stories from './stories';
import Search from './search';
import Pagination from './pagination';
import './App.css';

// import data from './data.json';

const App = () =>{

  
  // console.log(data);
  return (
    <>
   
    <Search />
    <Pagination />
    <Stories />
    </>
  );
};

export default App
