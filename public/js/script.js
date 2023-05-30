// Validation for the login forms
const email = document.getElementById("email")
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// that variable also applies to the email in regiter form
const password1 = document.getElementById("password")
const loginForm = document.getElementById("login-form")


// Validation for the register forms id="register-form"
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const remail = document.getElementById("email1")
const role = document.getElementById("role")
const department = document.getElementById("department")
const password = document.getElementById("password")
const registerForm = document.getElementById("register-form")

// Validation for the report forms

const title = document.getElementById("title")
const reporter = document.getElementById("reporter")
const summary = document.getElementById("summary")
const timeline = document.getElementById("timeline")
const root = document.getElementById("root")
const impact = document.getElementById("impact")
const resolution = document.getElementById("resolution")
const recommendation = document.getElementById("recommendation")
const conclusion = document.getElementById("conclusion")
const reportForm = document.getElementById("report-form")

//Error element that will show in the html
const errorElement = document.getElementByClass("error")
//Error Message in the forms
let messages = []

// submit Eventistener on login forms
loginForm.addEventListener("submit", (e) => {
  if (email.value === "" || email.value == null) {
    messages.push("Email is required")
  }

  if (password.value === "" || password.value == null) {
    messages.push("Please, enter your password")
  }

  if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
  }
})



// submit Eventistener on regiter forms
registerForm.addEventListener("submit", (e) => {
  if (fname.value === "" || fname.value == null) {
    messages.push("First name is required")
  }

  if (lname.value === "" || lname.value == null) {
    messages.push("Last name is required")
  }
  if (remail.value === "" || remail.value == null) {
    messages.push("Email address is required")
  }
  if (role.value === "" || role.value == null) {
    messages.push("Role is required")
  }
  if (department.value === "" || department.value == null) {
    messages.push("Root cause Analysis is required")
  }
  if (password.value === "" || password.value == null) {
    messages.push("impact is required")
  } else if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  } else if (password.value.length >= 20) {
    messages.push('Password must be shorter than 20 characters')
  } else if (password.value === "password") {
    messages.push('Password cant be password')
  }

  if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
  }
})



//submit Eventistener on report forms
reportForm.addEventListener("submit", (e) => {
  if (title.value === "" || title.value == null) {
    messages.push("Title is required")
  }

  if (reporter.value === "" || reporter.value == null) {
    messages.push("Reporter is required")
  }
  if (summary.value === "" || summary.value == null) {
    messages.push("Executive Summary is required")
  }
  if (timeline.value === "" || timeline.value == null) {
    messages.push("Timeline is required")
  }
  if (root.value === "" || root.value == null) {
    messages.push("Root cause Analysis is required")
  }
  if (impact.value === "" || impact.value == null) {
    messages.push("impact is required")
  }
  if (resolution.value === "" || resolution.value == null) {
    messages.push("Resolution is required")
  }
  if (recommendation.value === "" || recommendation.value == null) {
    messages.push("Recommendation is required")
  }
  if (conclusion.value === "" || conclusion.value == null) {
    messages.push("Conclusion is required")
  }
  if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(', ')
  }
})
