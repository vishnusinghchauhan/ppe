
// validation of new register page
export const addCondidateValidate = (data) => {
   return new Promise((resolve, reject) => {
      let errors = {};
      let formIsValid = true;
      if (data.name.length == 0) {
         formIsValid = false;
         errors["name"] = "Name is required!";
         reject(errors)
      }
      if (data.email.length == 0) {
         formIsValid = false;
         errors["email"] = "Email is required!";
         reject(errors)
      }
      if (data.email.length > 0) {
         let lastAtPos = data.email.lastIndexOf('@');
         let lastDotPos = data.email.lastIndexOf('.');
         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') == -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
            reject(errors)
         }
      }
      if (data.phone.length == 0) {
         formIsValid = false;
         errors["phone"] = "Phone is required!";
         reject(errors)
      }
      if (data.ctc.length == 0) {
         formIsValid = false;
         errors["ctc"] = "CTC is required!";
         reject(errors)
      }
      if (data.ectc.length == 0) {
         formIsValid = false;
         errors["ectc"] = "ECTC is required!";
         reject(errors)
      }
      if (data.notice_period.length == 0) {
         formIsValid = false;
         errors["notice_period"] = "Notice Period is required!";
         reject(errors)
      }
      resolve(formIsValid)
   })
};



export const condidateActivityValidate = (data) => {
   return new Promise((resolve, reject) => {
      let errors = {};
      let formIsValid = true;
      if (data.activity_desc.length == 0) {
         formIsValid = false;
         errors["activity_desc"] = "Name is required!";
         reject(errors)
      }
      if (data.activity_title.length == 0) {
         formIsValid = false;
         errors["activity_title"] = "activity title is required!";
         reject(errors)
      }
      resolve(formIsValid)
   })
};


export const changePasswordValidate = (data) => {
   return new Promise((resolve, reject) => {
      let errors = {};
      let formIsValid = true;
      if (data.password.length == 0) {
         formIsValid = false;
         errors["password"] = "passord is required!";
         reject(errors)
      }
      if (data.cpassword.length == 0 ) {
         formIsValid = false;
         errors["cpassword"] = "cpassword is required!";
         reject(errors)
      }

      if (data.cpemail.length == 0) {
         formIsValid = false;
         errors["cpemail"] = "Email is required!";
         reject(errors)
      }
      if (data.cpemail.length > 0) {
         let lastAtPos = data.cpemail.lastIndexOf('@');
         let lastDotPos = data.cpemail.lastIndexOf('.');
         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.cpemail.indexOf('@@') == -1 && lastDotPos > 2 && (data.cpemail.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["cpemail"] = "Email is not valid";
            reject(errors)
         }
      }

      resolve(formIsValid)
   })
};




export const jobNotificationValidate = (data) => {
   return new Promise((resolve, reject) => {
      console.log("RDDDDDDDDDDd", data)
      let errors = {};
      let formIsValid = true;
      if (data.title.length == 0) {
         formIsValid = false;
         errors["title"] = "title is required!";
         reject(errors)
      }
      if (data.description.length == 0) {
         formIsValid = false;
         errors["description"] = "description is required!";
         reject(errors)
      }
      resolve(formIsValid)
   })
};




export const validateContactusForm = (data) => {
   return new Promise((resolve, reject) => {
      let errors = {};
      let formIsValid = true;
      if (data.name.length == 0) {
         formIsValid = false;
         errors["name"] = "Name is required!";
         reject(errors)
      }
      if (data.email.length == 0) {
         formIsValid = false;
         errors["email"] = "Email is required!";
         reject(errors)
      }
      if (data.email.length > 0) {
         let lastAtPos = data.email.lastIndexOf('@');
         let lastDotPos = data.email.lastIndexOf('.');
         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') == -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
            reject(errors)
         }
      }
      if (data.subject.length == 0) {
         formIsValid = false;
         errors["subject"] = "subject is required!";
         reject(errors)
      }
      
      resolve(formIsValid)
   })
};



