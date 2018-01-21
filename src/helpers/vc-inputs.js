export const initialFormState = {
  name: null,
  affiliation: 'Individual',
  website: null,
  contact: null,
  check_size: null,
  investments_per_year: null,
  status: 'Contacted',
  location: null,
  potential: 'High',
  interests: null,
};

export const vcInputs = {
  name: {
    field: 'name',
    placeholder: 'Venture Capitalist Name/Firm',
  },
  affiliation: {
    field: 'affiliation',
    placeholder: 'Affiliation',
    dropdown: true,
    options: [
      'Individual',
      'Group',
      'Venture Firm'
    ],
  },
  website: {
    field: 'website',
    placeholder: 'Website',
  },
  contact: {
    field: 'contact',
    placeholder: 'Contact',
  },
  check_size: {
    field: 'check_size',
    placeholder: 'Typical Check Size',
    type: 'number',
  },
  investments_per_year: {
    field: 'investments_per_year',
    placeholder: 'Investments Per Year',
    type: 'number',
  },
  status: {
    field: 'status',
    placeholder: 'Status',
    dropdown: true,
    options: [
      'Contacted',
      'Researched',
      'Acquired',
      'Discussing Terms',
    ],
  },
  location: {
    field: 'location',
    placeholder: 'Location',
  },
  potential: {
    field: 'potential',
    placeholder: 'Potential',
    dropdown: true,
    options: [
      'High',
      'Medium',
      'Low',
    ],
  },
  interests: {
    field: 'interests',
    placeholder: 'Interests',
    textArea: true,
  },
};
