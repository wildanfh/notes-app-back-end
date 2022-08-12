const clientError = (h, error) => {
  const response = h.response({
    status: "fail",
    message: error.message,
  });
  response.code(error.statusCode);
  return response;
};

const serverError = (h, error) => {
  const response = h.response({
    status: "error",
    message: "Maaf, terjadi kegagalan pada server kami.",
  });
  response.code(500);
  console.error(error);
  return response;
};

module.exports = { clientError, serverError };
