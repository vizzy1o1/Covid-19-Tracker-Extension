async function report(){
  const indianStates = {
    'Andhra Pradesh': "AP",
    'Arunachal Pradesh': 'AR',
    'Assam': 'AS',
    'Bihar': 'BR',
    'Chhattisgarh': 'CG',
    'Goa': 'GA',
    'Gujarat': 'GJ',
    'Haryana': 'HR',
    'Himachal Pradesh': 'HP',
    'Jharkhand': 'JH',
    'Karnataka': 'KA',
    'Kerala': 'KL',
    'Madhya Pradesh': 'MP',
    'Maharashtra': 'MH',
    'Manipur': 'MN',
    'Meghalaya': 'ML',
    'Mizoram': 'MZ',
    'Nagaland': 'NL',
    'Odisha': 'OD',
    'Punjab': 'PB',
    'Rajasthan': 'RJ',
    'Sikkim': 'SK',
    'Tamil Nadu': 'TN',
    'Telangana': 'TS',
    'Tripura': 'TR',
    'Uttar Pradesh': 'UP',
    'Uttarakhand': 'UK',
    'West Bengal': 'WB'
  };

  const res=await fetch("https://data.covid19india.org/v4/min/data.min.json");
  const record=await res.json();
  console.log(record);
  var b=document.querySelector("#state");
  b.addEventListener("change",function(){
    con
    const key= indianStates[b.value];
    document.querySelector("#con").innerText=record[key].delta7.confirmed;
    document.querySelector("#rec").innerText=record[key].delta7.recovered;
    document.querySelector("#ded").innerText=record[key].delta7.deceased;    
  });
}
report();