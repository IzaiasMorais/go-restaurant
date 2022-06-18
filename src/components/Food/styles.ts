import styled from "styled-components";

interface ImageBoxProps {
  isActive: boolean;
}

export const Container = styled.div`
  section {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
    margin-top: -6rem;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 4rem;

    .card {
      display: grid;
      gap: 0;
      border-radius: 0.25rem;

      .description {
        background: var(--grey);
        padding: 1.15rem;

        h1,
        p,
        strong {
          margin-bottom: 1.15rem;
        }

        p {
          font-size: 0.9rem;
        }

        strong {
          font-weight: 600;
          font-size: 1.3rem;
          color: var(--green);
        }
      }

      footer {
        background: var(--dark-grey);
        padding: 1.15rem;
        border-radius: 0 0 0.25rem 0.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .buttons {
          button {
            border: 0;
            border-radius: 0.5rem;
            padding: 0.5rem 0.5rem 0.2rem 0.5rem;
            margin-right: 0.3rem;
            background: var(--white);
          }
        }

        .switch-container {
          display: flex;
          gap: 0.3rem;
          align-items: center;

          .switch {
            position: relative;
            display: inline-block;
            width: 78px;
            height: 28px;
            margin-left: 12px;

            & input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #c72828;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 16px;

              &:before {
                position: absolute;
                content: "";
                height: 15px;
                width: 30px;
                left: 8px;
                bottom: 6px;
                background-color: white;
                -webkit-transition: 0.4s;
                transition: 0.4s;
                border-radius: 10px;
              }
            }

            input:checked + .slider {
              background-color: #39b100;
            }

            input:focus + .slider {
              box-shadow: 0 0 1px #2196f3;
            }

            input:checked + .slider:before {
              -webkit-transform: translateX(32px);
              -ms-transform: translateX(32px);
              transform: translateX(32px);
            }
          }
        }
      }
    }
  }
`;

export const ImageBox = styled.div<ImageBoxProps>`
  width: 100%;
  background: var(--white);
  border-radius: 0.5rem;

  img {
    width: 400px;
    max-height: 200px;
    margin-bottom: -0.5rem;
    border-radius: .5rem .5rem 0 0;
    opacity: ${(props) => (props.isActive ? 1 : 0.4)};
  }
`;
