import React, { useState, useEffect } from "react";
import Axios from "axios";

export function CreateEvent() {
  const [values, setValues] = useState({});
  const [calendar, setCalendar] = useState([]);
  const [isEventSaved, setIsEventSaved] = useState();

  const handleEventChanges = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/calendar").then((response) => {
      setCalendar(response.data);
      console.log(response.data);
      console.log("Variavel calendar", calendar);
    });
  }, []);

  const handleSaveEvent = () => {
    const token = "Ac4r1d4d3nuncaf4l84";
    Axios.post(
      "http://localhost:3001/new-event",
      {
        event: values.event,
        date: values.date,
        place: values.place,
        organiser: values.organiser,
        extraInfo: values.extraInfo,
      },
      {
        headers: {
          seuheaderdeautorizacao: token,
        },
      }
    )
      .then((response) => {
        setValues({
          event: "",
          date: "",
          place: "",
          organiser: "",
          extraInfo: "",
        });
        setIsEventSaved(true);
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Erro ao salvar atividade. Verifique o console para mais detalhes."
        );
      });
  };

  return (
    <div className="atividade">
      <div className="eventCard">
        <div className="newEvent">
          {isEventSaved && alert("Atividade salva com sucesso!")}
          <h1>Postar nova Atividade</h1>
          <input
            type="text"
            name="event"
            placeholder="Atividade"
            className="event"
            onChange={handleEventChanges}
            value={values.event}
          />
          <input
            type="date"
            name="date"
            placeholder="Data"
            className="date"
            onChange={handleEventChanges}
            value={values.date}
          />
          <input
            type="text"
            name="place"
            placeholder="Local da atividade"
            className="place"
            onChange={handleEventChanges}
            value={values.place}
          />
          <input
            type="text"
            name="organiser"
            placeholder="Organização/Organizador"
            className="organiser"
            onChange={handleEventChanges}
            value={values.organiser}
          />
          <textarea
            type="text"
            rows="10"
            cols="30"
            name="extraInfo"
            placeholder="Informações/Descrição"
            className="extraInfo"
            onChange={handleEventChanges}
            value={values.extraInfo}
          />
          <button onClick={() => handleSaveEvent()}>Postar atividade</button>
        </div>
      </div>
    </div>
  );
}

// export default CreateEvent;
