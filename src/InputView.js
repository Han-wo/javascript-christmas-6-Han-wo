import Console from "@woowacourse/mission-utils";

class InputView {
  static async readDate() {
    while (true) {
      const input = await Console.readLineAsync(
        "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
      );
      const parsedInput = parseInt(input, 10);

      if (!isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= 31) {
        return parsedInput;
      } else {
        Console.print("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
      }
    }
  }

  static async readMenu() {
    const menu = [];
    while (true) {
      const order = await Console.readLineAsync(
        "주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)"
      );
      if (order.toLowerCase() === "done") {
        break;
      }
      const [itemName, quantity] = order.split("-");
      const parsedQuantity = parseInt(quantity, 10);

      if (parsedQuantity > 0) {
        menu.push({ name: itemName, quantity: parsedQuantity });
      } else {
        Console.print("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
      }
    }
    return menu;
  }
}

export default InputView;
