import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getTaskOfTheTime } from "./task-of-the-time";

describe("get task of the time should", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })
  afterEach(() => {
    vi.restoreAllMocks();
  })
  it("should return No activity given a time", () => {
    const time = new Date("2023-10-01T04:00:00Z");

    const currentTask = getTaskOfTheTime(time);

    expect(currentTask).toEqual('No activity')

  });

  it.each(['2023-10-01T06:00:00Z', '2023-10-01T06:59:00Z'])('should return do exercise between 6 AM - 7 AM', (timeString) => {

    const currentTask = getTaskOfTheTime(new Date(timeString));

    expect(currentTask).toEqual('Do Exercise');
  });

  it.each(['2023-10-01T07:00:00Z', '2023-10-01T07:59:00Z'])('should return do exercise between 7 AM - 8 AM', (timeString) => {

    const currentTask = getTaskOfTheTime(new Date(timeString));

    expect(currentTask).toEqual('Read and Study');
  });

  it.each(['2023-10-01T08:00:00Z', '2023-10-01T08:59:00Z'])('should return do exercise between 8 AM - 9 AM', (timeString) => {

    const currentTask = getTaskOfTheTime(new Date(timeString));

    expect(currentTask).toEqual('Have breakfast');
  })

});