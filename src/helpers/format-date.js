export default (date) => {
  const dateNow = Date.parse(new Date());
  const dateFuture = Date.parse(new Date(date));
  let timeLeft = Math.abs(dateFuture - dateNow) / 1000;

  const days = Math.floor(timeLeft / 86400);
  timeLeft -= days * 86400;

  const hours = Math.floor(timeLeft / 3600) % 24;
  timeLeft -= hours * 3600;

  const minutes = Math.floor(timeLeft / 60) % 60;
  timeLeft -= minutes * 60;

  const seconds = timeLeft % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
