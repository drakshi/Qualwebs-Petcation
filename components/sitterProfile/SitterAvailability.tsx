import { useState } from "react";
import Select from "react-select";
import { strings } from "../../public/lang/Strings";
import DayPicker, {DateUtils} from "react-day-picker";
import "react-day-picker/lib/style.css";
import { addDays, addMonths, format, isSameDay } from "date-fns";
import API from "../../api/Api";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface I_PROPS {
  services: {
    service: {
      id: number;
      name: string;
    };
  }[];
}
const api = new API();
export default function     SitterAvailablity({ services }: I_PROPS) {
  const router = useRouter();

  const [type, setType] = useState<0 | 1>(1);
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);
  const [selectedService, setSelectedService] = useState<any>(services[0]);

  function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1);
    }
    return dateArray;
  }

  const getServiceAvailability = () => {
    let data = {
      sitter_id: router.query.id,
      service_id: selectedService.service.id,
      is_available: type,
    };
    api
      .getSitterAvailability(data)
      .then((res) => {
        let dates = res.data.response.map(
          (value) => new Date(value.Timestamp * 1000)
        );

        let data = getDates(new Date(), addMonths(new Date(), 2));
        let newData = data.filter(
          (date) => !dates.find((d) => isSameDay(d, date))
        );

        setDisabledDates(newData);
      })
      .catch((error) => {});
  };


  useEffect(() => {
    getServiceAvailability();
  }, [selectedService, type]);

  return (
    <div className="bg-white main-background">
      <h5 className="font-semibold mb-3 font-20">{strings.Availability}</h5>
      <div className="form-group">
        <Select
          isSearchable={false}
          options={services}
          value={selectedService}
          onChange={setSelectedService}
          getOptionLabel={(option) => option.service.name}
          getOptionValue={(option) => option.service.id.toString()}
        />
      </div>

      <div className="calendar">
        <DayPicker
          className="Selectable"
          numberOfMonths={1}
          fromMonth={new Date()}
          toMonth={addMonths(new Date(), 2)}
          selectedDays={null}
          disabledDays={[
            ...disabledDates,
            {
              before: new Date(),
            },
          ]}
        />
      </div>
      <hr />
      <div className="availability-check">
        <div className="custom-check mb-1">
          <label className="check">
            <input
              type="radio"
              name="sitter"
              onChange={() => setType(1)}
              checked={type == 1}
            />
            <span className="checkmark"></span>
            {strings.Available}
          </label>
        </div>
        <div className="custom-check mb-1">
          <label className="check">
            <input
              onChange={() => setType(0)}
              checked={type == 0}
              type="radio"
              name="sitter"
            />
            <span className="checkmark"></span>
            {strings.Unavailable}
          </label>
        </div>
      </div>
      <div className="mt-2">
        <h6 className="font-semibold font-12 mb-0"></h6>
      </div>
    </div>
  );
}
