import React from "react";
import cx from "classnames";
import home from "../images/undraw_taking_notes_tjaf_1.svg";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-indigo-700 hover:bg-indigo-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-indigo-700 hover:text-indogo-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};

function Index({ data }) {
  const services = data.services.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 font-serif font-hairline self-start">
          <h1 className="text-3xl md:text-5xl text-indigo-700 leading-tight">
            EZLOAN 
          </h1>
          <p className="text-1xl text-indigo-700 leading-tight">बैंक और आप के बीच एक पुल.</p>
          <p className="text-base">
            Ezloan is broker service between bank and customers.
          </p>
        </div>

        <div className="container w-3/4 sm:w-7/12 lg:w-5/12 xl:1/4 mt-10 self-start">
          <div
            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <div className="flex-1">
              <p>
                <strong>Phone: </strong>
                +91 7060186065
              </p>
              <p>
                <strong>Email: </strong>
                suraj171987singh@gmail.com
              </p>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <a href="https://forms.gle/32LFRE14fUtAz1hZ9" target="__blank">
                <StyledButton>Contact</StyledButton>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Our Services
          </p>

          <div className="flex flex-wrap">
            {services.map(({ node }) => (
              <Service
                title={node.frontmatter.title}
                url={node.frontmatter.path}
                key={node.frontmatter.path}
              >
                {node.excerpt}
              </Service>
            ))}
          </div>

          <div className="self-center mt-8">
            <Link to="/services">
              <StyledButton>View all services</StyledButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Banking Partners
          </p>

          <div className="flex flex-wrap justify-center items-stretch -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={`data:image/png;base64,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`} />
                </div>
                <p className="text-2xl w-full">IndiaBull Home Loan</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={`https://i0.wp.com/www.logotaglines.com/wp-content/uploads/2016/08/Axis-Bank-Logo.png?resize=400%2C400`} />
                </div>
                <p className="text-2xl w-full">Axis Bank</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={`https://www.gurpreetsaluja.com/wp-content/uploads/2020/09/HDFC-LOGO.png`} />
                </div>
                <p className="text-2xl w-full">HDFC Bank</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={`http://3.bp.blogspot.com/-f--qCwb5qHo/VJ43dR1IMzI/AAAAAAAACT0/FqrYX2HOC9Y/s1600/Aditya-Birla-Group.jpg`} />
                </div>
                <p className="text-2xl w-full">Adity Birla Group</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={`https://images.indianexpress.com/2019/01/dhfl-759.jpg`} />
                </div>
                <p className="text-2xl w-full">DHFL</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={`https://content3.jdmagicbox.com/comp/thane/q6/022pxx22.xx22.120810130747.m2q6/catalogue/lic-housing-finance-ltd-thane-west-thane-finance-companies-4glyo1.jpg?clr=5d4f09`} />
                </div>
                <p className="text-2xl w-full">LIC HFL</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={`https://content.indiainfoline.com/_media/iifl/img/article/2019-05/06/full/1557143914-0954.jpg`} />
                </div>
                <p className="text-2xl w-full">IIFL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
