const companyInputs = {
  name: {
    field: 'name',
    placeholder: 'Company Name',
  },
  description: {
    field: 'description',
    placeholder: 'Company Description',
    textArea: true,
  },
  budget: {
    field: 'budget',
    placeholder: 'Budget Needed',
    prefix: '$',
    type: 'number',
  },
  raised: {
    field: 'raised',
    placeholder: 'Amount Raised',
    prefix: '$',
    type: 'number',
  },
  timeline: {
    field: 'timeline',
    placeholder: 'Deadline',
    type: 'date',
  },
};

export default companyInputs;
