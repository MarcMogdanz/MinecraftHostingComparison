import * as React from "react";
import styled from "styled-components";
import Company, {
  BillingModel,
  PriceModel,
  PaymentMethod,
  DefaultPort,
  DDoSProtection,
  Database,
} from "../Company";
import { AllCompanies } from "../Companies";
import { /*TextFilter,*/ CheckboxFilter, NumberFilter } from "./FilterElement";

// @ts-ignore
interface FiltersProps {
  updateCompanies: (companies: Company[]) => void;
}

interface FiltersState {
  name: string;
  billingModelPrepaid: boolean;
  billingModelContract: boolean;
  minimumDuration: number;
  priceModelSlots: boolean;
  priceModelRam: boolean;
  paymentMethodPaysafecard: boolean;
  paymentMethodPayPal: boolean;
  paymentMethodWireTransfer: boolean;
  defaultPortFree: boolean;
  ddosProtectionFree: boolean;
  databaseFree: boolean;
}

export default class Filters extends React.Component<
  FiltersProps,
  FiltersState
> {
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      billingModelContract: false,
      billingModelPrepaid: false,
      minimumDuration: 0, // TODO: set to 30
      priceModelSlots: false,
      priceModelRam: false,
      paymentMethodPaysafecard: false,
      paymentMethodPayPal: false,
      paymentMethodWireTransfer: false,
      defaultPortFree: false,
      ddosProtectionFree: false,
      databaseFree: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/*
          <Divider>
            <TextFilter
              labelText="Name"
              name="name"
              value={this.state.name}
              handleChange={this.handleChange}
            />
          </Divider>
          */}

          <Divider>
            <div>Billing Model</div>
            <CheckboxFilter
              labelText="Contract"
              name="billingModelContract"
              checked={this.state.billingModelContract}
              handleChange={this.handleChange}
            />
            <CheckboxFilter
              labelText="Prepaid"
              name="billingModelPrepaid"
              checked={this.state.billingModelPrepaid}
              handleChange={this.handleChange}
            />
          </Divider>

          <Divider>
            <NumberFilter
              labelText="Minimum duration (0 = ignore, X in days)"
              name="minimumDuration"
              value={this.state.minimumDuration}
              min={0}
              max={90}
              handleChange={this.handleChange}
            />
          </Divider>

          <Divider>
            <div>Price Model</div>
            <CheckboxFilter
              labelText="Slots"
              name="priceModelSlots"
              checked={this.state.priceModelSlots}
              handleChange={this.handleChange}
            />
            <CheckboxFilter
              labelText="RAM"
              name="priceModelRam"
              checked={this.state.priceModelRam}
              handleChange={this.handleChange}
            />
          </Divider>

          <Divider>
            <div>Paymentmethods</div>
            <CheckboxFilter
              labelText="Paysafecard"
              name="paymentMethodPaysafecard"
              checked={this.state.paymentMethodPaysafecard}
              handleChange={this.handleChange}
            />
            <CheckboxFilter
              labelText="PayPal"
              name="paymentMethodPayPal"
              checked={this.state.paymentMethodPayPal}
              handleChange={this.handleChange}
            />
            <CheckboxFilter
              labelText="Wire Transfer"
              name="paymentMethodWireTransfer"
              checked={this.state.paymentMethodWireTransfer}
              handleChange={this.handleChange}
            />
          </Divider>

          <Divider>
            <div>Default Port (true=Free, false=egal)</div>
            <CheckboxFilter
              labelText="Free"
              name="defaultPortFree"
              checked={this.state.defaultPortFree}
              handleChange={this.handleChange}
            />
          </Divider>

          <Divider>
            <div>DDoS Protection (true=Free, false=egal)</div>
            <CheckboxFilter
              labelText="Free"
              name="ddosProtectionFree"
              checked={this.state.ddosProtectionFree}
              handleChange={this.handleChange}
            />
          </Divider>

          <Divider>
            <div>Database (true=Free, false=egal)</div>
            <CheckboxFilter
              labelText="Free"
              name="databaseFree"
              checked={this.state.databaseFree}
              handleChange={this.handleChange}
            />
          </Divider>
        </form>
        {/* <Table companies={companies} /> */}
      </>
    );
  }

  private getFilteredCompanies(): Company[] {
    const {
      billingModelContract,
      billingModelPrepaid,
      minimumDuration,
      priceModelSlots,
      priceModelRam,
      paymentMethodPaysafecard,
      paymentMethodPayPal,
      paymentMethodWireTransfer,
      defaultPortFree,
      ddosProtectionFree,
      databaseFree,
    } = this.state;
    let filteredCompanies: Company[] = AllCompanies;

    // TODO: name

    // billingModelContract
    if (billingModelContract) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (
          company.billingModel &&
          company.billingModel.includes(BillingModel.CONTRACT)
        ) {
          return true;
        }

        return false;
      });
    }

    // billingModelPrepaid
    if (billingModelPrepaid) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (
          company.billingModel &&
          company.billingModel.includes(BillingModel.PREPAID)
        ) {
          return true;
        }

        return false;
      });
    }

    // minimumDuration
    if (minimumDuration && minimumDuration !== 0) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (
          company.minimumDuration &&
          company.minimumDuration <= minimumDuration
        ) {
          return true;
        }

        return false;
      });
    }

    // priceModelSlots
    if (priceModelSlots) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (
          company.priceModel &&
          company.priceModel.includes(PriceModel.SLOTS)
        ) {
          return true;
        }

        return false;
      });
    }

    // priceModelRam
    if (priceModelRam) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (company.priceModel && company.priceModel.includes(PriceModel.RAM)) {
          return true;
        }

        return false;
      });
    }

    // paymentMethodPaysafecard
    if (paymentMethodPaysafecard) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (
          company.paymentMethods &&
          company.paymentMethods.includes(PaymentMethod.PAYSAFECARD)
        ) {
          return true;
        }

        return false;
      });
    }

    // paymentMethodPayPal
    if (paymentMethodPayPal) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (
          company.paymentMethods &&
          company.paymentMethods.includes(PaymentMethod.PAYPAL)
        ) {
          return true;
        }

        return false;
      });
    }

    // paymentMethodWireTransfer
    if (paymentMethodWireTransfer) {
      filteredCompanies = filteredCompanies.filter(company => {
        if (
          company.paymentMethods &&
          company.paymentMethods.includes(PaymentMethod.WIRE_TRANSFER)
        ) {
          return true;
        }

        return false;
      });
    }

    // defaultPortFree (true=Free, false=egal)
    filteredCompanies = filteredCompanies.filter(company => {
      // filter is not set, all companies are valid
      if (!defaultPortFree) {
        return true;
      }

      // filter is set to free
      if (company.defaultPort === DefaultPort.FREE) {
        return true;
      }

      return false;
    });

    // ddosProtectionFree (true=Free, false=egal)
    filteredCompanies = filteredCompanies.filter(company => {
      // filter is not set, all companies are valid
      if (!ddosProtectionFree) {
        return true;
      }

      // filter is set to free
      if (company.ddosProtection === DDoSProtection.FREE) {
        return true;
      }

      return false;
    });

    // databaseFree (true=Free, false=egal)
    filteredCompanies = filteredCompanies.filter(company => {
      // filter is not set, all companies are valid
      if (!databaseFree) {
        return true;
      }

      // filter is set to free
      if (company.database === Database.FREE) {
        return true;
      }

      return false;
    });

    return filteredCompanies;
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { type, name, checked, value } = event.target;

    // .getFilteredCompanies() uses the state and we update the state here
    // therefore .getFC() should be called after our state update was applied
    // we do this via the .setState() callback
    const callUpdate = () => {
      const companies = this.getFilteredCompanies();
      this.props.updateCompanies(companies);
    };

    // handle checkboxes
    if (type === "checkbox") {
      this.setState(
        (prevState: FiltersState) => ({
          ...prevState,
          [name]: checked,
        }),
        callUpdate,
      );
      return;
    }

    // handle text and numbers
    this.setState(
      (prevState: FiltersState) =>
        Object.assign({}, prevState, {
          [name]: type === "number" ? parseInt(value, 10) : value,
        }),
      callUpdate,
    );
  }

  // TODO: type
  // @ts-ignore
  private handleSubmit(event) {
    // default <form> would cause a reload of the page
    event.preventDefault();
  }
}

const Divider = styled.div`
  border: solid 1px black;
  margin: 10px;
  padding: 10px;
`;
