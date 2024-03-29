

$(document).ready(function() {
  $('#calendar').evoCalendar({
    language: 'en',
    todayHighlight: 'true',
    theme: 'Royal Navy',
    calendarEvents: [
                      { 
                        name: "New Year",
                        date: "January/01/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        description: 'Weekend',
                      },
                      { 
                        name: "New Year",
                        date: "January/02/2023",
                        type: "holiday",                        
                        color: "blue",
                        description: 'Day off for everybody',
                       
                      },
                      { 
                        name: "Good Friday",
                        date: "April/14/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        fundo: "Day off for everybody",
                      },
                      { 
                        name: "Orthodox Easter",
                        date: "April/16/2023",
                        type: "holiday",
                        color: "blue",
                        description: 'Weekend',
                      },
                      
                      { 
                        name: "2nd Day after Easter",
                        date: "April/17/2023",
                        type: "roholiday",                        
                        color: "red",
                        description: 'We are not off',
                      },
                      { 
                        name: "Memorial Day",
                        date: "May/29/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        description: 'Day off for everybody',
                      },
                      { 
                        name: "Independence Day",
                        date: "July/04/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        description: 'Day off for everybody',
                      },
                      { 
                        name: "Labor Day",
                        date: "September/04/2023",
                        type: "holiday",                        
                        color: "blue",
                        description: 'Day off for everybody',
                       
                      },
                      { 
                        name: "Thanksgiving",
                        date: "November/23/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        description: 'Day off for everybody',
                      },
                      { 
                        name: "Friday after Thanksgiving",
                        date: "November/24/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        description: 'Day off',
                      },
                      { 
                        name: "",
                        date: "November/24/2023",
                        type: "roholiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Fundo are not off',
                      },
                      { 
                        name: "Christmas Day",
                        date: "December/25/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        description: 'Day off for everybody',
                      },
                      { 
                        name: "2nd Day of Christmas",
                        date: "December/26/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "blue",
                        description: 'Day off',
                      },
                      { 
                        name: "",
                        date: "December/26/2023",
                        type: "roholiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Fundo are not off',
                      },

                      { 
                        name: "Unification of the Romanian Principalities",
                        date: "January/23/2023",
                        type: "holiday",                        
                        everyYear: "true",
                        color: "red",
                        description: 'We are not off',        
                      },
                      { 
                        name: "Unification of the Romanian Principalities",
                        date: "January/24/2023",
                        type: "holiday",                        
                        everyYear: "true",
                        color: "red",
                        description: 'We are not off',        
                      },  

                      { 
                        name: "Lose some weight",
                        date: "February/10/2023",
                        type: "party",  
                        color: "purple",
                        description: 'Office Potluck',
                        link: "https://poproxanaalexandra.github.io/Calendar_v2/party.html?id=0"
                        
                      },
                      { 
                        name: "Martisor tea/coffee",
                        date: "March/10/2023",
                        type: "party",                        
                        color: "purple",
                        description: 'Restaurant ROD',
                      },
                      { 
                        name: "Easter Dinner",
                        date: "April/08/2023",
                        type: "party",                        
                        color: "purple",
                        description: 'Hotel Iza',
                      },
                      { 
                        name: "Bianca's Pre Birthday Party",
                        date: "May/12/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: 'Roast the boss',
                      },
                      { 
                        name: "Teambuilding",
                        date: "August/25/2023",
                        type: "party",                        
                        color: "purple",
                        description: 'Party, fun, pool',
                      },
                      { 
                        name: "Teambuilding",
                        date: "August/26/2023",
                        type: "party",                        
                        color: "purple",
                        description: 'Party, fun, pool',
                      },
                      { 
                        name: "Teambuilding",
                        date: "August/27/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: '',
                      },
                      { 
                        name: "Dress to impress",
                        date: "July/07/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: '',
                      }, 
                      { 
                        name: "Cojocna",
                        date: "July/04/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: 'Pool and sunbath at Cojocna',
                      },
          

                      { 
                        name: "Halloween Party",
                        date: "October/28/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: '',
                      },
                      { 
                        name: "Thanksgiving Potluck",
                        date: "November/22/2023",
                        type: "party",                        
                        everyYear: "true",
                        color: "purple",
                        description: '',
                      },
                      { 
                        name: "Christmas Party",
                        date: "December/09/2023",
                        type: "party",                     
                        color: "purple",
                        description: 'Hotel Iza',
                      },
                      
                      { 
                        name: "Romanian Labor Day",
                        date: "May/01/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "red",
                        description: 'We are not off',
                      },
                      { 
                        name: "Children's Day",
                        date: "June/01/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "red",
                        description: 'We are not off',
                      },
                      { 
                        name: "Pentecost",
                        date: "June/05/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "red",
                        description: 'We are not off',
                      },
                      { 
                        name: "The Assumption of Mary",
                        date: "August/15/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "red",
                        description: 'We are not off',
                      },
                      { 
                        name: "St. Andrew",
                        date: "November/30/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "red",
                        description: 'We are not off',
                      },
                      { 
                        name: "Great Union Day - Romanian National Day",
                        date: "December/01/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "blue",
                        fundo: "Fundo are off"
                      },
                      { 
                        name: "",
                        date: "December/01/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Not off for the rest of the departments',
                      },
                      { 
                        name: "Seminar for stock market investments",
                        date: "February/15/2023",
                        type: "holiday",
                        color: "black",
                        description: 'Seminar for management team',
                        fundo: "seminarforstockinvestment.rsvpify.com"
                      },
                      { 
                        name: "Seminar for money management",
                        date: "March/06/2023",
                        type: "holiday",
                        color: "black",
                        description: 'Conference room - ABC Incubator',
                        fundo: "All departaments are invited"
                      },
                      { 
                        name: "Insurance policies and life insurance policies",
                        date: "April/18/2023",
                        type: "holiday",
                        color: "black",
                        description: 'Conference room - ABC Incubator',
                        fundo: "All departaments are invited"
                      },
                    ]
  })
})





var parties = {};
    async function populatePartiesList() {
      let url = "https://calendar-78bbb-default-rtdb.europe-west1.firebasedatabase.app/"
      var response = await fetch(url + ".json");
      parties = await response.json();
     
      let party = document.getElementById('select');
    for (let i in parties.parties) {
       party.innerHTML +=
      `<a class="dropdown-item" href="https://poproxanaalexandra.github.io/Calendar_v2/party.html?id=${i}" style="font-size: 1.5rem"> ${parties.parties[i].name} </a>`
          }
      //* de pus aici in # linkul pentru fiecare party in parte
      //* de modificat culori 
  }
 function depopulatePartiesList() {
  let party = document.getElementById('select');
    for (let i in parties.parties) {
       party.innerHTML ="";
  }
}


