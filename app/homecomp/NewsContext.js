'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const News = () => {
  const [Data, setData] = useState();

  var apiKey = 'd560fb3300d94b3389b9cfcbb63702cf';
  var type = 'crypto';
  var date = '2023-07-01';
  var sortBy = 'popularity';
  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;
  
  const fetchData = async () => {
    await axios
    .get(url)
    .then((res) => setData(res.data.articles))
    };

    useEffect(() =>{
        fetchData();
    }, []);



  return (
    <div>
        <div className='max-w-7xl mx-auto px-5 mb-3'>
          <h2 className='text-black text-3xl font-semibold sm:text-4xl'>News</h2> 
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8'>
          {Data? Data.slice(0,6).map((items,index)=>
            <>
              <div className="py-14">
                {/* <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                  <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3"> */}
                    <div
                      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img className="rounded-t-lg px-5 py-2"  src={items.urlToImage} alt="step3"/>
                      </a>
                        <div className="p-5">
                          <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {items.title} </h5>
                          </a>
                          <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Big case study</div>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{items.description}</p>
                          <a href={items.url}
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                    </div>

                  {/* </div>
                </div> */}
              </div>
            </> 
            
        ): 
        "Loading..."}
            </div>
          </div>
      </div>
  );
};

export default News;
