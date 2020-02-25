import * as React from "react";
import { graphql } from "gatsby";
import Company, {
  BillingModel,
  PriceModel,
  PaymentMethod,
  DefaultPort,
  DDoSProtection,
  Database,
} from "../Company";
import { AllCompanies } from "../Companies";
import { CheckboxFilter, SwitchFilter, NumberFilter } from "./FilterElement";
import { Modal, ModalHeadline, ModalText, ModalElement } from "./Modal";

interface FiltersProps {
  updateCompanies: (companies: Company[]) => void;
}

interface FiltersState {
  name: string; // TODO: remove?
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
  selectedModal: null | FiltersModal;
}

enum FiltersModal {
  FINANCES = "FINANCES",
  PAYMENT = "PAYMENT",
  EXTRAS = "EXTRAS",
}

export default class Filters extends React.Component<
  FiltersProps,
  FiltersState
> {
  constructor(props: FiltersProps) {
    super(props);

    this.state = {
      // filters
      name: "",
      billingModelContract: false,
      billingModelPrepaid: false,
      minimumDuration: 30,
      priceModelSlots: false,
      priceModelRam: false,
      paymentMethodPaysafecard: false,
      paymentMethodPayPal: false,
      paymentMethodWireTransfer: false,
      defaultPortFree: false,
      ddosProtectionFree: false,
      databaseFree: false,
      selectedModal: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNEW = this.handleChangeNEW.bind(this);
  }

  // TODO: remove?
  /*
    <TextFilter
      labelText="Name"
      name="name"
      value={this.state.name}
      handleChange={this.handleChange}
    />
    */

  public render() {
    return (
      <>
        <div className="flex justify-center">
          <div
            className="flex-initial rounded-lg bg-gray-300 text-gray-800 text-sm md:text-md font-mono shadow-md px-4 py-2 m-2"
            onClick={() => this.updateSelectedModal(FiltersModal.FINANCES)}
          >
            Finanzen
          </div>
          <div
            className="flex-initial rounded-lg bg-gray-300 text-gray-800 text-sm md:text-md font-mono shadow-md px-4 py-2 m-2"
            onClick={() => this.updateSelectedModal(FiltersModal.PAYMENT)}
          >
            Zahlung
          </div>
          <div
            className="flex-initial rounded-lg bg-gray-300 text-gray-800 text-sm md:text-md font-mono shadow-md px-4 py-2 m-2"
            onClick={() => this.updateSelectedModal(FiltersModal.EXTRAS)}
          >
            Extras
          </div>
        </div>

        {this.state.selectedModal === FiltersModal.FINANCES && (
          <Modal title="Finanzen">
            <ModalHeadline>Abrechnung</ModalHeadline>
            <ModalText>
              Die Art und Weise wie wie abgerechnet wird. Wähle eine Sache aus,
              wenn du möchtest, dass mindestens das angeboten wird. Wähle beides
              aus, wenn du möchtest, dass auch beides angeboten wird. Wenn du
              nichts auswählst, wird diese Option ignoriert.
            </ModalText>

            <ModalElement>
              <CheckboxFilter
                labelText="Contract"
                name="billingModelContract"
                checked={this.state.billingModelContract}
                handleChange={this.handleChange}
              />
            </ModalElement>

            <ModalElement>
              <CheckboxFilter
                labelText="Prepaid"
                name="billingModelPrepaid"
                checked={this.state.billingModelPrepaid}
                handleChange={this.handleChange}
              />
            </ModalElement>

            <ModalHeadline>Mindestlaufzeit</ModalHeadline>
            <ModalText>
              Die Mindestlaufzeit bezieht sich auf die minimalste Anzahl an
              Tagen, die du deinen Server buchen musst. Wählst du 0 aus, dann
              wird diese Option ignoriert.
            </ModalText>

            <ModalElement>
              <NumberFilter
                name="minimumDuration"
                value={this.state.minimumDuration}
                min={0}
                max={365}
                handleChange={this.handleChangeNEW}
              />
            </ModalElement>

            <ModalHeadline>Preismodell</ModalHeadline>
            <ModalText>
              Das Preismodell bezieht sich darauf anhand welcher Kriterien der
              Preis gebildet wird. Wenn du nichts auswählst, wird diese Option
              ignoriert.
            </ModalText>

            <ModalElement>
              <CheckboxFilter
                labelText="Slots"
                name="priceModelSlots"
                checked={this.state.priceModelSlots}
                handleChange={this.handleChange}
              />
            </ModalElement>

            <ModalElement>
              <CheckboxFilter
                labelText="RAM"
                name="priceModelRam"
                checked={this.state.priceModelRam}
                handleChange={this.handleChange}
              />
            </ModalElement>
          </Modal>
        )}

        {this.state.selectedModal === FiltersModal.PAYMENT && (
          <Modal title="Zahlungsmöglichkeiten">
            <ModalText>
              Wähle alle Zahlungsarten, die angeboten werden sollen.
            </ModalText>

            <ModalElement>
              <CheckboxFilter
                labelText="Paysafecard"
                name="paymentMethodPaysafecard"
                checked={this.state.paymentMethodPaysafecard}
                handleChange={this.handleChange}
              />
            </ModalElement>

            <ModalElement>
              <CheckboxFilter
                labelText="PayPal"
                name="paymentMethodPayPal"
                checked={this.state.paymentMethodPayPal}
                handleChange={this.handleChange}
              />
            </ModalElement>

            <ModalElement>
              <CheckboxFilter
                labelText="Überweisung"
                name="paymentMethodWireTransfer"
                checked={this.state.paymentMethodWireTransfer}
                handleChange={this.handleChange}
              />
            </ModalElement>
          </Modal>
        )}

        {this.state.selectedModal === FiltersModal.EXTRAS && (
          <Modal title="Extras">
            <ModalText>
              Wähle alle Extras aus, die{" "}
              <span className="font-bold">kostenlos</span> angeboten werden
              sollen.
            </ModalText>

            <ModalHeadline>Standardport kostenlos</ModalHeadline>

            <ModalElement>
              <SwitchFilter
                name="defaultPortFree"
                checked={this.state.defaultPortFree}
                handleChange={this.handleChangeNEW}
              />
            </ModalElement>

            <ModalHeadline>DDoS Protection kostenlos</ModalHeadline>

            <ModalElement>
              <SwitchFilter
                name="ddosProtectionFree"
                checked={this.state.ddosProtectionFree}
                handleChange={this.handleChangeNEW}
              />
            </ModalElement>

            <ModalHeadline>Datenbank kostenlos</ModalHeadline>

            <ModalElement>
              <SwitchFilter
                name="databaseFree"
                checked={this.state.databaseFree}
                handleChange={this.handleChangeNEW}
              />
            </ModalElement>
          </Modal>
        )}
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

  // TODO: merge handleChange() and handleChangeNEW()
  private handleChangeNEW(name: string, value: any): void {
    // .getFilteredCompanies() uses the state and we update the state here
    // therefore .getFC() should be called after our state update was applied
    // we do this via the .setState() callback
    // TODO: use caching, dont declare the const on every handleChange call
    const callUpdate = () => {
      const companies = this.getFilteredCompanies();
      this.props.updateCompanies(companies);
    };

    this.setState(
      (prevState: FiltersState) => ({
        ...prevState,
        [name]: value,
      }),
      callUpdate,
    );
  }

  private updateSelectedModal(newModal: null | FiltersModal): void {
    this.setState((prevState: FiltersState) => {
      if (prevState.selectedModal === newModal) {
        return { selectedModal: null };
      }

      return { selectedModal: newModal };
    });
  }
}

export const query = graphql`
  query {
    zapHosting: file(relativePath: { eq: "logos/zap_hosting.png" }) {
      id
      childImageSharp {
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`;
