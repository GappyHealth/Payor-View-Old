var json = require('./emrPulls/patients.json'); //(with path)
var insurance  = require('./bcbs.json');
var provider = require('./emrPulls/newProviderDB.json');
var providerClosed = require('./emrPulls/providerClosed.json');
var practice = require('./emrPulls/practice.json');
var practiceOpen = require('./emrPulls/practiceOpen.json');
var bcbsList = require('./bcbsPulls/bcbsList.json');

export function getInsurance(path) {
    var data = [];

    if (path.includes('provider')) {
        var strArray = path.split('/');
        var id = strArray[2];
        
        data = getSingleProvider(id);
        return data;
    }

    else if (path.includes('practice')) {
        var strArray = path.split('/');
        var id = strArray[2];
        
        data = getPractice(id);
        return data;
    } 
    
    else {
        return insurance;
    }

    return null;
}

export function getBCBSList() {
    return bcbsList;
}

export function getBCBSListWPath(path) {
    var data = [];

    if (path.includes('provider')) {
        var strArray = path.split('/');
        var id = strArray[2];
        
        for (var i = 0; i < bcbsList.length; i++) {
            if (bcbsList[i].physicianNPI === id)
                data.push(bcbsList[i])
        }
        
        return data;
    }

    else if (path.includes('practice')) {
        var strArray = path.split('/');
        var id = strArray[2];
        
        for (var i = 0; i < bcbsList.length; i++) {
            if (bcbsList[i].practiceID === id)
                data.push(bcbsList[i])
        }

        return data;
    } else {
        return bcbsList
    }
}

export function getPending(array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_verified === false)
            tempObj.push(data[i])
    }

    return tempObj;
    
}

export function getVerified(array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_verified === true)
            tempObj.push(data[i])
    }

    return tempObj;
    
}

export function getPractice(id) {
    let data = practice;
     
    for (let i = 0; i < data.length; i++) {
        if (data[i]._id === id)
            return practice[i];
    }

    return practice;
}

export function getProviders() {
    return provider;
}

export function getPatients(array) {
    return array;
}

export function getPatientsAll() {
    return json;
}

export function getdata(path) {
    let patients = [];
    let tempObj = [];
    let meta = {};

    if (path.includes('provider')) {
        var strArray = path.split('/');
        var id = strArray[2];

        return getProviderPatients(id)
    }
    else if (path.includes('practice')) {
        var strArray = path.split('/');
        var id = strArray[2];

        return getPracticePatients(id)
    } 
    
    else {
        return json;
    }

    return tempObj;
}

export function getProviderPatients(id) {
    let data = json;
    let tempObj = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].physicianNPI === id) {
            tempObj.push(data[i]);
        }
    }

    return tempObj;
}

export function getSingleProvider(id) {
    let data = provider;

    for (var i = 0; i < provider.length; i++) {
        if (provider[i].physicianNPI === id)
            return provider[i];
    }

    return null;
}

export function getSingleProviderPerformance(id) {
    let data = providerClosed;

    for (var i = 0; i < provider.length; i++) {
        if (provider[i].physicianNPI === id)
            return provider[i];
    }

    return null;
}

//Return All Providers for Respective Practice
export function getPracticeProviders(id) {
    let data = provider;
    let tempObj = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].practiceID === id) {
            tempObj.push(data[i]);
        }
    }

    return tempObj;
}

export function getPracticePerformance(id) {
    let data = providerClosed;
    let tempObj = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].practiceID === id) {
            tempObj.push(data[i]);
        }
    }

    return tempObj;
}

export function getPracticePatients(id) {
    let data = json;
    let prov = provider;
    let tempObj = [];

    for (let i = 0; i < prov.length; i++) {
        if (prov[i].practiceID === id) {
            for (let j = 0; j < data.length; j++) {
                if (data[j].physicianNPI === prov[i].physicianNPI)
                    tempObj.push(data[j])
            }
        }
    }

    return tempObj;
}

export function closedProviderGaps() {
    return providerClosed;
}

export function openPracticeGaps() {
    return practiceOpen;
}

export function filterPatientsCompleted(array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_complete === true)
            tempObj.push(data[i])
    }

    return tempObj;
}

export function filterPatientsControlled(array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === true && data[i].is_verified == true)
            tempObj.push(data[i])
    }

    return tempObj;
}

export function filterPatientsUnControlled(array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if (data[i].is_verified == true)
                tempObj.push(data[i])
    }

    return tempObj;
}

export function filterPatientsCompliant(array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if (data[i].is_compliant === true && data[i].is_verified == true)
                tempObj.push(data[i])
    }

    return tempObj;
}

export function filterPatientsUnCompliant(array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled == false || data[i].is_controlled == null)
            if (data[i].is_compliant == false || data[i].is_compliant == null && data[i].is_verified == true)
                tempObj.push(data[i])
    }

    return tempObj;
}

export function noReading (array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if ( data[i].is_current_year === null && data[i].is_compliant == true && data[i].is_verified == true)
                tempObj.push(data[i])
    }

    return tempObj;
}

export function noReadingNotScheduled (array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if ( data[i].is_current_year === null && data[i].is_compliant == true && data[i].is_verified == true)
                if ( data[i].next_visit == null)
                    tempObj.push(data[i])
    }

    return tempObj;
}

export function noReadingScheduled (array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if ( data[i].is_current_year === null && data[i].is_compliant == true && data[i].is_verified == true )
                if ( data[i].next_visit != null )
                    tempObj.push(data[i])
    }

    return tempObj;
}

export function reading (array) {
    let data = array;
    var tempObj = [];

    console.log('ran');

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if ( data[i].is_current_year === true && data[i].is_compliant == true && data[i].is_verified == true)
                tempObj.push(data[i])
    }

    return tempObj;
}

export function readingNotScheduled (array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if ( data[i].is_current_year === true && data[i].is_compliant == true && data[i].is_verified == true)
                if ( data[i].next_visit == null)
                    tempObj.push(data[i])
    }

    return tempObj;
}

export function readingScheduled (array) {
    let data = array;
    var tempObj = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].is_controlled === false || data[i].is_controlled === null)
            if ( data[i].is_current_year === true && data[i].is_compliant == true && data[i].is_verified == true) 
                if ( data[i].next_visit != null)
                    tempObj.push(data[i])
    }

    return tempObj;
}