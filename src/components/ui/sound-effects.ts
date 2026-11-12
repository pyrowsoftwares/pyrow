// Web Audio API Synthesizer - Disabled for maximum performance and silence
class SoundFX {
  public enabled: boolean = false;

  constructor() {
    this.enabled = false;
  }

  public toggle(): boolean {
    this.enabled = false;
    return false;
  }

  public playClick(_freq = 900) {}
  public playHover() {}
  public playSnap() {}
  public playChime() {}
  public playWhoosh() {}
}

export const soundFX = new SoundFX();
