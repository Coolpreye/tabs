import React, { useState, useEffect } from 'react';
import { InfoComponent } from './components/InfoComponent';
import { Loader } from './components/Loader';
import { Tabs } from './components/Tabs';
import './Main.css';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCompanies(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  if(loading) {
    return (
      <Loader />
    )
  }

  const { company, dates, duties, title } = companies[value]

  return (
    <React.Fragment>
      <div className="mx-auto w-11/12 max-w-5xl my-14">
        <h2 className="text-2xl sm:text-4xl text-center tracking-wider font-bold text-gray-800">Experience</h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 sm:w-20 bg-clr1 my-3"></div>
          </div>
          <div className="mt-8 lg:flex lg:justify-between">
            <div>
              <Tabs companies={companies} value={value} setValue={setValue} />
            </div>
            <div className="px-6 lg:ml-4 lg:mt-6">
              <InfoComponent company={company} dates={dates} duties={duties} title={title} />
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div className="bg-clr1 text-white py-1 text-xs sm:text-base px-6 sm:px-10 rounded font-semibold hover:bg-blue-300 hover:text-gray-500 shadow-md transition ease-in-out duration-500 cursor-pointer">MORE INFO</div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
