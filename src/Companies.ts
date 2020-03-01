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
  [
    PaymentMethod.PAYPAL,
    PaymentMethod.PAYSAFECARD,
    PaymentMethod.BITCOIN,
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.SOFORT,
    PaymentMethod.GIROPAY,
  ],
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
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.SOFORT,
    PaymentMethod.GIROPAY,
  ],
  DefaultPort.FREE,
  DDoSProtection.FREE,
  Database.FREE,
  "/nitrado.png",
  "https://nitrado.net",
);

const gportal = new Company(
  "gportal",
  [BillingModel.PREPAID],
  3,
  [PriceModel.SLOTS],
  [
    PaymentMethod.SOFORT,
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.PAYPAL,
    PaymentMethod.PAYSAFECARD,
  ],
  DefaultPort.FREE,
  DDoSProtection.FREE,
  null,
  "/gportal.png",
  "https://g-portal.com",
);

const hostUnlimited = new Company(
  "Host Unlimited",
  [BillingModel.PREPAID],
  30,
  [PriceModel.RAM],
  [
    PaymentMethod.WIRE_TRANSFER,
    PaymentMethod.SOFORT,
    PaymentMethod.PAYSAFECARD,
    PaymentMethod.PAYPAL,
    PaymentMethod.BITCOIN,
  ],
  DefaultPort.FREE,
  DDoSProtection.FREE,
  Database.FREE,
  "/host_unlimited.png",
  "https://host-unlimited.de",
);

const mcHost24 = new Company(
  "MC-HOST24",
  [BillingModel.PREPAID],
  3,
  [PriceModel.RAM],
  [PaymentMethod.PAYSAFECARD, PaymentMethod.SOFORT, PaymentMethod.PAYPAL],
  DefaultPort.FREE,
  DDoSProtection.FREE,
  Database.FREE,
  "/mc-host24.png",
  "https://mc-host24.de",
);

const deinServerHost = new Company(
  "DeinServerHost",
  [BillingModel.PREPAID],
  30,
  [PriceModel.RAM],
  [
    PaymentMethod.PAYSAFECARD,
    PaymentMethod.PAYPAL,
    PaymentMethod.SOFORT,
    PaymentMethod.WIRE_TRANSFER,
    PaymentMethod.GIROPAY,
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.BITCOIN,
  ],
  DefaultPort.FREE,
  DDoSProtection.FREE,
  Database.FREE,
  "/dein_server_host.svg",
  "https://deinserverhost.de",
);

export const AllCompanies = [
  zapHosting,
  nitrado,
  gportal,
  hostUnlimited,
  mcHost24,
  deinServerHost,
];
