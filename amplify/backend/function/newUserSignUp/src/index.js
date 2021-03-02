exports.handler = (event, context, callback) => {
  //eslint-disable-line
  event.response.autoConfirmUser = true;
  context.done(null, event);
};
