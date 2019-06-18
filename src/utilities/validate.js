const rules = {
  required: (value) => {
    if (value === '') {
      return false;
    }
  },
  email: (value) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return false;
    }
  },
};

export default rules;
