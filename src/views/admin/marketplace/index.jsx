import Banner from "./components/Banner";
import NftCard from "components/card/NftCard";
import SKIP from "assets/img/skip.jpg";

import axios from 'axios';
import React, { useState,useEffect } from "react";
import { RiSecurePaymentFill } from "react-icons/ri";


const SkipMarketplace = () => {
  const [Data , setData] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  
  
  const getData = async()=>{
    await axios.get(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`)
  .then(function (response) {
        setData(response.data)
  }).catch(error => {
    console.log("handlesubmit error for blog get ", error)
  });
  }
  //   const addSkip = async(id)=>{
  //   await axios.post(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`,{
  //     id: id,
  //   })
  // .then(function (response) {

  // }).catch(error => {
  //   console.log("handlesubmit error for blog get ", error)
  // });
  // }

  useEffect(()=>{ 
    getData();
  },[]);
  
  const selectSkip =(id)=>{
      if(selectedCardId!==id){
       setSelectedCardId(id)
      }
      else if(selectedCardId===id){  
      setSelectedCardId(null)
      } 
  }
  const skipAdd =(id)=>{
       console.log("skip ID", id)
               /* selected skip fetch by calling addSkip(id) function*/ 
  }

  return (
    <>
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* Skip cards */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 mt-8">
              {Data.map(skip =>
              <button onClick={() => selectSkip(skip.id)}>
            <NftCard
            title={`${skip.size} Yard Skip`}
            author={`${skip.hire_period_days} day hire period`}
            price={skip.price_before_vat}
            image={SKIP}
            road={skip.allowed_on_road}
            id={skip.id}
            selected = {selectedCardId}
          />
          </button>)}
        </div>
      </div>
      {selectedCardId ? <div className="fixed bottom-0 left-0 right-0 backdrop-blur-xl dark:bg-[#0b14374d] max-w-l h-20 p-2 animate-slideUp z-50 flex flex-row justify-center items-center">
        <button className={`flex flex-row justify-center items-center w-[120px] h-[50px] linear rounded-[10px] bg-gray-800 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-gray-900 dark:hover:bg-brand-300 dark:active:opacity-90`}
        onClick={() => skipAdd(selectedCardId)}>
          <span className="mr-2 " >Continue</span> <RiSecurePaymentFill className="w-[16px] h-[16px] "/>
          </button>
      </div> : <></>}
      
    </div>
    </>
  );
};

export default SkipMarketplace;
