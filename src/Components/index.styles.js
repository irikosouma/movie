import styled from 'styled-components';
const Wrap = styled.div`

    .wrap-title {
        width: 90vw;
        margin: 5rem auto 3rem;
        max-width: 1170px;
        .title {
            color: #102a42;
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
        }
        .search {
            max-width: 600px;
            .input-style {
                width: 100% ;
                height: 50px;
                appearance: none;
                border: none;
                padding-left: 12px;
                border-radius: 3px;
                font-size: 16px;
                color: #324d67;
            }
        }
        .error {
            padding-top: 15px;
            color: #bb2525;
        }
    }
    .movie-list {
        width: 90vw;
        margin: 5rem auto 3rem;
        max-width: 1170px;
        padding-bottom: 5rem;
        padding-top: 3rem;
        .wrap-movie {
            display: grid;
            grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
            grid-gap: 2rem;
            gap: 2rem;
            .wrap-movie-item {
                position: relative;
                overflow: hidden;
                :hover {
                    .title-item {
                        transform: translateY(0%);
                    }
                }
                article {
                    padding: 0;
                    margin:0;
                    box-sizing: border-box;
                }
                .images-movie {
                    width: 100% ;
                    height: 400px  ;
                    display: block;
                    object-fit: cover;
                }
                .title-item {
                    transition: all .3s linear;
                    transform: translateY(100%);
                    width: calc(100% - 40px) ;
                    background-color: rgba(0,0,0,.6);
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    p {
                        margin: 0;
                        padding: 0;
                        color: #fff;
                        font-size: 16px;
                        line-height: 16px;
                        font-weight: 700;
                    }
                    .year {
                        padding-top: 20px;
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 51px) {
        .title {
            color: #102a42;
            font-size: 2rem;
            line-height: 40px;
            font-weight: 700;
        }
    }
`;
export {Wrap}



