var patients = require("./json/patient.json");
var taskLibrary = require("./json/taskReference.json");
var billingcpt = require("./json/billingCodes.json");

// Exports Weekly Tasks
// Returns JSON Array of Patient Objects
export function getWeekly() {
  let tasks = patients.weekly;
  let reference = taskLibrary;
  let patientList = [];

  for (var i = 0; i < tasks.length; i++) {
    let tmp = tasks[i]._id;

    let ref = reference[tmp];

    let outcome = ref.outcomes;

    let description = ref.description.replace(
      /PATIENT/g,
      tasks[i].firstName + " " + tasks[i].lastName
    );
    let scheduledTop = outcome.scheduledTop.replace(
      /PATIENT/g,
      tasks[i].firstName + " " + tasks[i].lastName
    );
    let scheduledBottom = outcome.scheduledBottom.replace(
      /PATIENT/g,
      tasks[i].firstName + " " + tasks[i].lastName
    );
    let noAnswerTop = outcome.noAnswerTop.replace(
      /PATIENT/g,
      tasks[i].firstName + " " + tasks[i].lastName
    );
    let noAnswerBottom = outcome.noAnswerBottom.replace(
      /PATIENT/g,
      tasks[i].firstName + " " + tasks[i].lastName
    );

    let pt = {
      _id: tasks[i]._id,
      patientID: tasks[i].patientID,
      firstName: tasks[i].firstName,
      lastName: tasks[i].lastName,
      phone: tasks[i].phone,
      status: tasks[i].status,
      descriptor: tasks[i].descriptor,
      task: ref.task,
      reason: ref.reason,
      description: description,
      scheduledTop: scheduledTop,
      scheduledBottom: scheduledBottom,
      noAnswerTop: noAnswerTop,
      noAnswerBottom: noAnswerBottom,
    };

    patientList.push(pt);
  }

  console.log(patientList);

  return patientList;
}

// Gets Single Patient Data
// Return JSON Object
export function getPatient(path) {
  let tasks = patients.weekly;
  let reference = taskLibrary;

  let pathname = path.split("/");
  let getID = pathname[3];

  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].patientID == getID) {
      let tmp = tasks[i]._id;

      let ref = reference[tmp];

      let outcome = ref.outcomes;

      let description = ref.description.replace(
        /PATIENT/g,
        tasks[i].firstName + " " + tasks[i].lastName
      );
      let scheduledTop = outcome.scheduledTop.replace(
        /PATIENT/g,
        tasks[i].firstName + " " + tasks[i].lastName
      );
      let scheduledBottom = outcome.scheduledBottom.replace(
        /PATIENT/g,
        tasks[i].firstName + " " + tasks[i].lastName
      );
      let noAnswerTop = outcome.noAnswerTop.replace(
        /PATIENT/g,
        tasks[i].firstName + " " + tasks[i].lastName
      );
      let noAnswerBottom = outcome.noAnswerBottom.replace(
        /PATIENT/g,
        tasks[i].firstName + " " + tasks[i].lastName
      );

      let pt = {
        _id: tasks[i]._id,
        patientID: tasks[i].patientID,
        firstName: tasks[i].firstName,
        lastName: tasks[i].lastName,
        phone: tasks[i].phone,
        status: tasks[i].status,
        descriptor: tasks[i].descriptor,
        task: ref.task,
        reason: ref.reason,
        description: description,
        scheduledTop: scheduledTop,
        scheduledBottom: scheduledBottom,
        noAnswerTop: noAnswerTop,
        noAnswerBottom: noAnswerBottom,
      };

      return pt;
    }
  }

  return null;
}

export function getMBC() {
   let tasks = patients.monthly;
   let ref = taskLibrary;
   let patientList = {
      meta: {},
      patients: []
   };

   for (var i = 0; i < tasks.length; i++) {
      if (tasks[i]._id == "mbc") {
         patientList.meta = ref.mbc;
         patientList.patients.push(tasks[i]);
      }
   }

   console.log(patientList);

   return patientList;
}

export function getBillCPT() {
   return billingcpt;
}

export function serverPOST(obj){
  
}
