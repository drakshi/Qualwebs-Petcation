import React from "react";
import User from ".";
import "react-day-picker/lib/style.css";
import { strings } from "../../public/lang/Strings";
import {BankData, CardData} from "../../models/BankCardAccountDetails.interface";
import Loader from "../../components/common/Loader";
import {errorOptions, gender, pet, successOptions} from "../../public/appData/AppData";
import API from "../../api/Api";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Autocomplete from "react-google-autocomplete";
import {FailureOptions, GOOGLE_PLACES_API, SuccessOptions} from "../../api/Constants";
import Select from "react-select";




const api = new API();
const stripePromise = loadStripe('pk_test_VdRWFEURPn6P4Gsqt9aNA3Sz009Yr1BvtM');


interface IState {
  tab: number;
  addCard: CardData,
  addBank: BankData,
  bankData?: any,
  cardData?: any,
  loading: boolean,
  setError?:any,
  successOptions?:any
  errorOptions?:any,
  selectedDate: any,
  errors?: any,
  snackMessage: string,
}
//
// if(error.response.data && error.response.data.message){
//   openError(error.response.data.message);
// }
export default class PaymentAndPayouts extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      addCard: {
        is_default:0
      },
      addBank: {
        bank_name: "",
        branch_name: "",
        bank_code : "",
        branch_code : "",
        account_number : "",
        account_holder_name: "",
        gender : "male",
        routing_number: "",
        address_kana: {
          country: "",
          postal_code: "",
          state: "",
          city: "",
          town: "",
          line1: "",
          line2: ""
        },
        address_kanji: {
          country: "",
          postal_code: "",
          state: "",
          city: "",
          town: "",
          line1: "",
          line2: ""
        },
        phone_number: "+81798631222",
        is_default : 1,
        account_type : 1,
        bank_country: "JP"
      },
      errors:{},
      cardData:[],
      loading: false,
      setError:{},
      successOptions:successOptions,
      errorOptions:errorOptions,
      selectedDate: null,
      snackMessage: null
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleAddCardChange = this.handleAddCardChange.bind(this);
    this.handleExpiryDateSelection = this.handleExpiryDateSelection.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.getCards = this.getCards.bind(this);
    this.CardView = this.CardView.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.CheckoutForm = this.CheckoutForm.bind(this);
    this.BankView = this.BankView.bind(this);
    this.getAddressDetail = this.getAddressDetail.bind(this);
    this.handleBankDetailChange = this.handleBankDetailChange.bind(this);
    this.handleAddBank = this.handleAddBank.bind(this);
    this.getBankAccounts = this.getBankAccounts.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.makeCardDefault = this.makeCardDefault.bind(this);
    this.makeBankDefault = this.makeBankDefault.bind(this);
  }

  componentDidMount(): void {
    this.getCards();
    this.getBankAccounts();
    console.log('props data ia', this.props)
  }

  //Handling api calling
  getCards(){
    this.setState({loading: true})

    api
        .getAllCard()
        .then((json) => {
         // this.state.successOptions("Saved");
          this.setState({cardData: json.data.response})
          this.setState({loading: false})
        })
        .catch((error) => {
          this.setState({loading: false})
        });
  }

  getBankAccounts(){
    this.setState({loading: true})
    api
        .getAllBankAccount()
        .then((json) => {
        //  this.state.successOptions("Saved");
          this.setState({bankData: json.data.response})
          this.setState({loading: false})
        })
        .catch((error) => {
          this.setState({loading: false})
        });
  }

  //Delete selected card
  deleteCard(val){
    confirmAlert({
      title: 'Delete selected card?',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.setState({loading: true})
            api
                .deleteCard({card_id:val.id})
                .then((json) => {
                  this.getCards()
                //  this.state.successOptions("Saved");
                  this.setState({loading: false})
                })
                .catch((error) => {
                  this.setState({loading: false})
                });
          }
        },
        {
          label: 'No',
          onClick: () => {
          }
        }
      ]
    });
  }

  //Delete selected bankAccount
  deleteAccount(val){
    confirmAlert({
      title: 'Delete selected account?',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.setState({loading: true})

            api
                .deleteBankAccount(val)
                .then((json) => {
                  this.getBankAccounts()
                  //this.state.successOptions("Deleted");
                  this.setState({loading: false})
                })
                .catch((error) => {
                  console.log('error is ', error)
                  this.setState({loading: false})
                });
          }
        },
        {
          label: 'No',
          onClick: () => {
          }
        }
      ]
    });
  }


  //Switching between bank/card tabs
  handleTabChange = (value) => {
    this.setState({
      tab: value,
    });
  };

  //Handling date picker selelction
  handleExpiryDateSelection(val) {
    this.setState({
      addCard:{
        ...this.state.addCard,
        expiry_month : val.getMonth() + 1,
        expiry_year: val.getFullYear()
      },
      selectedDate: null
    })
  };

  makeCardDefault = (card_id) => {
    this.setState({loading: true})
    api
        .markCardAsDefault({card_id})
        .then((json) => {
          //this.state.successOptions("Saved");
          this.getCards()
          this.setState({loading: false})
        })
        .catch((error) => {
          this.setState({loading: false})
        });
  }

  makeBankDefault = (bank_account_id) => {
    this.setState({loading: true})
    api
        .makeBankAsDefault({bank_account_id})
        .then((json) => {
          //this.state.successOptions("Saved");
          this.getBankAccounts()
          this.setState({loading: false})
        })
        .catch((error) => {
          this.setState({loading: false})
        });
  }

  //Single card view
  CardView(){
    const {cardData} = this.state;
    return(
        <>
          <h6 className="font-semibold mb-3">Added Cards</h6>
          <div className="row">
            {cardData.map((item,index)=> <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div className="card-info">
                <div className="carousel__content">
                  <div className="review-details d-flex justify-content-between">
                    <div>
                      <img src="/images/chip.png"/>
                    </div>
                    <div className="card-drop">
                      {item.is_default === 1 && <div style={{height: 10, width:10, borderRadius: 5, backgroundColor: '#00ff00'}}/>}
                      <a
                          href="#"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                      >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ellipsis-v"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                            className="svg-inline--fa fa-ellipsis-v fa-w-6 fa-2x"
                        >
                          <path
                              fill="currentColor"
                              d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                          />
                        </svg>
                      </a>
                      <div
                          className="dropdown-menu animate slideIn"
                          aria-labelledby="navbarDropdown"
                      >
                        {item.is_default == 0 && <a
                            className="dropdown-item u-blue-color"
                            href="#"
                            onClick={()=> this.makeCardDefault(item.id)}
                        >
                          {strings.SetDefault}
                        </a>}
                        <a
                            className="dropdown-item u-blue-color"
                            href="#"
                            onClick={()=> this.deleteCard(item)}
                        >
                          {strings.DeleteCard}
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="card-number">
                    <span>****</span> <span>****</span> <span>****</span>
                    <span>{item.last4}</span>
                  </div>
                  <div className="review-details">
                    <div className="card-holder-info">
                      <p className="mb-0">Expiry Date</p>
                      <h6 className="mb-0">{item.exp_month}/{item.exp_year}</h6>
                    </div>
                    <div>
                      {item.brand==='Visa' ? <img src="/images/visa.png"/>:<img src="/images/master-card.png"/>}
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
          </div>
          </>
    )
  }

  //No card view message
  NoCardView(props){
    return(
        <>
          <div className="text-center padding">
            <p className="font-12 mb-0 font-italic">{props.type===1 ? strings.noCardAddedTitle:strings.noBankAddedTitle}</p>
            <p className="font-12 mb-0  font-italic">{props.type===1 ?  strings.addCardUsingForm:strings.addBankUsingForm}</p>
          </div>
        </>
    )
  }

  getAddressDetail(place, type){
    let address = place.address_components
    let length = address.length
    let objc ={
      country: 'JP',
      state: address[length-2].long_name.replace(/[^a-zA-Z ]/g, ""),
      city: address[length-3].long_name.replace(/[^a-zA-Z ]/g, ""),
      town: address[2].long_name.replace(/[^a-zA-Z ]/g, ""),
      line1: address[0].long_name.replace(/[^a-zA-Z ]/g, ""),
      line2: address[1].long_name.replace(/[^a-zA-Z ]/g, ""),
      postal_code: '',
    }

if(type===1){
  this.setState({
    addBank: {
      ...this.state.addBank,
      ['address_kana']:objc,
    }
  })
}else{
  this.setState({
    addBank: {
      ...this.state.addBank,
      ['address_kanji']:objc
    }
  })
}


  }

  //Bank view
  BankView(){
    const {addBank} = this.state;
    return(
        <div className="bg-white main-background">
          <div className="service-title">
            <h5 className="font-20 font-semibold mb-3">
              {strings.Addnewbankaccount}
            </h5>
          </div>
          <form>
            {/*<div className="row">*/}
            {/*  <div className="col-sm-3">*/}
            {/*    <div className="account-type">*/}
            {/*      <p className="font-14 mb-0">{strings.Typeofaccount}</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-sm-9 service-charges mt-0">*/}
            {/*    <div className="booking-for ml-0">*/}
            {/*      <div className="custom-check mb-2">*/}
            {/*        <label className="check ">*/}
            {/*          <input checked={addBank.account_type==1} onChange={()=>this.setState({addBank:{...addBank,['account_type']:1}})} type="radio" name="is_name1" />*/}
            {/*          <span className="checkmark" />*/}
            {/*          {strings.PersonalAccount}*/}
            {/*        </label>*/}
            {/*      </div>*/}
            {/*      <div className="custom-check mb-2">*/}
            {/*        <label className="check ">*/}
            {/*          <input checked={addBank.account_type==2} onChange={()=>this.setState({addBank:{...addBank,['account_type']:2}})} type="radio" name="is_name1" />*/}
            {/*          <span className="checkmark" />*/}
            {/*          {strings.BusinessAccount}*/}
            {/*        </label>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="row banking-form">
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="category-selection charge-select">
                    <label>{strings.BankCountry}</label>
                    <input
                        disabled={true}
                        className="form-control"
                        value='Japan'
                        type="text"
                        id="holder-name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    <label>{strings.BankCurrency}</label>
                    <input
                        disabled={true}
                        className="form-control"
                        value='JPY'
                        type="text"
                        id="holder-name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    {!this.state.errors.bank_name && <label>{strings.BankName}</label>}
                   {this.state.errors.bank_name && <label className={"error-text"}>
                     {this.state.errors.bank_name}
                    </label>}
                    <input
                        className={"form-control invalid"}
                        placeholder={strings.BankNameHere}
                        name={"bank_name"}
                        value={addBank.bank_name}
                        onChange={this.handleBankDetailChange}
                        type="text"
                        id="bank_name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    {!this.state.errors.bank_code && <label>{strings.BankCode}</label>}
                    {this.state.errors.bank_code && <label className={"error-text"}>
                      {this.state.errors.bank_code}
                    </label>}
                    <input
                        className={"form-control"}
                        placeholder={strings.BankCode}
                        name={"bank_code"}
                        value={addBank.bank_code}
                        onChange={this.handleBankDetailChange}
                        type="text"
                        id="bank_code"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    {!this.state.errors.branch_name && <label>{strings.BranchName}</label>}
                    {this.state.errors.branch_name && <label className={"error-text"}>
                      {this.state.errors.branch_name}
                    </label>}
                    <input
                        className={"form-control"}
                        placeholder={strings.BranchName}
                        name={"branch_name"}
                        value={addBank.branch_name}
                        onChange={this.handleBankDetailChange}
                        type="text"
                        id="branch_name"
                    />
                  </div>
                </div>

                  <div className="form-group">
                    {!this.state.errors.branch_code && <label>{strings.BranchCode}</label>}
                    {this.state.errors.branch_code && <label className={"error-text"}>
                      {this.state.errors.branch_code}
                    </label>}
                    <input
                        className={"form-control"}
                        placeholder="Enter bank branch code here"
                        type="text"
                        id="branch_code"
                        name="branch_code"
                        onChange={this.handleBankDetailChange}
                    />
                  </div>


                  <div className="form-group">
                    {!this.state.errors.account_holder_name && <label>{strings.AccountHolderName}</label>}
                    {this.state.errors.account_holder_name && <label className={"error-text"}>
                      {this.state.errors.account_holder_name}
                    </label>}
                    <input
                        className={"form-control"}
                        placeholder={strings.AccountHolderNameHere}
                        type="text"
                        id="account_holder_name"
                        name="account_holder_name"
                        onChange={this.handleBankDetailChange}
                        value={addBank.account_holder_name}
                    />
                  </div>

                <div className="form-group">
                  <div className="category-selection charge-select">
                    <label>{strings.Gender}</label>
                    <Select
                        value={addBank.gender==='male' ? { label: "Male", value: 0 }:{ label: "Female", value: 1 }}
                        onChange={(val)=> {
                          this.setState({addBank:{...addBank, ['gender']:val.value===0 ? 'male':'female'}})}}
                        options={gender}
                        isSearchable={false}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    {!this.state.errors.account_number && <label>{strings.AccountNumber}</label>}
                    {this.state.errors.account_number && <label className={"error-text"}>
                      {this.state.errors.account_number}
                    </label>}
                    <input
                        className={"form-control"}
                        placeholder={strings.EnterAccountNumber}
                        id="account_number"
                        name="account_number"
                        value={addBank.account_number}
                        onChange={this.handleBankDetailChange}
                        type={"number"}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="category-selection charge-select">
                    {!this.state.errors.routing_number && <label>{strings.RountingNumber}</label>}
                    {this.state.errors.routing_number && <label className={"error-text"}>
                      {this.state.errors.routing_number}
                    </label>}
                    <input
                        className={"form-control"}
                        placeholder={strings.EnterRoutingNumber}
                        id="routing_number"
                        name="routing_number"
                        value={addBank.routing_number}
                        onChange={this.handleBankDetailChange}
                    />
                  </div>
                </div>
                <div className="location-details">

                  {!this.state.errors.address_kana && <label>{strings.locationKana}</label>}
                  {this.state.errors.address_kana && <label className={"error-text"}>
                    {this.state.errors.address_kana}
                  </label>}
                  <div className="location-inner-details">
                    <div className="d-flex justify-content-between">
                      <div>
                        <Autocomplete
                            className={"form-control border-0 p-0"}
                            apiKey={GOOGLE_PLACES_API}
                            onPlaceSelected={(place) => {this.getAddressDetail(place,1)}}
                            options={{
                              types: ["address"],
                              componentRestrictions: { country: "jp"},
                            }}
                            language={'ja'}
                        />

                      </div>
                      <div className="map-pin">
                        <a href="#">
                          <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="map-marker-alt"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x"
                          >
                            <path
                                fill="currentColor"
                                d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"row"}>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Country</label>
                      <input
                          className={"form-control"}
                          placeholder={'country'}
                          id="country"
                          name="country"
                          value={addBank.address_kana.country}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kana.country = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>State</label>
                      <input
                          className={"form-control"}
                          placeholder={'state'}
                          id="state"
                          name="state"
                          value={addBank.address_kana.state}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kana.state = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                </div>
                <div className={"row"}>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>City</label>
                      <input
                          className={"form-control"}
                          placeholder={'city'}
                          id="city"
                          name="city"
                          value={addBank.address_kana.city}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kana.city = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Town</label>
                      <input
                          className={"form-control"}
                          placeholder={'town'}
                          id="town"
                          name="town"
                          value={addBank.address_kana.town}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kana.town = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                </div>
                <div className={"row"}>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Line 1</label>
                      <input
                          className={"form-control"}
                          placeholder={'line 1'}
                          id="line1"
                          name="line1"
                          value={addBank.address_kana.line1}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kana.line1 = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Line 2</label>
                      <input
                          className={"form-control"}
                          placeholder={'line 2'}
                          id="line2"
                          name="line2"
                          value={addBank.address_kana.line2}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kana.line2 = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                </div>

                <div className="location-details">
                  {!this.state.errors.address_kanji && <label>{strings.locationKanji}</label>}
                  {this.state.errors.address_kanji && <label className={"error-text"}>
                    {this.state.errors.address_kana}
                  </label>}
                  <div className="location-inner-details">
                    <div className="d-flex justify-content-between">
                      <div>
                        <Autocomplete
                            className={"form-control border-0 p-0"}
                            apiKey={GOOGLE_PLACES_API}
                            onPlaceSelected={(place) => {this.getAddressDetail(place,2)}}
                            options={{
                              types: ["address"],
                              componentRestrictions: { country: "jp"},
                            }}
                            language={'ja'}
                        />

                      </div>
                      <div className="map-pin">
                        <a href="#">
                          <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="map-marker-alt"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x"
                          >
                            <path
                                fill="currentColor"
                                d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"row"}>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Country</label>
                      <input
                          className={"form-control"}
                          placeholder={'country'}
                          id="country"
                          name="country"
                          value={addBank.address_kanji.country}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kanji.country = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>State</label>
                      <input
                          className={"form-control"}
                          placeholder={'state'}
                          id="state"
                          name="state"
                          value={addBank.address_kanji.state}
                          onChange={(e)=> {
                            let data = addBank;

                            data.address_kanji.state = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                </div>
                <div className={"row"}>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>City</label>
                      <input
                          className={"form-control"}
                          placeholder={'city'}
                          id="city"
                          name="city"
                          value={addBank.address_kanji.city}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kanji.city = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Town</label>
                      <input
                          className={"form-control"}
                          placeholder={'town'}
                          id="town"
                          name="town"
                          value={addBank.address_kanji.town}
                          onChange={(e)=> {
                            let data = addBank;

                            data.address_kanji.town = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                </div>
                <div className={"row"}>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Line 1</label>
                      <input
                          className={"form-control"}
                          placeholder={'line 1'}
                          id="line1"
                          name="line1"
                          value={addBank.address_kanji.line1}
                          onChange={(e)=> {
                            let data = addBank;

                            data.address_kanji.line1 = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                  <div className="form-group col-6">
                    <div className="category-selection charge-select mt-3">
                      <label>Line 2</label>
                      <input
                          className={"form-control"}
                          placeholder={'line 2'}
                          id="line2"
                          name="line2"
                          value={addBank.address_kanji.line2}
                          onChange={(e)=> {
                            let data = addBank;
                            data.address_kanji.line2 = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                          type={"text"}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="category-selection charge-select mt-3">
                    {!this.state.errors.postal_code && <label>{strings.postalCode}</label>}
                    {this.state.errors.postal_code && <label className={"error-text"}>
                      {this.state.errors.postal_code}
                    </label>}
                    <input
                        className={"form-control"}
                        placeholder={strings.postalCode}
                        id="postal_code"
                        name="postal_code"
                        value={addBank.address_kanji.postal_code}
                        onChange={(e)=> {
                          let data = addBank;
                          data.address_kana.postal_code = e.target.value;
                          data.address_kanji.postal_code = e.target.value;
                            this.setState({
                              addBank: data
                            })
                          }}
                        type={"number"}
                    />
                  </div>
                </div>
              </div>

            </div>
            <div className="add-card alignment">
              <a href="http://159.65.142.31/petcation-design/payment-payouts(added-banking).html">
                <button onClick={(e:any)=>this.handleAddBank(e)} className="btn btn-primary">
                  {strings.Addnewaccount}
                </button>
              </a>
            </div>
          </form>
        </div>
    )
  }

  //Handling card value change
  handleAddCardChange(e){
    this.setState({
      addCard:{
          ...this.state.addCard,
        [e.target.name] : e.target.value
      }
    })
  }

  handleBankDetailChange(e){
    this.setState({
      addBank:{
        ...this.state.addBank,
        [e.target.name] : e.target.value
      }
    })
  }

  //Api calling for add card
  handleAddCard = (data) => {

    this.setState({loading: true})
    api
        .addNewCard(data)
        .then((json) => {
          if(json.data && json.data.status===200){
            this.getCards()
            this.setState({addCard: {
                is_default:0
              }})
          //  this.state.successOptions(json.data.message);
          }else {
            alert(json.data.message)
           // this.state.errorOptions(json.data.message);
          }
          this.setState({loading: false})
        })
        .catch((error) => {

          this.setState({loading: false})
        });
  }

  //Api calling for add Bank details
   handleAddBank = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const {addBank} = this.state;
    let error:any = {};
    let count = 0
    if(!addBank.bank_name){
      error.bank_name = strings.enterBankName;
      count += 1;
    }

    if(!addBank.bank_code){
      error.bank_code = strings.bankCode;
      count += 1;
    }

    if(!addBank.branch_name){
      error.branch_name = strings.branchName;
      count += 1;
    }

    if(!addBank.branch_code){
      error.branch_code = strings.branchCode;
      count += 1;
    }

    if(!addBank.account_holder_name){
      error.account_holder_name = strings.accountHolderName;
      count += 1;
    }

     if(!addBank.account_number){
      error.account_number = strings.accountNumber;
       count += 1;
    }

    if(!addBank.routing_number){
      error.routing_number = strings.routingNumber;
      count += 1;
    }

    if(!addBank.address_kana.city){
      error.address_kana = strings.enterLocation;
      count += 1;
    }

    if(!addBank.address_kanji.city){
      error.address_kanji = strings.enterLocation;
      count += 1;
    }

    if(!addBank.address_kana.postal_code){
      error.postal_code = strings.enterZipCode;
      count += 1;
    }

    this.setState({errors: error})
    if(count !== 0){
      return
    }
      let that = this;
      this.setState({
        errors: {},
      });
      let data = JSON.stringify(this.state.addBank);
      api
          .addNewBankAccount(data)
          .then((json) => {
            console.log('json reponse is', json)
            if(json.data.status==200) {
              this.getBankAccounts();
              this.setState({
                addBank: {
                  bank_name: "",
                  branch_name: "",
                  bank_code: "",
                  branch_code: "",
                  account_number: "",
                  account_holder_name: "",
                  gender: "male",
                  routing_number: "",
                  address_kana: {
                    country: "",
                    postal_code: "",
                    state: "",
                    city: "",
                    town: "",
                    line1: "",
                    line2: ""
                  },
                  address_kanji: {
                    country: "",
                    postal_code: "",
                    state: "",
                    city: "",
                    town: "",
                    line1: "",
                    line2: ""
                  },
                  phone_number: "81798631222",
                  is_default: 1,
                  account_type: 1,
                  bank_country: "JP"
                }
              })
            }else {
              alert(JSON.stringify(json.data.message))
            }
          })
          .catch((error) => {
            if(error.data && error.data.message){
              alert(JSON.stringify(error.data.message))
            }
            console.log(error);
          });

  };

  //Stripe payment view
  CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (elements == null) {
        return;
      }

      let cardDetail = await stripe.createToken(elements.getElement(CardElement)).then((token)=>{
        return  token.token
      });

      const cardElement = elements.getElement(CardElement);

     if(cardDetail) {
        let param = {
          nonce: {
            id: cardDetail.id,
            card: {
              id: cardDetail.card.id,
              last4: cardDetail.card.last4,
              exp_month: cardDetail.card.exp_month,
              exp_year: cardDetail.card.exp_year
            }
          },
          is_default: this.state.addCard.is_default
        }
        this.handleAddCard(param);
        cardElement.clear()
      }
    };

    return (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <div className="add-card alignment">
            <button type={"submit"} disabled={!stripe || !elements} onClick={this.handleAddCard} className="btn btn-primary">{strings.Addcard}</button>
          </div>
        </form>
    );
  };


  render() {
    const {cardData, loading, addCard, bankData} = this.state;

    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
        <div className="bg-white main-background  mb-1">
          <div className="payment d-none d-md-block d-lg-block d-xl-block">
            <h5 className="font-20 font-semibold mb-4">
              {strings.PaymentsAndpayouts}
            </h5>
          </div>
          <div className="d-none d-md-block d-lg-block d-xl-block">
            <div className="pay-tabs">
              <ul className="nav nav-tabs mb-0" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    onClick={() => this.handleTabChange(1)}
                    className={
                      "nav-link" + (this.state.tab == 1 ? " active" : "")
                    }
                    id="cards-tab"
                    href="#"
                  >
                    {strings.Cards}
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    onClick={() => this.handleTabChange(2)}
                    href="#"
                    className={
                      "nav-link" + (this.state.tab == 2 ? " active" : "")
                    }
                    id="banking-tab"
                  >
                    {strings.BankingInfo}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {loading && <Loader/>}
          {this.state.tab == 1 ? (
            <div className="tab-pane">
              <div className="added-cards">
                {console.log('card data is', cardData)}
                {cardData.length > 0 && <this.CardView/>}
                {cardData.length === 0 && <this.NoCardView type={1}/>}
              </div>
            </div>
          ) : (
            <div className="tab-pane">
              <div className="added-cards">
                <h5 className="font-semibold mb-3">{strings.addedBankAccount}</h5>
                {bankData && bankData.map((item)=><div className="row p-2">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-3 my-auto d-none d-md-block d-lg-block d-xl-block">
                    <p className="text-muted mb-0">{item.bank_name}</p>
                  </div>
                  <div className="col-5 col-md-5 col-lg-5 col-xl-5 col-sm-5 bank-name my-auto">
                    <h6 className="font-normal mb-0">
                      <span className="ml-2">{item.account_number}</span>
                    </h6>
                  </div>
                  <div className="col-5 col-md-3 col-lg-3 col-xl-3 col-sm-3 default">
                    {item.is_default==1 && <button className="btn btn-primary btn1 btn-accept btn-reject">
                      Default Account
                    </button>}
                    {item.is_default==0 && <button onClick={()=> this.makeBankDefault(item.bank_account_id)} className="btn btn-primary  btn1 btn-accept">
                      Make this default
                    </button>}
                  </div>
                  <div className="col-2 col-md-1 col-lg-1 col-xl-1 col-sm-1">
                    <div className="delete-icon">
                      <a onClick={()=> this.deleteAccount(item.id)}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="trash-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
                        />
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>)}
                {!bankData && <this.NoCardView type={2}/>}
                <hr />
              </div>
            </div>
          )}
        </div>
        <div className="note mb-3 ml-3">
          <p className="font-12 mb-0 font-italic">{strings.paymentNote}</p>
        </div>
        {this.state.tab == 1 ? (
          <div className="bg-white main-background">
            <div className="service-title">
              <h5 className="font-20 font-semibold">{strings.Addnewcard}</h5>
            </div>
            <div  className="form-group mt-3 mb-3">
            <Elements stripe={stripePromise}>
              <this.CheckoutForm />
            </Elements>
            </div>
            <label className="check">
              <input
                  type="checkbox"
                  className="class1"
                  name="is_default"
                  onChange={(val)=>{this.setState({addCard:{...addCard,is_default:Number(addCard.is_default)===0 ? 1:0}})}}
                  checked={addCard.is_default===1}
                  id="is_default"
                  value={1}
              />
              <span className="checkmark" /> {strings.setDefaultCard}
            </label>
          </div>
        ) : (
          <this.BankView/>
        )}

      </div>
    );
  }

  static getLayout(page) {
    // const [openSnackbar] = useSnackbar(SuccessOptions)
    //
    // let prop = page
    // prop.props = openSnackbar
    // console.log(prop)
    return (<User>{page}</User>);
  }
}

