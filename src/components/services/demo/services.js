var practices = require('./practices.json');
var providers = require('./providers.json');
var cbp = require('./cbp.json');

export function getPractices() {
    return practices;
}

export function getPatients() {
    return cbp;
}

export function getProviders() {
    return providers;
}

export function getProvider(id) {
    let data = providers;
     
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id)
            return providers[i];
    }

    return providers;
}

export function getProviderPatients(name) {
    let data = cbp;
    let tempObj = [];

for (let i = 0; i < data.length; i++) {
        if (data[i].physicianName === name) {
            tempObj.push(data[i]);
        }
    }

    return tempObj;
}

export function getPractice(id) {
    let data = practices;
     
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id)
            return practices[i];
    }

    return practices[1];
}

//Return All Providers for Respective Practice
export function getPracticeProviders(id) {
    let data = providers;
    let tempObj = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].practiceID === id) {
            tempObj.push(data[i]);
        }
    }

    return tempObj;
}

// Which bucket
export function getPatientsInBucket(data, bucket) {
    
    if (data.length == 0) { return [] };
    
    console.log(data);
    let patients = [];

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].bucket.length; j++) {
            if (data[i].bucket[j] == bucket) {
                patients.push(data[i]);
                break;
            }
        }
    }

    console.log(patients);
    return patients;
}