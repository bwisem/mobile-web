// The URL where the Point of Sale app will send the transaction results.
var callbackUrl = "https://immense-earth-23649.herokuapp.com/";

// Your application ID
var applicationId = "sq0idp-K-i6--d9HD4fha58YpSS6w";

// The total and currency code should come from your transaction flow.
// For now, we are hardcoding them.
var transactionTotal = "100";
var currencyCode = "USD";

// The version of the Point of Sale SDK that you are using.
var sdkVersion = "v2.0";

function openURL(){
  // Configure the allowable tender types
  var tenderTypes =
   "com.squareup.pos.TENDER_CARD";

  var posUrl =
    "intent:#Intent;" +
    "action=com.squareup.pos.action.CHARGE;" +
    "package=com.squareup;" +
    "S.com.squareup.pos.WEB_CALLBACK_URI=" + callbackUrl + ";" +
    "S.com.squareup.pos.CLIENT_ID=" + applicationId + ";" +
    "S.com.squareup.pos.API_VERSION=" + sdkVersion + ";" +
    "i.com.squareup.pos.TOTAL_AMOUNT=" + transactionTotal + ";" +
    "S.com.squareup.pos.CURRENCY_CODE=" + currencyCode + ";" +
    "S.com.squareup.pos.TENDER_TYPES=" + tenderTypes + ";" +
    "end";

  window.open(posUrl);
}
