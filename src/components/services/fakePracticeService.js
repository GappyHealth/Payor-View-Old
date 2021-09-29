const bcbs = {
    members_cnt: '423',
    open_gaps: '234',
    provider_cnt: '24',
    practice_cnt: '5',
};

const gappy = {
    members_cnt: '420',
    open_gaps: '200',
    provider_cnt: '18',
    practice_cnt: '4',
};

const providers = [
    {
        "physicianName": "ARTHUR EFROS",
        "name": "ARTHUR EFROS",
        "physicianNPI": "1972672103",
        "practiceID": "hjui43h5hu32rw",
        "practice": "Oakland",
        "members_cnt": "8",
        "gaps": "8",
        "cbp": "8",
        "supd": "0",
        "spc": "0",
        "cdc": "0",
        "ninetyDay": "0",
        "mammogram": "0",
        "controlled": "0",
        "uncontrolled": "8",
        "compliant": "8",
        "uncompliant": "0",
        "noReading": "8",
        "noReadingScheduled": "0",
        "noReadingNotScheduled": "8",
        "reading": "0",
        "readingScheduled": "0",
        "readingNotScheduled": "0"
    }
]

const practices = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        name: "Oliver Health",
        members_cnt: "1000",
        providers_cnt: "3",
        gaps: "234",
        cbp: "19",
        supd: "43",
        spc: "54",
        cdc: "78",
        ninety_day: "50",
        mammogram: "100",
        last_visit: "1/14/20",
        risk_lvl: "3",

        cbp_report: {
            bcbs: '500',
            controlled: '100',
            uncontrolled: '400',
            compliant: '310',
            non_compliant: '90',
            no_reading: '100',
            no_reading_scheduled: '72',
            no_reading_not_scheduled: '28',
            yes_reading: '210',
            yes_reading_scheduled: '97',
            yes_reading_not_scheduled: '113',
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccdjgifas",
        name: "Millennium Health",
        members_cnt: "2300",
        providers_cnt: "10",
        gaps: "543",
        cbp: "19",
        supd: "43",
        spc: "54",
        cdc: "78",
        ninety_day: "50",
        mammogram: "100",
        last_visit: "3/09/20",
        risk_lvl: "14",

        cbp_report: {
            bcbs: '300',
            controlled: '100',
            uncontrolled: '200',
            compliant: '110',
            non_compliant: '90',
            no_reading: '50',
            no_reading_scheduled: '20',
            no_reading_not_scheduled: '30',
            yes_reading: '60',
            yes_reading_scheduled: '30',
            yes_reading_not_scheduled: '30',
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccdiorea8",
        name: "Rochester Medical",
        members_cnt: "890",
        providers_cnt: "5",
        gaps: "432",
        cbp: "19",
        supd: "43",
        spc: "54",
        cdc: "78",
        ninety_day: "50",
        mammogram: "100",
        last_visit: "1/23/20",
        risk_lvl: "9",

        cbp_report: {
            bcbs: '500',
            controlled: '100',
            uncontrolled: '400',
            compliant: '310',
            non_compliant: '90',
            no_reading: '100',
            no_reading_scheduled: '72',
            no_reading_not_scheduled: '28',
            yes_reading: '210',
            yes_reading_scheduled: '97',
            yes_reading_not_scheduled: '113',
        }
    }
];

