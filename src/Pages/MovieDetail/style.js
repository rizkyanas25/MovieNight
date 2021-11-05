import styled from "styled-components";

import { Colors } from "../../Constants";

const StyledMovieDetail = styled.div`
  .container {
    /* width: 100vw; */
    height: calc(100vh - 160px);
    display: flex;
    justify-content: center;

    .content {
      height: calc(100vh - 240px);
      width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${Colors.white};
      border: 1px solid ${Colors.grey2};
      border-radius: 10px;
      position: relative;
      padding: 20px;

      .back {
        position: absolute;
        top: 0;
        left: -60px;
        cursor: pointer !important;
      }

      .loading {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .data {
        width: 800px;
      }

      .movie {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        .left {
          margin-right: 20px;

          .poster {
            width: 250px;
            height: auto;
            margin-bottom: 20px;
            border-radius: 10px;
            cursor: pointer;
          }

          .imdb {
            background-color: ${Colors.yellow};
            border-radius: 10px;
            width: 240px;
            padding: 6px 5px;
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 700;
            img {
              width: 40px;
              height: auto;
              margin-right: 10px;
            }
          }
        }

        .right {
          width: 100%;
          width: -moz-available;
          width: -webkit-fill-available;
          width: fill-available;
          height: 100%;

          .info {
            border-bottom: 1px solid ${Colors.grey2};
            padding-bottom: 20px;
            .title {
              font-size: 36px;
              font-weight: 700;
              margin-bottom: 10px;
            }
            .year {
              margin-left: 2px;
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 8px;
            }
            .type {
              width: fit-content;
              padding: 6px 10px;
              border-radius: 10px;
              background-color: ${Colors.grey2};
              color: ${Colors.white};
              font-size: 18px;
              font-weight: 700;
            }
          }

          .plot {
            padding: 10px 0px;
            font-style: italic;
          }

          .detail {
            width: 100%;
            height: calc(100vh - 430px);
            overflow-y: scroll;
            &::-webkit-scrollbar {
              width: 5px;
            }

            &::-webkit-scrollbar-track {
              background: transparent;
              margin: 0px 5px;
              padding-left: 2px;
            }

            &::-webkit-scrollbar-thumb {
              border-radius: 10px;
              background-color: #1d1e26;
              -webkit-box-shadow: inset 0 0 6px ${Colors.darkGrey};
            }

            .item {
              margin-bottom: 10px;
              .key {
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
`;

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  .img-wrapper {
    img {
      height: 90vh;
      width: auto;
    }
  }
`

export {
  StyledMovieDetail,
  StyledModal
}