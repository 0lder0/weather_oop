class Weather {
    constructor(city) {
        this.city = city;
        this.key = '2fd1b33f25581bd3bc35eecc5048f3ff';
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const responceData = await responce.json();
        return responceData
    }

    changeCity(city){
        this.city = city;
    }
}