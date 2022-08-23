export const validate = (data ,type) => {
  const errors = {};

  

  if (!data.email) {
    errors.email = "Email is required!";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid!";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required!";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be more than 6 characters!";
  } else {
    delete errors.password;
  }

 
  if (type === 'Signup') {

    if (!data.name.trim()) {
      errors.name = "Username is required!";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Please confirm your password!";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword =
        "Your confirm password must match with your password!";
    } else {
      delete errors.confirmPassword;
    }
  
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Please accept the terms and privacy rules!";
    }

  }
  return errors;
};
