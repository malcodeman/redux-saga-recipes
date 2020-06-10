import log from "loglevel";

const logger = () => (next) => (action) => {
  log.info(action);

  return next(action);
};

const crashReporter = () => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    log.error(error);

    throw error;
  }
};

export { logger, crashReporter };