export const validateAddEmployee = (data) => {
   return new Promise((resolve, reject) => {
      console.log("rrrrrrrrrrrrrrrrrrrr", data)
      let errors = {};
      let formIsValid = true;
      if (data.name.length == 0) {
         formIsValid = false;
         errors["name"] = "Name is required!";
         reject(errors)
      }
      if (data.email.length == 0) {
         formIsValid = false;
         errors["email"] = "Email is required!";
         reject(errors)
      }
      if (data.email.length > 0) {
         let lastAtPos = data.email.lastIndexOf('@');
         let lastDotPos = data.email.lastIndexOf('.');
         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') == -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
            reject(errors)
         }
      }
      if (data.phone.length == 0) {
         formIsValid = false;
         errors["phone"] = "Phone is required!";
         reject(errors)
      }

      if (data.salary.length == 0) {
         formIsValid = false;
         errors["salary"] = "salary is required!";
         reject(errors)
      }
      if (data.pf_amount.length == 0) {
         formIsValid = false;
         errors["pf_amount"] = "pf_amount is required!";
         reject(errors)
      }
      if (data.tex_amount_percentage.length == 0) {
         formIsValid = false;
         errors["tex_amount_percentage"] = "tex_amount_percentage is required!";
         reject(errors)
      }
      resolve(formIsValid)
   })
};





export const validateUpdateEmployee = (data) => {
   return new Promise((resolve, reject) => {
      let errors = {};
      let formIsValid = true;
      console.log("rrrrrrrrrrrrrrrrrrrr", data)
      if (data.salary == undefined ||  data.salary.length == 0) {
         formIsValid = false;
         errors["salary"] = "salary is required!";
         reject(errors)
      }
      if (data.pf_amount == undefined || data.pf_amount.length == 0) {
         formIsValid = false;
         errors["pf_amount"] = "pf_amount is required!";
         reject(errors)
      }
      if (data.tex_amount_percentage == undefined ||  data.tex_amount_percentage.length == 0) {
         formIsValid = false;
         errors["tex_amount_percentage"] = "tex_amount_percentage is required!";
         reject(errors)
      }
      resolve(formIsValid)
   })
};


export const registerValidate = (data) => {
   return new Promise((resolve, reject) => {
      console.log("registerValidate", data)
      let errors = {};
      let formIsValid = true;
      if (data.password == undefined ||  data.password.length == 0) {
         formIsValid = false;
         errors["password"] = "password is required!";
         reject(errors)
      }
      if (data.password.length < 8) {
            formIsValid = false;
            errors["password"] = "Your password must be at least 8 characters!";
            reject(errors)
       }
       if (data.password.search(/[a-z]/i) < 0) {
            formIsValid = false;
            errors["password"] = "Your password must contain at least one letter.";
            reject(errors)
       }
       if (data.password.search(/[0-9]/) < 0) {
           formIsValid = false;
            errors["password"] = "Your password must contain at least one digit.";
            reject(errors)
      }
   
      if (data.password.search(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/) < 0) {
         formIsValid = false;
         errors["cpassword"] = "Your password must contain at least Special character!";
         reject(errors)
      }
       if (data.cpassword != data.password) {
         formIsValid = false;
         errors["cpassword"] = "Your password and conform password should be same!";
         reject(errors)
      }
      if (data.name == undefined ||  data.name.length == 0) {
         formIsValid = false;
         errors["name"] = "name is required!";
         reject(errors)
      }
      if (data.phone == undefined ||  data.phone.length == 0) {
         formIsValid = false;
         errors["phone"] = "phone is required!";
         reject(errors)
      }
      if (data.email == undefined ||  data.email.length == 0) {
         formIsValid = false;
         errors["email"] = "Valid email is required!";
         reject(errors)
      }
      if (data.email.length > 0) {
         let lastAtPos = data.email.lastIndexOf('@');
         let lastDotPos = data.email.lastIndexOf('.');
         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') == -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
            reject(errors)
         }
      }
      resolve(formIsValid)
   })
};



export const loginValidate = (data) => {
   return new Promise((resolve, reject) => {
      console.log("registerValidate", data)
      let errors = {};
      let formIsValid = true;
      if (data.email == undefined ||  data.email.length == 0) {
         formIsValid = false;
         errors["email"] = "email is required!";
         reject(errors)
      }
      if (data.email.length > 0) {
         let lastAtPos = data.email.lastIndexOf('@');
         let lastDotPos = data.email.lastIndexOf('.');
         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data.email.indexOf('@@') == -1 && lastDotPos > 2 && (data.email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
            reject(errors)
         }
      }
      if (data.password == undefined ||  data.password.length == 0) {
         formIsValid = false;
         errors["password"] = "password is required!";
         reject(errors)
      }
      resolve(formIsValid)
   })
};