import InputView from "./InputView";
import OutputView from "./OutputView";
import { Console } from "@woowacourse/mission-utils";

class EventPlanner {
  constructor() {
    this.menu = [];
  }

  async start() {
    const visitDate = await InputView.readDate();
    this.menu = await InputView.readMenu();
    const eventDetails = this.calculateEventDetails();
    this.printEventPreview(visitDate, eventDetails);
  }

  calculateEventDetails() {
    const currentDate = new Date();
    const isChristmasPeriod =
      currentDate.getMonth() === 11 &&
      currentDate.getDate() >= 1 &&
      currentDate.getDate() <= 25;

    const eventDetails = [];
    const totalOrderAmount = this.menu.reduce(
      (total, item) => total + item.quantity * 1000,
      0
    );

    if (isChristmasPeriod) {
      let christmasDiscount = 1000;
      for (let i = 1; i <= currentDate.getDate(); i++) {
        eventDetails.push({
          eventName: "크리스마스 디데이 할인",
          amount: christmasDiscount,
        });
        christmasDiscount += 100;
      }
    }

    const isWeekend = currentDate.getDay() === 5 || currentDate.getDay() === 6;
    const isWeekday = currentDate.getDay() >= 1 && currentDate.getDay() <= 4;

    if (isWeekday) {
      this.menu
        .filter((item) => item.name.includes("디저트"))
        .forEach((item) => {
          eventDetails.push({
            eventName: "평일 할인",
            amount: item.quantity * 2023,
          });
        });
    }

    if (isWeekend) {
      this.menu
        .filter((item) => item.name.includes("메인"))
        .forEach((item) => {
          eventDetails.push({
            eventName: "주말 할인",
            amount: item.quantity * 2023,
          });
        });
    }

    if (currentDate.getDate() === 25) {
      eventDetails.push({ eventName: "특별 할인", amount: 1000 });
    }

    const totalBeforeDiscount =
      totalOrderAmount -
      eventDetails.reduce((total, event) => total + event.amount, 0);

    if (totalBeforeDiscount >= 120000) {
      eventDetails.push({ eventName: "증정 이벤트", amount: 25000 }); // Assuming champagne costs 25000
    }

    return eventDetails;
  }

  printEventPreview(visitDate, eventDetails) {
    Console.print(
      `${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
    OutputView.printMenu(this.menu);
    OutputView.printBenefitDetails(eventDetails);

    const summary = this.calculateSummary(eventDetails);
    OutputView.printSummary(summary);
  }

  calculateSummary(eventDetails) {
    const totalDiscountAmount = eventDetails.reduce(
      (total, event) => total + event.amount,
      0
    );
    const totalAfterDiscount =
      this.menu.reduce((total, item) => total + item.quantity * 1000, 0) -
      totalDiscountAmount;

    let badge = "없음";
    if (totalDiscountAmount >= 5000 && totalDiscountAmount < 10000) {
      badge = "별";
    } else if (totalDiscountAmount >= 10000 && totalDiscountAmount < 20000) {
      badge = "트리";
    } else if (totalDiscountAmount >= 20000) {
      badge = "산타";
    }

    return { totalDiscountAmount, totalAfterDiscount, badge };
  }
}

export default EventPlanner;
