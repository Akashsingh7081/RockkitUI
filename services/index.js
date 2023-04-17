import client from "./apollo-client";
import { gql } from "@apollo/client";

export function WorkSectioData() {
  return client.query({
    query: gql`
      query {
        workSectionDetail {
          data {
            attributes {
              WorkSection {
                Title
                Description
              }
            }
          }
        }
      }
    `,
  });
}
export function DedicatedSectionData() {
  return client.query({
    query: gql`
      query {
        dedicatedTeamDetail {
          data {
            attributes {
              DedicatedSectionDetails {
                Title
                Description
              }
            }
          }
        }
      }
    `,
  });
}
export function HeroSectionData() {
  return client.query({
    query: gql`
      query {
        heroSectionDetail {
          data {
            attributes {
              HeroSectionDetails {
                Title
                Description
              }
            }
          }
        }
      }
    `,
  });
}
export function CompanyListFooterData() {
  return client.query({
    query: gql`
      query {
        companyDetails {
          data {
            attributes {
              Title
              companyData {
                id
                text
                link
                footerLink
              }
            }
          }
        }
      }
    `,
  });
}
export function HireUsFooterData() {
  return client.query({
    query: gql`
      query {
        hireUsFooters {
          data {
            attributes {
              Title
              HireUsfooterItem {
                id
                text
                link
                footerLink
              }
            }
          }
        }
      }
    `,
  });
}

export function HireSectionData() {
  return client.query({
    query: gql`
      query {
        hireCards {
          data {
            attributes {
              Title
              card {
                id
                num
                color
                bgColor
                Text
              }
            }
          }
        }
      }
    `,
  });
}

export function BenefitSectionData() {
  return client.query({
    query: gql`
      query {
        benefitCards {
          data {
            attributes {
              Title
              card {
                id
                Text
                gradient
                Icon {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
}
