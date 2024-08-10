export function generateSubtitles(videoFile) {
  return new Promise((resolve) => {
    // Mocked subtitle data
    const mockSubtitles = [
      { startTime: 0, endTime: 1, text: "Hey" },
      { startTime: 1, endTime: 2, text: "guys," },
      { startTime: 2, endTime: 3, text: "I'm" },
      { startTime: 3, endTime: 4, text: "Priyanshu" },
      { startTime: 4, endTime: 5, text: "Gupta" }
    ];

    // Simulate processing time
    setTimeout(() => {
      resolve(mockSubtitles);
    }, 1000);
  });
}