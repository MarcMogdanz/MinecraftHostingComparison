import * as React from "react";
import Filters from "../components/Filters";
import Company from "../Company";
import { AllCompanies } from "../Companies";
import styled from "styled-components";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

interface IndexPageState {
  companies: Company[];
}

export default class extends React.Component<IndexPageProps, IndexPageState> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);

    this.state = {
      companies: AllCompanies, // by default set all companies, will be overriden
    };

    this.updateCompanies = this.updateCompanies.bind(this);
  }

  public render() {
    return (
      <div>
        <>
          <h1>filters</h1>
          <Filters updateCompanies={this.updateCompanies} />
          <h1>results</h1>
          <Table companies={this.state.companies} />
        </>
      </div>
    );
  }

  private updateCompanies(companies: Company[]) {
    this.setState(() => ({
      companies,
    }));
  }
}

const StyledTh = styled.th`
  border: 1px solid black;
`;

const StyledTd = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

// @ts-ignore
const Table = ({ companies }: { companies: Company[] }): JSX.Element => {
  const rows = companies.map((company, index) => (
    <tr key={index}>
      <StyledTd>{company.name}</StyledTd>
      <StyledTd>
        {company.billingModel ? company.billingModel.toString() : "NaN"}
      </StyledTd>
      <StyledTd>
        {company.minimumDuration ? company.minimumDuration : "NaN"}
      </StyledTd>
      <StyledTd>
        {company.priceModel ? company.priceModel.toString() : "NaN"}
      </StyledTd>
      <StyledTd>
        {company.paymentMethods ? company.paymentMethods.toString() : "NaN"}
      </StyledTd>
      <StyledTd>{company.defaultPort ? company.defaultPort : "NaN"}</StyledTd>
      <StyledTd>
        {company.ddosProtection ? company.ddosProtection : "NaN"}
      </StyledTd>
      <StyledTd>{company.database ? company.database : "NaN"}</StyledTd>
    </tr>
  ));

  return (
    <>
      <table>
        <tr>
          <StyledTh>name</StyledTh>
          <StyledTh>billingModel</StyledTh>
          <StyledTh>minimumDuration</StyledTh>
          <StyledTh>priceModel</StyledTh>
          <StyledTh>paymentMethod</StyledTh>
          <StyledTh>defaultPort</StyledTh>
          <StyledTh>ddosProtection</StyledTh>
          <StyledTh>database</StyledTh>
        </tr>
        {rows}
      </table>
    </>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
