import { API_URL, PAY_URL } from './request-path'

//user login
export const LOGIN = API_URL + "user/login"

//user register
export const REGISTER = API_URL + "user/register"

//user forget
export const FORGET = API_URL + "user/forgetPwd"

//user forget
export const USER_GIFT = API_URL + "user/gift"

//user
export const USER = API_URL + "user"

//user
export const USER_SIGN = API_URL + "user/sign"

//user
export const USER_LOGOUT = API_URL + "user/logout"

//user
export const USER_UPDATEPWD = API_URL + "user/updatePwd"

//user
export const USER_ACCOUNT = API_URL + "user/account"

//user
export const USER_LOAN = API_URL + "user/loan"

export const USER_LOAN_BILL = API_URL + "/user/loanBill"



export const LOAN_CONFIRM_ONE = API_URL + "loanConfirm/"

export const LOAN_CONFIRM = API_URL + "loanConfirm/page"

export const LOAN_CONFIRM_IMG = API_URL + "loanConfirm/loanConfirmData/"

// Get the user contract list.
export const LOAN_CONFIRM_LIST = API_URL + "loanConfirm/contractImg/"
    // MARK sure confirm.
export const SURE_CONFIRM = API_URL + "loanConfirm/confirmLoan"


//check image code
export const IMG_CODE = API_URL + "verification/code/check"

//
export const BANNER_LIST = API_URL + "urlList/banner"

//
export const PRO_LIST = API_URL + "pro/list"

//
export const PRO_PAGE = API_URL + "pro/page"

//
export const PRO_DETAIL = API_URL + "pro/"

//
export const PRO_INVEST = API_URL + "pro/investmentRecords"

//
export const ART_LIST = API_URL + "art/list"

//
export const ART_PAGE = API_URL + "art/page"

//
export const ART_DETAIL = API_URL + "art/"

//
export const TRADE_LIST = API_URL + "trade/list"

//
export const TRADE_PAGE = API_URL + "trade/page"

//
export const TRADE_DETAIL = API_URL + "trade/"

export const TRADE_RANKING = API_URL + "financing/list"

export const TRADE_LOANLIST = API_URL + "loan/list"

export const LOAN_INFO = API_URL + "loan/info/"

//
export const ASSESSMENT_FORM = API_URL + "loanAssessment/assessment"

//bankRecharge
export const BANK_RECHARGE = PAY_URL + "sumapay/trade/bankRecharge"

//withholdingRecharge
export const WITHHOLDING_RECHARGE = PAY_URL + "sumapay/mobile/withholdingRecharge"

//withholdingRecharge
export const WITHDRAW = PAY_URL + "sumapay/mobile/withdraw"

//sumapay
export const PAY_USER_QUERY = PAY_URL + "sumapay/user/accountQuery"

//sumapay
export const PAY_ORDER = PAY_URL + "sumapay/mobile/manualBid"

//sumapay
export const PAY_REPAYLOAN = PAY_URL + "sumapay/mobile/repayLoan"

//sumapay
export const MANAGE = PAY_URL + "sumapay/mobile/manage"

//sumapay
export const REAL_NAME = PAY_URL + "sumapay/mobile/register"

//sumapay
export const AGREEMENT = API_URL + "user/agreement?id="
export const GET_AGREEMENT = API_URL + "signature/agreement/apply?id="

//get image verification code
export const COMMON_ENCRYPT = API_URL + "verification/code"
    //send message
export const COMMON_SENDSMS = API_URL + "verification/sms/send"