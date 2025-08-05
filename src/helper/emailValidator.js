const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function emailValidator(email) {
  if (typeof email !== "string" || email.trim() === "") {
    return false;
  }

  return regex.test(email);
}

export default emailValidator;