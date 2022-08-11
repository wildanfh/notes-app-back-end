const errorServer = (h, error) => {
  const response = h.response({
    status: "error",
    message: "Maaf, terjadi kegagalan pada server kami",
  });
  response.code(500);
  console.error(error);
  return response;
};

const clientError = (h) => {
  const response = h.response({
    status: "fail",
    message: error.message,
  });
  response.code(error.statusCode);
  return response;
};

module.exports = { errorServer, clientError };
