import * as React from "react";
import Helmet from "react-helmet";
import Filters from "../components/Filters";
import Company from "../Company";
import { AllCompanies } from "../Companies";

import "../styles/main.css";

// TODO
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
      <>
        <Helmet
          bodyAttributes={{
            class: "bg-gray-200",
          }}
        />

        <div className="flex justify-center flex-shrink-0 text-gray-800 mt-6 mb-4">
          <span className="font-semibold text-xl tracking-wide">
            Minecraft Hosting Vergleich
          </span>
        </div>

        <Filters updateCompanies={this.updateCompanies} />
        <Table companies={this.state.companies} />

        <div className="flex justify-center flex-shrink-0 text-gray-800 mt-6 mb-4">
          <a href="https://marcmogdanz.de" rel="nofollow">
            <span className="tracking-wide">Impressum</span>
          </a>
        </div>
      </>
    );
  }

  private updateCompanies(companies: Company[]) {
    this.setState(() => ({
      companies,
    }));
  }
}

const Table = ({ companies }: { companies: Company[] }): JSX.Element => {
  const elements = companies.map((company, index) => (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-4" key={index}>
      <a href={company.url} target="_blank">
        <div className="flex flex-col justify-center items-center text-center shadow-md rounded-lg bg-gray-400 m-2 md:m-6 p-2">
          <div className="text-md font-bold flex flex-col text-gray-900 mb-2">
            <span className="uppercase">{company.name}</span>
            <span className="font-normal text-gray-700 text-sm">
              Some fancy slogan here
            </span>
          </div>

          <div className="w-32 h-32 flex items-center justify-center">
            <img src={company.logoUrl} />
          </div>
        </div>
      </a>
    </div>
  ));

  return <div className="flex flex-wrap">{elements}</div>;
};

// TODO
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
