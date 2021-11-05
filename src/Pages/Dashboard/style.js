import styled from "styled-components";

import { Colors } from '../../Constants';

const StyledDashboard = styled.div`
  .container {
    /* width: 100vw; */
    height: calc(100vh - 160px);
    display: flex;
    justify-content: center;

    .content {
      width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .movieForm {
        z-index: 2;
        margin-bottom: 40px;
        position: relative;
        input {
          padding: 10px;
          width: 400px;
          border-radius: 10px;
          font-size: 20px;
          background-color: ${Colors.grey1};
          border: 1px solid ${Colors.grey2};
          color: ${Colors.white};

          &:focus {
            outline: none;
          }
        }

        .close {
          width: 30px;
          height: auto;
          position: absolute;
          top: 8px;
          right: 8px;
          cursor: pointer;
        }

        .suggestions {
          border-radius: 10px;
          position: absolute;
          top: 50px;
          left: 0px;
          width: 420px;
          height: 300px;
          background-color: ${Colors.grey2};
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }

          p {
            background-color: ${Colors.grey2};
            padding: 20px 10px;
            color: ${Colors.white};
            cursor: pointer;

            &:first-of-type {
              border-radius: 10px 10px 0px 0px;
            }

            &:last-of-type {
              border-radius: 0px 0px 10px 10px;
            }

            &:hover {
              background-color: ${Colors.grey1};
            }
          }
        }
      }

      .movies-wrapper {
        height: calc(100vh - 200px);
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        .movie-card {
          background-color: ${Colors.white};
          position: relative;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          width: 500px;
          margin-bottom: 20px;
          cursor: pointer;

          img {
            height: 120px;
            width: auto;
            margin-right: 20px;
            border-radius: 10px;
          }

          .info {
            margin-top: 10px;
            .title {
              font-size: 28px;
              margin-bottom: 10px;
              font-weight: 700;
              color: ${Colors.grey1};
            }
            .year {
              font-size: 22px;
              color: ${Colors.darkGrey};
            }
          }

          .type {
            background-color: ${Colors.grey1};
            color: ${Colors.white};
            border-radius: 0px 10px 0px 10px;
            padding: 5px 20px;
            position: absolute;
            top: 0;
            right: -1px;
          }
        }

        .loadMore {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;

          img {
            width: 75px;
            height: auto;
          }
        }
      }
    }
  }
`;

export {
  StyledDashboard
}