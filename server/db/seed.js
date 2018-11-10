const createNeighborhoods = () => {
  const neighborhoods = [];
  neighborhoods.push(
    {
      id: 1,
      name: 'Central Harlem',
      zipcodes: ['10026', '10030'],
    },
    {
      id: 2,
      name: 'West Harlem',
      zipcodes: ['10027', '10025'],
    },
    {
      id: 3,
      name: 'Chelsea',
      zipcodes: ['10001', '10011'],
    },
    {
      id: 4,
      name: 'Hells Kitchen',
      zipcodes: ['10018', '10019', '10036'],
    },
    {
      id: 5,
      name: 'Midtown',
      zipcodes: ['10020'],
    },
    {
      id: 6,
      name: 'East Harlem',
      zipcodes: ['10029', '10035', '10037', '10039'],
    },
    {
      id: 7,
      name: 'Gramercy Park',
      zipcodes: ['10010'],
    },
    {
      id: 8,
      name: 'Murray Hill',
      zipcodes: ['10016'],
    },
    {
      id: 9,
      name: 'Midtown East',
      zipcodes: ['10017', '10022'],
    },
    {
      id: 10,
      name: 'Greenwich Village',
      zipcodes: ['10013'],
    },
    {
      id: 11,
      name: 'Soho',
      zipcodes: ['10012'],
    },
    {
      id: 12,
      name: 'West Village',
      zipcodes: ['10014'],
    },
    {
      id: 13,
      name: 'Financial District',
      zipcodes: ['10004', '10005', '10006', '10007', '10038', '10280', '10048'],
    },
    {
      id: 14,
      name: 'Lower East Side',
      zipcodes: ['10002'],
    },
    {
      id: 15,
      name: 'East Village',
      zipcodes: ['10003', '10009'],
    },
    {
      id: 16,
      name: 'Upper East Side',
      zipcodes: ['10021', '10028', '10044', '10065', '10075', '10128'],
    },
    {
      id: 17,
      name: 'Upper West Side',
      zipcodes: ['10023', '10024', '10025'],
    },
    {
      id: 18,
      name: 'Washington Heights',
      zipcodes: ['10031', '10032', '10033'],
    },
    {
      id: 19,
      name: 'Inwood',
      zipcodes: ['10034', '10040'],
    }
  );
  return neighborhoods;
};

module.exports = { createNeighborhoods };
