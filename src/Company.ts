export default class Company {
  // TODO: change to private
  public name: string;
  public billingModel: BillingModel[] | null;
  public minimumDuration: number | null; // in days
  public priceModel: PriceModel[] | null;
  public paymentMethods: PaymentMethod[] | null;
  public defaultPort: DefaultPort | null;
  public ddosProtection: DDoSProtection | null;
  public database: Database | null;
  // TODO: Backups (Filter)
  // TODO: Mods (Filter)
  // TODO: Server Locations (Filter)
  // TODO: Company Locations (Filter)

  // TODO: use gatsby-image
  public logoUrl: string; // path in static folder starting with /
  public url: string; // redirect url

  constructor(
    name: string,
    billingModel: BillingModel[] | null,
    minimumDuration: number | null,
    priceModel: PriceModel[] | null,
    paymentMethods: PaymentMethod[] | null,
    defaultPort: DefaultPort | null,
    ddosProtection: DDoSProtection | null,
    database: Database | null,
    logoUrl: string, // TODO
    url: string,
  ) {
    this.name = name;
    this.billingModel = billingModel;
    this.minimumDuration = minimumDuration;
    this.priceModel = priceModel;
    this.paymentMethods = paymentMethods;
    this.defaultPort = defaultPort;
    this.ddosProtection = ddosProtection;
    this.database = database;
    this.logoUrl = logoUrl;
    this.url = url;
  }
}

export enum BillingModel {
  PREPAID = "PREPAID",
  CONTRACT = "CONTRACT",
}

export enum PriceModel {
  SLOTS = "SLOTS",
  RAM = "RAM",
}

export enum PaymentMethod {
  PAYSAFECARD = "PAYSAFECARD",
  PAYPAL = "PAYPAL",
  WIRE_TRANSFER = "WIRE_TRANSFER",
  SOFORT = "SOFORT",
  CREDIT_CARD = "CREDIT_CARD",
  BITCOIN = "BITCOIN",
  GIROPAY = "GIROPAY",
}

export enum DefaultPort {
  FREE = "FREE",
  EXTRA_CHARGE = "EXTRA_CHARGE",
}

export enum DDoSProtection {
  FREE = "FREE",
  EXTRA_CHARGE = "EXTRA_CHARGE",
}

export enum Database {
  FREE = "FREE",
  EXTRA_CHARGE = "EXTRA_CHARGE",
}
