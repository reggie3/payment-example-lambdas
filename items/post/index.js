exports.handler = (event, context, callback) => {
  const done = (err, success) => {
    if (err) {
      callback(
        null,
        JSON.stringify({
          type: "error",
          msg: "Failure from Lambda",
          err: err
        })
      );
    } else {
      callback(
        null,
        JSON.stringify({
          type: "success",
          msg: "Hello from Lambda"
        })
      );
    }
  };

  /****
   * Enter here
   */
  try {
        done(null, "you got an success");
  } catch (error) {
        done(error);
  }
};