const providersTemp = [
    {
        _id: "5b21ca3eeb7f616",
        _affiliationid: "5b21ca3eeb7f6fbccd471815",
        name: "Dr. Smith",
        affiliation: "Oliver Health",
        members_cnt: "432",
        address: {},
        contact_info: {},
        gaps: "234",
        cbp: "8",
        supd: "27",
        spc: "3",
        cdc: "5",
        ninety_day: "2",
        mammogram: "62",
        risk: "1",
        last_visit: "3/4/5",
        patients: [
            {
                name:'Jaden Samuel',
                address:'3234 West Point',
                dob: '11/15/65',
                phone: '248.232.2323',
                gap: 'CBP',
                last_visit: '11/04/2020',
                next_visit: '03/04/2021',
                risk_lvl: '14'
            },
            {
                name:'Ace Bulk',
                address:'1234 Jones Drive',
                dob: '2/3/47',
                phone: '248.232.1313',
                gap: 'SUPD',
                last_visit: '10/15/2019',
                next_visit: 'Not Scheduled',
                risk_lvl: '22'
            },
            {
                name:'Shaahid Khan',
                address:'7623 Acres Point',
                dob: '4/6/83',
                phone: '248.423.6453',
                gap: 'CBP',
                last_visit: '1/20/2019',
                next_visit: '1/14/2021',
                risk_lvl: '17'
            }
        ],

        cbp_report: {
            bcbs: '500',
            controlled: '100',
            uncontrolled: '400',
            compliant: '310',
            non_compliant: '90',
            no_reading: '100',
            no_reading_scheduled: '72',
            no_reading_not_scheduled: '28',
            yes_reading: '210',
            yes_reading_scheduled: '97',
            yes_reading_not_scheduled: '113',
        }
    },
    {
        _id: "5b21ca3eeb7f617",
        _affiliationid: "5b21ca3eeb7f6fbccd471815",
        name: "Dr. Jane",
        affiliation: "Oliver Health",
        members_cnt: "534",
        address: {},
        contact_info: {},
        gaps: "24",
        cbp: "2",
        supd: "3",
        spc: "54",
        cdc: "78",
        ninety_day: "50",
        mammogram: "100",
        risk: "1",
        last_visit: "3/4/5",

        patients: [
            {
                name:'Harden Samuel',
                address:'4321 West Point',
                dob: '11/15/65',
                phone: '248.432.2323',
                gap: 'CBP',
                last_visit: '11/11/2020',
                next_visit: 'Not Scheduled',
                risk_lvl: '14'
            },
            {
                name:'Grant Richardson',
                address:'4324 East Point',
                dob: '11/15/74',
                phone: '248.232.431',
                gap: 'CBP',
                last_visit: '11/04/2019',
                next_visit: '03/027/2021',
                risk_lvl: '10'
            }
        ],

        cbp_report: {
            bcbs: '500',
            controlled: '100',
            uncontrolled: '400',
            compliant: '310',
            non_compliant: '90',
            no_reading: '100',
            no_reading_scheduled: '72',
            no_reading_not_scheduled: '28',
            yes_reading: '210',
            yes_reading_scheduled: '97',
            yes_reading_not_scheduled: '113',
        }
    },
    {
        _id: "5b21ca3yub7f619",
        _affiliationid: "5b21ca3eeb7f6fbccdjgifas",
        name: "Dr. Not",
        affiliation: "Mellenium Health",
        members_cnt: "32",
        address: {},
        contact_info: {},
        gaps: "21",
        cbp: "3",
        supd: "4",
        spc: "5",
        cdc: "1",
        ninety_day: "4",
        mammogram: "1",
        risk: "10",
        last_visit: "1/6/5",

        patients: [
            {
                name:'Harden Samuel',
                address:'4321 West Point',
                dob: '11/15/65',
                phone: '248.432.2323',
                gap: 'CBP',
                last_visit: '11/11/2020',
                next_visit: 'Not Scheduled',
                risk_lvl: '14'
            },
            {
                name:'Grant Richardson',
                address:'4324 East Point',
                dob: '11/15/74',
                phone: '248.232.431',
                gap: 'CBP',
                last_visit: '11/04/2019',
                next_visit: '03/027/2021',
                risk_lvl: '10'
            }
        ],

        cbp_report: {
            bcbs: '500',
            controlled: '100',
            uncontrolled: '400',
            compliant: '310',
            non_compliant: '90',
            no_reading: '100',
            no_reading_scheduled: '72',
            no_reading_not_scheduled: '28',
            yes_reading: '210',
            yes_reading_scheduled: '97',
            yes_reading_not_scheduled: '113',
        }
    },
    {
        _id: "5b21ca3eeb7f618",
        _affiliationid: "5b21ca3eeb7f6fbccdiorea8",
        name: "Dr. Joe",
        affiliation: "Rochester Medical",
        members_cnt: "54",
        address: {},
        contact_info: {},
        gaps: "63",
        cbp: "19",
        supd: "43",
        spc: "3",
        cdc: "52",
        ninety_day: "50",
        mammogram: "99",
        risk: "3",
        last_visit: "3/4/5",

        patients: [
            {
                name:'Harden Samuel',
                address:'4321 West Point',
                dob: '11/15/65',
                phone: '248.432.2323',
                gap: 'CBP',
                last_visit: '11/11/2020',
                next_visit: 'Not Scheduled',
                risk_lvl: '14'
            },
            {
                name:'Grant Richardson',
                address:'4324 East Point',
                dob: '11/15/74',
                phone: '248.232.431',
                gap: 'CBP',
                last_visit: '11/04/2019',
                next_visit: '03/027/2021',
                risk_lvl: '10'
            }
        ],

        cbp_report: {
            bcbs: '500',
            controlled: '100',
            uncontrolled: '400',
            compliant: '310',
            non_compliant: '90',
            no_reading: '100',
            no_reading_scheduled: '72',
            no_reading_not_scheduled: '28',
            yes_reading: '210',
            yes_reading_scheduled: '97',
            yes_reading_not_scheduled: '113',
        }
    },
    {
        _id: "5b21ca3eeb7f619",
        _affiliationid: "5b21ca3eeb7f6fbccdjgifas",
        name: "Dr. Patrick",
        affiliation: "Mellenium Health",
        members_cnt: "32",
        address: {},
        contact_info: {},
        gaps: "21",
        cbp: "3",
        supd: "4",
        spc: "5",
        cdc: "1",
        ninety_day: "4",
        mammogram: "1",
        risk: "10",
        last_visit: "1/6/5",

        patients: [
            {
                name:'Harden Samuel',
                address:'4321 West Point',
                dob: '11/15/65',
                phone: '248.432.2323',
                gap: 'CBP',
                last_visit: '11/11/2020',
                next_visit: 'Not Scheduled',
                risk_lvl: '14'
            },
            {
                name:'Grant Richardson',
                address:'4324 East Point',
                dob: '11/15/74',
                phone: '248.232.431',
                gap: 'CBP',
                last_visit: '11/04/2019',
                next_visit: '03/027/2021',
                risk_lvl: '10'
            }
        ],

        cbp_report: {
            bcbs: '500',
            controlled: '100',
            uncontrolled: '400',
            compliant: '310',
            non_compliant: '90',
            no_reading: '100',
            no_reading_scheduled: '72',
            no_reading_not_scheduled: '28',
            yes_reading: '210',
            yes_reading_scheduled: '97',
            yes_reading_not_scheduled: '113',
        }
    },
];

export function getPractices() {
    return practices;
}

export function getPractice(id) {
    return practices.find(p => p._id === id);
}

//Return All Providers
export function getProviders() {
    return providers;
}

//Return All Providers for Respective Practice
export function getPracticeProviders(id) {
    let tempObj = [];

    for (let i = 0; i < providers.length; i++) {
        if (providers[i]._affiliationid === id) {
            tempObj.push(providers[i]); 
        }
    }

    return tempObj;
}

//Return Single Provider
export function getSingleProvider(id) {
    return providers.find(p => p._id === id);
}

//Return Gappy and BCBS Overall Data
export function getBCBSData() {
    return bcbs;
}

export function getGappyData() {
    return gappy;
}
