const SIX_O_CLOCK = 6;
const SEVEN_O_CLOCK = 7;
const EIGHT_O_CLOCK = 8;

export function getTaskOfTheTime(currentTime: Date) {

  switch (currentTime.getUTCHours()) {
    case SIX_O_CLOCK:
      return "Do Exercise";
    case SEVEN_O_CLOCK:
      return "Read and Study";
    case EIGHT_O_CLOCK:
      return "Have breakfast";
    default:
      return "No activity";
  }
}