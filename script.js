

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
                        color: "red",
                        description: 'Weekend',
                      },
                      { 
                        name: "New Year",
                        date: "January/02/2023",
                        type: "holiday",                        
                        color: "red",
                        description: 'Day off',
                       
                      },
                      { 
                        name: "Good Friday",
                        date: "April/14/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        fundo: "Fundo off",
                      },
                      { 
                        name: "Orthodox Easter",
                        date: "April/16/2023",
                        type: "holiday",
                        color: "red",
                        description: 'Weekend',
                      },
                      { 
                        name: "Orthodox Easter",
                        date: "April/17/2023",
                        type: "holiday",
                        color: "red",
                        description: 'Day off',
                      },
                      { 
                        name: "",
                        date: "April/17/2023",
                        type: "roholiday",                        
                        color: "yellow",
                        description: 'Fundo are not off',
                      },
                      { 
                        name: "Memorial Day",
                        date: "May/29/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Day off',
                      },
                      { 
                        name: "Independence Day",
                        date: "July/04/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Day off',
                      },
                      { 
                        name: "Thanksgiving",
                        date: "November/23/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Day off',
                      },
                      { 
                        name: "Friday after Thanksgiving",
                        date: "November/24/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Day off',
                      },
                      { 
                        name: "",
                        date: "November/24/2023",
                        type: "roholiday",
                        everyYear: "true",
                        color: "yellow",
                        description: 'Fundo are not off',
                      },
                      { 
                        name: "Christmas Day",
                        date: "December/25/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Day off',
                      },
                      { 
                        name: "2nd Day of Christmas",
                        date: "December/26/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "red",
                        description: 'Day off',
                      },
                      { 
                        name: "",
                        date: "December/26/2023",
                        type: "roholiday",
                        everyYear: "true",
                        color: "yellow",
                        description: 'Fundo are not off',
                      },

                      { 
                        name: "Unification of the Romanian Principalities",
                        date: "January/23/2023",
                        type: "holiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'We are not off',        
                      },
                      { 
                        name: "Unification of the Romanian Principalities",
                        date: "January/24/2023",
                        type: "holiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'We are not off',        
                      },  

                      { 
                        name: "Lose some weight",
                        date: "February/10/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: 'Office Potluck',
                      },
                      { 
                        name: "Martisor tea/coffee",
                        date: "March/01/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: '',
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
                        name: "Summer Party",
                        date: "June/16/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: '',
                      },
                      { 
                        name: "Dress to impress",
                        date: "July/03/2023",
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
                        name: "Pool Party",
                        date: "August/20/2023",
                        type: "party",                        
                        
                        color: "purple",
                        description: '',
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
                        name: "",
                        date: "April/14/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'Not off for the rest of the departments',
                      },
                      { 
                        name: "Romanian Labor Day",
                        date: "May/01/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'We are not off',
                      },
                      { 
                        name: "Children's Day",
                        date: "June/01/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'We are not off',
                      },
                      { 
                        name: "Pentecost",
                        date: "June/05/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'We are not off',
                      },
                      { 
                        name: "The Assumption of Mary",
                        date: "August/15/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'We are not off',
                      },
                      { 
                        name: "St. Andrew",
                        date: "November/30/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "yellow",
                        description: 'We are not off',
                      },
                      { 
                        name: "Great Union Day - Romanian National Day",
                        date: "December/01/2023",
                        type: "roholiday",                        
                        everyYear: "true",
                        color: "red",
                        fundo: "Fundo are off"
                      },
                      { 
                        name: "",
                        date: "December/01/2023",
                        type: "holiday",
                        everyYear: "true",
                        color: "yellow",
                        description: 'Not off for the rest of the departments',
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


