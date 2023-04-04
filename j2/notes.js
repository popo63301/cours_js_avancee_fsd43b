const student = { mention: "AB", note: 12 };

// const mention = student.mention;
// const note = student.note;

const { mention, note } = student;

//-------------

const hero = { name: "Nelson Mandela", place: "South Africa" };

const { name } = hero;

// console.log(name);

const stripe = {
  id: "ch_3MtAss2eZvKYlo2C0y5pe6Sp",
  object: "charge",
  amount: 100,
  amount_captured: 0,
  amount_refunded: 0,
  application: null,
  application_fee: null,
  application_fee_amount: null,
  balance_transaction: "txn_1032HU2eZvKYlo2CEPtcnUvl",
  billing_details: {
    address: {
      city: null,
      country: null,
      line1: null,
      line2: null,
      postal_code: null,
      state: null,
    },
    email: null,
    name: null,
    phone: null,
  },
  calculated_statement_descriptor: null,
  captured: false,
  created: 1680618654,
  currency: "usd",
  customer: null,
  description: "My First Test Charge (created for API docs)",
  disputed: false,
  failure_balance_transaction: null,
  failure_code: null,
  failure_message: null,
  fraud_details: {},
  invoice: null,
  livemode: false,
  metadata: {},
  on_behalf_of: null,
  outcome: null,
  paid: true,
  payment_intent: null,
  payment_method: "card_1MtAsf2eZvKYlo2CO7vRZrNK",
  payment_method_details: {
    card: {
      brand: "visa",
      checks: {
        address_line1_check: null,
        address_postal_code_check: null,
        cvc_check: "pass",
      },
      country: "US",
      exp_month: 8,
      exp_year: 2024,
      fingerprint: "Xt5EWLLDS7FJjR1c",
      funding: "credit",
      installments: null,
      last4: "4242",
      mandate: null,
      moto: null,
      network: "visa",
      three_d_secure: null,
      wallet: null,
    },
    type: "card",
  },
  receipt_email: null,
  receipt_number: null,
  receipt_url:
    "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xMDMyRDgyZVp2S1lsbzJDKJ7psKEGMgZwzuKRzOQ6LBbKV0uJ9UYJGWnokIN7HO175FWRhB4uPRUMsq55_3te1ewQ3Ytq306R_b-y",
  redaction: null,
  refunded: false,
  refunds: {
    object: "list",
    data: [],
    has_more: false,
    url: "/v1/charges/ch_3MtAss2eZvKYlo2C0y5pe6Sp/refunds",
  },
  review: null,
  shipping: null,
  source_transfer: null,
  statement_descriptor: null,
  statement_descriptor_suffix: null,
  status: "succeeded",
  transfer_data: null,
  transfer_group: null,
};

// const {
//   description,
//   payment_method,
//   payment_method_details: {
//     card: { fingerprint },
//   },
// } = stripe;

// console.log(description);
// console.log(payment_method);
// console.log(fingerprint);

// function checkStripe({
//   description,
//   payment_method,
//   payment_method_details: {
//     card: { fingerprint },
//   },
// }) {
//   console.log(fingerprint);
// }

// checkStripe(stripe);

const sayHello = ({ name }) => console.log(`Hello ${name}`);

sayHello({ name: "Aymeric" });

function getURL({ refunds: { url } }) {
  console.log(url);
}

getURL(stripe);
