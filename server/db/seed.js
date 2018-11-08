const createNeighborhoods = () => {
  const neighborhoods = [];
  neighborhoods.push(
    {
      name: 'Central Harlem',
      zipcodes: ['10026', '10027', '10030', '10037', '10039'],
    },
    {
      name: 'Chelsea and Clinton',
      zipcodes: ['10001', '10011', '10018', '10019', '10020', '10036'],
    },
    {
      name: 'East Harlem',
      zipcodes: ['10029', '10035'],
    },
    {
      name: 'Gramercy Park and Murray Hill',
      zipcodes: ['10010', '10016', '10017', '10022'],
    },
    {
      name: 'Greenwich Village and Soho',
      zipcodes: ['10012', '10013', '10014'],
    },
    {
      name: 'Lower Manhattan',
      zipcodes: ['10004', '10005', '10006', '10007', '10038', '10280'],
    },
    {
      name: 'Lower East Side',
      zipcodes: ['10002', '10003', '10009'],
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
      name: 'Inwood and Washington Heights',
      zipcodes: ['10031', '10032', '10033', '10034', '10040'],
    }
  );

  return neighborhoods;
};

module.exports = { createNeighborhoods };
