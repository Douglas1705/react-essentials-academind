class GenSequential {
  private description: string[];
  private index: number = 0;
  private intervalId: number | null = null;
  private timeoutId: number | null = null;

  constructor(description: string[]) {
    this.description = description;
    console.log(this.description);
  }

  getNextDescription(): string {
    const nextDescription = this.description[this.index];
    this.index = (this.index + 1) % this.description.length;
    return nextDescription;
  }

  startUpdating(
    intervalTime: number,
    duration: number,
    callback: (_desc: string) => void,
  ): void {
    if (this.intervalId !== null) return;

    this.intervalId = window.setInterval(() => {
      callback(this.getNextDescription());
    }, intervalTime);

    this.timeoutId = window.setTimeout(() => this.stopUpdating(), duration);
  }

  stopUpdating(): void {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.timeoutId !== null) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}

export default GenSequential;
