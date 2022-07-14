import React, { useEffect } from "react";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { reservationRequests } from "../../../public/appData/AppData";
import ReservationObject from "./ReservationObject";
import MobileReservationObject from "./MobileReservationObject";
import { useState } from "react";
import moment from "moment";
import API from "../../../api/Api";
import I_SITTER_RESERVATION from "../../../models/sitterReservations.interface";
import usePrevious from "../../hoc/usePrevious";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import {strings} from "../../../public/lang/Strings";

const api = new API();
interface IProps {
  type: number;
  reservationFor: string;
}

const ReservationView: React.FC<IProps> = ({
  type,
  reservationFor,
}: IProps) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [reservation, setReservation] = useState<I_SITTER_RESERVATION[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const prevDate = usePrevious(date);
  const prevSearch = usePrevious(searchInput);
  const prevPage = usePrevious(currentPage);

  useEffect(() => {
    setReservation([]);
  }, [router]);

  useEffect(() => {
    setReservation([]);
    setSearchInput("");
    setDate("");
    setCurrentPage(1);
    getReservations();
  }, [reservationFor, type]);

  useEffect(() => {
    if (prevDate != date || prevSearch != searchInput) {
      getReservations();
    }
  }, [date, searchInput]);

  useEffect(() => {
    if (prevPage != currentPage) {
      getReservations();
    }
  }, [currentPage]);

  const onTextChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onDateChange = (day) => {
    setDate(moment(day).format("yyyy-MM-DD"));
  };

  const getReservations = () => {
    let call = null;
    let payload = JSON.stringify({
      keyword: searchInput,
      date: date,
      status: type,
    });

    if (reservationFor == "1") {
      call = api.getSitterReservetions(payload, currentPage);
    } else {
      call = api.getUserReservations(payload, currentPage);
    }

    call
      .then((res) => {
        setReservation(res.data.response.data);
        setTotalPage(res.data.response.last_page);
      })
      .catch((error) => console.log(error));
  };

  const handlePageChange = (val) => {
    if (val.selected == 0) {
      setCurrentPage(1);
    } else {
      setCurrentPage(val.selected + 1);
    }
  };

  const changeRequestStatus = (id, status) => {
    let data = JSON.stringify({
      request_id: id,
      status: status,
    });
    api
      .changeRequestStatus(data)
      .then((json) => {
        getReservations();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Mobile */}
      <div className="d-block d-md-none d-lg-none d-xl-none">
        <div className="row">
          {reservation.length ? reservation.map((value, index) => (
            <MobileReservationObject
              key={index}
              data={value}
              asSitter={reservationFor == "1" ? true : false}
              request={type == 0 && reservationFor == "1" ? true : false}
              changeRequestStatus={(val,id)=>changeRequestStatus(val,id)}
            />
          )):null}
        </div>
      </div>
      <div className="d-none d-md-block d-lg-block d-xl-block">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 col-xl-4 pd-right">
            <div className="client-search">
              <input
                className="form-control"
                type="text"
                id="clients-name"
                onChange={onTextChange}
                value={searchInput}
                placeholder="Search client’s name here"
              />
              <div className="searches">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-search fa-w-16 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4 col-xl-4 pd-right">
            <div className="client-search">
              <div className="form-group mb-0">
                <div
                  className="input-group datepicker1 date"
                  data-date-format="mm-dd-yyyy"
                >
                  <div className="form-control class1">
                    <DayPickerInput
                      inputProps={{
                        style: { border: 0, background: "transparent" },
                        readOnly: true,
                      }}
                      value={date}
                      onDayChange={onDateChange}
                      placeholder="DD/MM/YYYY"
                      format="DD/MM/YYYY"
                    />
                  </div>
                  <span className="input-group-addon">
                    <div className="searches">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="calendar-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-calendar-alt fa-w-14 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
                        />
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block d-lg-block d-xl-block">
        {reservation.length ? reservation.map((value, index) => (
           <ReservationObject
               key={index}
            data={value}
            asSitter={reservationFor == "1" ? true : false}
            request={type == 0 && reservationFor == "1" ? true : false}
               changeRequestStatus={(val,id)=>changeRequestStatus(val,id)}
          />
        )):<>
          <div className="text-center padding">
            <p className="font-13 mb-0 font-italic">{strings.noReservation}</p>
          </div>
        </>}
      </div>
      {totalPage > 1 ? <div className="row ">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <ReactPaginate
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            containerClassName="pagination justify-content-end"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            initialPage={currentPage - 1}
            breakLabel="..."
            forcePage={currentPage - 1}
            nextLabel={false}
            previousLabel={false}
            onPageChange={(val) => handlePageChange(val)}
            pageRangeDisplayed={1}
            pageCount={totalPage}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>:null}
    </>
  );
};

export default ReservationView;
