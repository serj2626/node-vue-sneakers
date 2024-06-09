export const createUserValidationSchema = {
  username: {
    isLength: {
      errorMessage: "Минимальная длина 3 и максимальная 10",
      options: { min: 3, max: 10 },
    },
    notEmpty: {
      errorMessage: "Поле 'username' обязательно для вво",
    },
  },
  email: {
    isLength: {
      errorMessage: "Минимальная длина 6 и максимальная 10",
      options: { min: 6, max: 10 },
    },
    notEmpty: {
      errorMessage: "Поле 'email' обязательно для ввода",
    },
  },
  password: {
    isLength: {
      errorMessage: "Минимальная длина 3 и максимальная 10",
      options: { min: 3, max: 10 },
    },
    notEmpty: {
      errorMessage: "Поле 'password' обязательно для ввода",
    },
  },
};
