const createNeighborhoods = () => {
  const neighborhoods = [];
  neighborhoods.push(
    {
      name: 'Central Harlem',
      zipcodes: ['10026', '10030'],
    },
    {
      name: 'West Harlem',
      zipcodes: ['10027'],
    },
    {
      name: 'Chelsea',
      zipcodes: ['10001', '10011'],
    },
    {
      name: 'Hells Kitchen',
      zipcodes: ['10018', '10019', '10036'],
    },
    {
      name: 'Midtown',
      zipcodes: ['10020'],
    },
    {
      name: 'East Harlem',
      zipcodes: ['10029', '10035', '10037', '10039'],
    },
    {
      name: 'Gramercy Park',
      zipcodes: ['10010'],
    },
    {
      name: 'Murray Hill',
      zipcodes: ['10016'],
    },
    {
      name: 'Midtown East',
      zipcodes: ['10017', '10022'],
    },
    {
      name: 'Greenwich Village',
      zipcodes: ['10013'],
    },
    {
      name: 'Soho',
      zipcodes: ['10012'],
    },
    {
      name: 'West Village',
      zipcodes: ['10014'],
    },
    {
      name: 'Financial District',
      zipcodes: ['10004', '10005', '10006', '10007', '10038', '10280'],
    },
    {
      name: 'Lower East Side',
      zipcodes: ['10002'],
    },
    {
      name: 'East Village',
      zipcodes: ['10003', '10009'],
    },
    {
      name: 'Upper East Side',
      zipcodes: ['10021', '10028', '10044', '10065', '10075', '10128'],
    },
    {
      name: 'Upper West Side',
      zipcodes: ['10023', '10024', '10025'],
    },
    {
      name: 'Washington Heights',
      zipcodes: ['10031', '10032', '10033', '10040'],
    },
    {
      name: 'Inwood',
      zipcodes: ['10034'],
    }
  );

  return neighborhoods;
};

module.exports = { createNeighborhoods };
