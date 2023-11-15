import Console from "@woowacourse/mission-utils";

class OutputView {
  static printBenefitDetails(details) {
    Console.print("<혜택 내역>");
    if (details.length === 0) {
      Console.print("없음");
    } else {
      details.forEach((detail) =>
        Console.print(`${detail.eventName}: -${detail.amount}원`)
      );
    }
  }

  static printSummary(summary) {
    Console.print(`<총혜택 금액>
-${summary.totalDiscountAmount}원
  
<할인 후 예상 결제 금액>
${summary.totalAfterDiscount}원
  
<12월 이벤트 배지>
${summary.badge}`);
  }
}

export default OutputView;
