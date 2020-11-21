'use strict';

module.exports.index = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'here\'s your user:',
        value: {
          userName: "Jeffy B",
          joinDate: "09/19/2020"
        },
      },
      null,
      2
    ),
  };
};
