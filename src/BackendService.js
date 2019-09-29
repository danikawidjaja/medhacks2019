export default class BackendService {

    // Initializing important variables
    constructor(domain) {
        this.domain = 'http://localhost:8081' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
    }
    
    login(name){
        return this.fetch(`${this.domain}/login`, {
            method: 'POST',
            body: JSON.stringify({
                name
            })
        }).then(res => {
            return Promise.resolve(res);
        })
    }

    signup(name, hematocritValue, resistance){
        return this.fetch(`${this.domain}/signup`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                hematocritValue: new Number(hematocritValue),
                resistance: new Number(resistance)
            })
        }).then(res => {
            return Promise.resolve(res);
        })
    }

    setMeasurement(name, time, resistance){
        var patient = {
            name: name
        }
        var measurements = {
            time: time,
            resistance: resistance
        }
        return this.fetch(`${this.domain}/measurements`, {
            method: 'POST',
            body: JSON.stringify({
                patient,
                measurements
            })
        }).then(res => {
            return Promise.resolve(res);
        })
    }
    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    async _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
           var json_response = await response.json()
            var error = new Error()
            error.message = json_response.message
            throw error
        }
    }
}