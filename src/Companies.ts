import Company, {
  BillingModel,
  PriceModel,
  PaymentMethod,
  DefaultPort,
  DDoSProtection,
  Database,
} from "./Company";

const zapHosting = new Company(
  "ZAP-Hosting",
  [BillingModel.CONTRACT, BillingModel.PREPAID],
  7,
  [PriceModel.RAM, PriceModel.SLOTS],
  [PaymentMethod.PAYPAL, PaymentMethod.PAYSAFECARD],
  DefaultPort.EXTRA_CHARGE,
  DDoSProtection.FREE,
  null,
  "/zap_hosting.png",
  "https://zap-hosting.com",
);

const nitrado = new Company(
  "Nitrado",
  [BillingModel.PREPAID],
  3,
  [PriceModel.SLOTS, PriceModel.RAM],
  [
    PaymentMethod.PAYSAFECARD,
    PaymentMethod.PAYPAL,
    PaymentMethod.WIRE_TRANSFER,
  ],
  DefaultPort.FREE,
  DDoSProtection.FREE,
  Database.FREE,
  "/zap_hosting.png",
  "https://nitrado.net",
);

const test = new Company(
  "TEST",
  null,
  3,
  [PriceModel.SLOTS],
  [
    PaymentMethod.PAYSAFECARD,
    PaymentMethod.PAYPAL,
    PaymentMethod.WIRE_TRANSFER,
  ],
  DefaultPort.FREE,
  DDoSProtection.EXTRA_CHARGE,
  null,
  "/zap_hosting.png",
  "https://google.com",
);

const AllCompanies = [zapHosting, nitrado, test];

export { AllCompanies };
