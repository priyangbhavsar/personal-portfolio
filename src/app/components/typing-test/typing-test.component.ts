import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.scss']
})
export class TypingTestComponent implements OnInit {
  testText: string = "";
  userInput: string = "";
  isTestActive: boolean = false;
  timeLeft: number = 300;
  timer: any;
  wordsPerMinute: number = 0;
  accuracy: number = 100;
  isLoading: boolean = true; // Added loading flag
  isCompleted: boolean = false; // ✅ Added win condition flag

  ngOnInit() {
  }

  async init() {
    this.isLoading = true;
    this.isCompleted = false; // Reset win condition
    try {
      const response = await fetch('http://metaphorpsum.com/paragraphs/1/4');
      this.testText = await response.text();
    } catch (error) {
      console.error("Error fetching test text:", error);
      this.testText = "Failed to load text. Try again!";
    }
    this.isLoading = false;
  }

  async startTest() {
    await this.init();
    this.isTestActive = true;
    this.isCompleted = false;
    this.userInput = "";
    this.timeLeft = 300;
    this.wordsPerMinute = 0;
    this.accuracy = 100;

    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.checkCompletion(); // ✅ Check for win condition
      } else {
        clearInterval(this.timer);
        this.isTestActive = false;
        this.calculateResults();
      }
    }, 1000);
  }

  async resetTest() {
    await this.init();
    clearInterval(this.timer);
    this.isTestActive = false;
    this.userInput = "";
    this.timeLeft = 30;
    this.wordsPerMinute = 0;
    this.accuracy = 100;
    this.isCompleted = false;
  }

  onTyping() {
    if (!this.isTestActive) return;
    this.calculateResults();
    this.checkCompletion(); // ✅ Check for win condition
  }

  calculateResults() {
    const wordsTyped = this.userInput.trim().split(/\s+/).length;
    this.wordsPerMinute = Math.round((wordsTyped / (300 - this.timeLeft)) * 60) || 0;

    const correctChars = this.userInput.split('').filter((char, index) => char === this.testText[index]).length;
    this.accuracy = Math.round((correctChars / this.testText.length) * 100) || 0;
  }

  getCharClass(index: number): string {
    if (index < this.userInput.length) {
      return this.userInput[index] === this.testText[index] ? 'correct' : 'incorrect';
    } else if (index === this.userInput.length) {
      return 'current';
    }
    return '';
  }

  getWordClass(index: number): string {
    const currentUserInput = this.userInput.split(/\s+/)[index] ?? ''
    const currentTestText  = this.testText.split(/\s+/)[index] ?? ''


    if (index < this.userInput.split(/\s+/).length - 1) {
      return currentUserInput == currentTestText ? 'correct' : 'incorrect';
    } else if (index === this.userInput.split(/\s+/).length - 1) {
      return 'current';
    }
    return '';
  }

  checkCompletion() {
    if (this.userInput.trim() === this.testText.trim()) {
      this.endTest(true);
    }
  }

  endTest(won: boolean = false) {
    clearInterval(this.timer);
    this.isTestActive = false;
    this.isCompleted = won; // ✅ Set win flag
  }
}
