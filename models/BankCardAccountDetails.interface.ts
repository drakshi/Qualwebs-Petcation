
export interface CardData{
    name_on_card?: string,
    card_number?:number,
    expiry_month?:number,
    expiry_year?:number,
    cvv?: number,
    is_default:number,
}

export interface BankData {
    bank_name: string,
    branch_name: string,
    bank_code : string,
    branch_code : string,
    account_number : string,
    account_holder_name: string,
    gender : string,
    routing_number: string,
    address_kana: {
        country?: string,
        postal_code?: string,
        state?: string,
        city?: string,
        town?: string,
        line1?: string,
        line2?: string
    },
    address_kanji: {
        country?: string,
        postal_code?: string,
        state?: string,
        city?: string,
        town?: string,
        line1?: string,
        line2?: string
    },
    phone_number: string,
    is_default : number,
    account_type : number,
    bank_country: string
}
