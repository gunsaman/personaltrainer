import React,{useState, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'




export default function BigCalendar() {
    
    
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        showEvents();
    }, [trainings]); 

    const showEvents = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => setTrainings(data))
        .then(_ => console.log(trainings))
        .catch(err => console.error(err))
    };
    
    return (
        <div style={{marginLeft:250, marginRight:50}}>
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            height="80vh"
            initialView="dayGridMonth"
            headerToolbar={{
                left:'prev,next, today',
                center:'title',
                right: 'dayGridMonth, dayGridWeek, dayGridDay'
            }}
            initialView="dayGridMonth"
            events={trainings.map((item) => {
                return {
                title: item.activity + " , "+ item.customer.firstname+" "+item.customer.lastname,
                date: item.date,
                duration: item.duration ,
                

            }
            })
            }
        />
      </div>
    );
}

