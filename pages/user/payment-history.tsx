import React from "react";
import User from ".";
import EarningTab from "../../components/user/paymentHistory/EarningTab";
import Widthdrawal from "../../components/user/paymentHistory/Widthdrawal";
import { strings } from "../../public/lang/Strings";
import API from "../../api/Api";
import moment from "moment";
import ReactPaginate from "react-paginate";
import usePrevious from "../../components/hoc/usePrevious";
import I_SINGLE_REQUEST_DETAIL from "../../models/requestSitter.interface";

interface IState {
  tab: number;
  params: {
    start_date?: number,
    end_date?: number,
    sort_by: number,
    earning: number,
  },
  transactionData: Transaction,
  currentPage: number,
}

type Transaction = {
  current_page:number;
  total: number;
  data: I_SINGLE_REQUEST_DETAIL[],
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;

}


let api = new API();

export default class PaymentHistory extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = ({
      tab: 1,
      params: {
        sort_by : null,
        earning : null,
      },
      transactionData: null,
      currentPage:1,
    });
    // 1 amount desc, 2 amount asc, 3 drop of date asc
    // 1 completed earninings, 2 pending earninings, 3 cancelled earninings
    this.getTransactionHistory()
    this.handleTabChange = this.handleTabChange.bind(this);
    this.getComponentByIndex = this.getComponentByIndex.bind(this);
    this.getTransactionHistory = this.getTransactionHistory.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSortby = this.handleSortby.bind(this);
  }

  componentDidMount() {

  }

  getTransactionHistory(){
    let param: any = this.state.params
    //param.start_date = String(param.start_date)
   // param.end_date = String(param.end_date)
    api.paymentHistory(param, this.state.currentPage).then((res)=>{
      if(res.data.status==200){
        this.setState({transactionData: res.data.response})
      }else {

      }
    }).catch((error)=>{
      console.log('error is', error)
    })
  }

  handleTabChange = (tab) => {
    this.setState({
      params: {
          ...this.state.params,
        earning: tab,
      },
      currentPage: 1
    },()=>{
      this.getTransactionHistory();
    });
  };

  getComponentByIndex = () => {
    console.log('this.state.params.earning',this.state.params.earning)
    switch (this.state.params.earning ?? 1) {
      case 1:
        return <EarningTab handleSortby={this.handleSortby} data={this.state.transactionData} handleFrom={(val)=> this.handleDate(val,1)} handleTo={(val)=> this.handleDate(val,2)} />;
      case 2:
        return <EarningTab handleSortby={this.handleSortby} data={this.state.transactionData}  handleFrom={(val)=> this.handleDate(val,1)} handleTo={(val)=> this.handleDate(val,2)} />;
      case 3:
        //return <Widthdrawal />;
        return <EarningTab handleSortby={this.handleSortby} data={this.state.transactionData}  handleFrom={(val)=> this.handleDate(val,1)} handleTo={(val)=> this.handleDate(val,2)} />;
    }
  };

  handleSortby(val){
    this.setState({
      params: {
        ...this.state.params,
        sort_by: val.value
      }
    },()=>{
      this.getTransactionHistory();
    });
  }

  handleDate(date, type){
      this.setState({
        params: {
          ...this.state.params,
          [type==1 ? 'start_date':'end_date']: moment(date).format('X')
        }
      },()=>{
        this.getTransactionHistory();
      });
  }

  handlePageChange = (val) => {
    if (val.selected == 0) {
      this.setState({currentPage: 1})
    } else {
      this.setState({currentPage: val.selected + 1})
    }
  };


  render() {
    let {currentPage, transactionData} = this.state;
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
        <div className="bg-white main-background">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 my-auto">
              <div className="payment">
                <h5 className="font-20 mb-0 font-semibold">
                  {strings.PaymentHistory}
                </h5>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 alignment">
              <div className="money-btn">
                <a className="btn btn-primary py-1 px-3">
                  {strings.WithdrawMoney}
                </a>
              </div>
            </div>
          </div>
          <div className="pay-tabs service-tab history-tabs">
            <ul className="nav nav-tabs mb-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className={
                    "nav-link " + (this.state.tab == 1 ? "active" : "")
                  }
                  id="earning-tab"
                  data-toggle="tab"
                  onClick={() => this.handleTabChange(1)}
                  role="tab"
                >
                  {strings.completed}
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={
                    "nav-link " + (this.state.tab == 2 ? "active" : "")
                  }
                  id="pending-tab"
                  data-toggle="tab"
                  onClick={() => this.handleTabChange(2)}
                  href="#pending"
                  role="tab"
                >
                  {strings.Pending}
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={
                    "nav-link " + (this.state.tab == 3 ? "active" : "")
                  }
                  id="withdrawals-tab"
                  data-toggle="tab"
                  href="#withdrawals"
                  onClick={() => this.handleTabChange(3)}
                  role="tab"
                >
                  {strings.cancelled}
                </a>
              </li>

            </ul>
          </div>
          {this.getComponentByIndex()}
        </div>
        <div className="row ">
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
                onPageChange={(val) => this.handlePageChange(val)}
                pageRangeDisplayed={1}
                pageCount={transactionData ? transactionData.total/10:1}
                renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    );
  }
  static getLayout(page) {
    return <User>{page}</User>;
  }
}
