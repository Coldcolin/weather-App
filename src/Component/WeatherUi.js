import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import img from './Images/download.jpg'
import axios from 'axios'
import moment from 'moment'


const WeatherUi = () => {
    const [weatherSearch, setWeatherSearch] = useState("Lagos");
    const [weather, setWeather] = useState({});
    // const [loading, setLoading] = useState(false)
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&appid=59c181194928d41ba36d3c2e3a0e4b8e`
    // const apiKey = '59c181194928d41ba36d3c2e3a0e4b8e'


    const axiosData = async () => {
        // try{
        //     const {data} = await axios.get(url);
        //     return data;
        // }catch(error){
        //     throw error
        // }
        const res = await axios.get(url);
        if (res) {
            console.log(res.data)
            setWeather(res.data);
        }
    };

    useEffect(() => {
        axiosData();
    }, []);
    return (
        <Container>
            <Wrapper>
                <MainCard>
                    <LeftPart>
                        <Top>
                        <Holder>
                            <Input
                            placeholder="Search for City"
                            value={weatherSearch}
                            onChange={(e) => {
                                setWeatherSearch(e.target.value);
                            }}
                            />
                            <Button
                            onClick={() => {
                                axiosData();
                            }}
                            >
                            Search
                            </Button>
                        </Holder>
                        </Top>
                            {weather !== null? (
                            <Bottom>
                            <Country>
                            {weather?.sys?.country}
                            </Country>
                            <City>
                            {weather?.name}
                            </City>
                            <Calendar>
                                <Time>
                                {weather?.weather[0]?.description}
                                </Time>
                                <Date>
                                {/* {moment(Date.now()).format("D MMMM YYYY, h: mm a")} */}
                                </Date>
                            </Calendar>
                            <Temp> 
                            {Math.ceil(weather?.main?.temp - 273.15)} &deg;C 
                            </Temp>
                        </Bottom>
                        ): null}  
                        
                    </LeftPart>
                    {weather !==null? (
                        <RightPart>
                        <Image src={img} alt=''/>
                        <Condition>
                        {weather?.weather[0]?.main}
                        </Condition>
                        <Line1></Line1>
                        <Talk>
                            <Hour>Feels like</Hour>
                            <What>{Math.ceil(weather?.main?.feels_like - 273.15)} &deg;C</What>
                        </Talk>
                        <Line></Line>
                        <Talk>
                            <Hour>09:00</Hour>
                            <What>22 &deg;C</What>
                        </Talk>
                        <Line></Line>
                        <Talk>
                            <Hour>12:00</Hour>
                            <What>24 &deg;C</What>
                        </Talk>
                        <Line></Line>
                        <Talk>
                            <Hour>15:00</Hour>
                            <What>23 &deg;C</What>
                        </Talk>
                        <Line></Line>
                        <Talk>
                            <Hour>18:00</Hour>
                            <What>20 &deg;C</What>
                        </Talk>
                        
                    </RightPart>
                    ): null}
                </MainCard>
            </Wrapper>
        </Container>
    )
}

export default WeatherUi

const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: white;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainCard = styled.div`
    width: 70%;
    height: 70%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LeftPart = styled.div`
    width: 70%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background-image: url('Images/pexels-simon-berger-1323550.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: soft-light;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Holder = styled.div`
    display: flex;
`;
const Button = styled.div`
    margin-left: 10px;
    height: 30px;
    width: 100px;
    background-color: cornflowerblue;
    border-radius: 5px;
    transition: all 350ms;
    transform: scale(1);
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`;

const Input = styled.input`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 10px;
`;

// const Image = styled.img`
//     width: 300px;
//     height: 250px;
//     border-radius: 10px;
//     object-fit: cover;
//     background-color: red;
// `;
const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 30px;
`
const Country = styled.div`
    font-size: 30px;
`
const City = styled.div`
    text-transform: uppercase;
    margin-top: 10px;
`
const Bottom = styled.div`
    margin: 30px;
    display: flex;
    justify-content: space-between;
`
const Calendar = styled.div``
const Time = styled.div`
    font-size: 30px;
`
const Date = styled.div``
const Temp = styled.div`
    font-size: 50px;
`
const RightPart = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`
const Image = styled.img`
    margin-top: 50px;
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 20px;
`
const Condition = styled.div``
const Line = styled.div`
    width: 80%;
    height: 1px;
    background-color: #fff;
`
const Line1 = styled.div`
    width: 80%;
    height: 2px;
    background-color: #fff;
`
const Talk = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`
const Hour = styled.div``
const What = styled.div``

const Load = styled.div`
    margin: 15%;
`