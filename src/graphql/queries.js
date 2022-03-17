import {gql} from '@apollo/client';

export const TARGETS = gql`
  query TARGETS {
    targets {
      nodes {
        id
        customtargets {
          arText
          arType
          arImage {
            mediaItemUrl
          }
          arVideo {
            mediaItemUrl
          }
          layout
          width
          targetImage {
            mediaItemUrl
            title
            id
          }
        }
      }
    }
  }
`;

export const HINTS = gql`
  query HINTS {
    hints {
      nodes {
        title
        id
        customhints {
          status
          fieldGroupName
          image {
            id
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          question {
            fieldGroupName
            questionText
            firstChoice {
              choiceText
              fieldGroupName
              isRight
            }
            fourthChoice {
              choiceText
              fieldGroupName
              isRight
            }
            secondChoice {
              choiceText
              fieldGroupName
              isRight
            }
            thirdChoice {
              choiceText
              fieldGroupName
              isRight
            }
          }
        }
      }
    }
  }
`;
