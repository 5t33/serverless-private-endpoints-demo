'use strict';

module.exports.index = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Wow you\'re so logged in'
      },
      null,
      2
    ),
  };
};
